import 'dotenv/config';
import axios from 'axios';
import https from 'https';
import { PrismaClient } from '@prisma/client';
import { logError } from '../utils/logger.js';

const prisma = new PrismaClient();
const agent = new https.Agent({
    rejectUnauthorized: false,
});

type Config = {
    method: 'post';
    url: string;
    data: any;
    headers: {
        'Content-Type': string;
    };
    httpsAgent: any;
};

export const sendMsg = async (data: any, msg: any) => {
    const string = data.Body.Info.RemoteJid;
    const result = string.match(/[^@]*/);
    const telefone = result[0];
    const url = process.env.CHATPRO_ENDPOINT_MAIN as string;
    const authToken = process.env.CHATPRO_TOKEN_AUTH as string;
    const instanceId = process.env.CHATPRO_INTANCIA as string;
    let requestData = {
        number: telefone,
        message: msg,
    }
    try {
        const response = await axios.post(url, requestData, {
            headers: {
                Authorization: authToken,
                'Content-Type': 'application/json'
            },
            params: {
                instance_id: instanceId
            }
        });
    } catch (error) {
        console.log(error);
    }
    return
}

export const saveMsg = async (body: any) => {
    try {
        const existingRecords = await prisma.controle_acesso_wpp.findMany({
            where: {
                OR: [
                    { status: 'pendente' },
                ],
            },
        });
        const isCsIdExist = existingRecords.some((record: any) => {
            const dataJson = record.data_json as { [key: string]: any };
            return dataJson && dataJson.cs_id === body.cs_id;
        });
        if (isCsIdExist) {
            let msg = `Já existe uma solicitação de Controle de Acesso com este CS ID ${body.cs_id} com o status "pendente".`;
            console.log(msg);
            logError(undefined, msg, { whatsapp: body.whatsapp });
            return false;
        }
        type Result = { id: number };
        let id: number | null = null;
        const response = await prisma.$transaction(async (prisma: any) => {
            await prisma.$queryRaw`
                INSERT INTO controle_acesso_wpp (data_json, \`status\`)
                VALUES (${body}, 'pendente');
            `;
            const result = await prisma.$queryRaw<Result[]>`
                SELECT id
                FROM controle_acesso_wpp
                WHERE id = LAST_INSERT_ID();
            `;

            return result[0]?.id || null;
        });
        id = response;
        let returnRequest = await sendRequestApi(body, id);
        let updateResult: any = null;
        if (returnRequest) {
            updateResult = await prisma.$transaction(async (prisma: any) => {
                const updateSuccess = await updateOrderStatus(prisma, id);
                return updateSuccess;
            });
        }
        if (updateResult) return true;
        return false;
    } catch (e) {
        let msg = 'Erro ao salvar a mensagem:';
        console.log(msg, e);
        logError(e, msg, { whatsapp: body.whatsapp });
        return;
    }
};

const sendRequestApi = async (body: any, id: number | null) => {
    try {
        if (body.whatsapp) {
            let whatsapp = body.whatsapp;
            if (whatsapp.startsWith('55')) whatsapp = whatsapp.slice(2);
            const ddd = whatsapp.slice(0, 2);
            const numero = whatsapp.slice(2);
            body.whatsapp = `${ddd}9${numero}`;
        }
        const apiUrl = 'http://192.168.254.102:3230/api/v1/post/openGate/';
        const config: Config = {
            method: 'post',
            url: apiUrl,
            data: {
                "server": body.server,
                "csid": body.cs_id,
                "particao": body.particao,
                "phone": body.whatsapp
            },
            headers: {
                'Content-Type': 'application/json',
            },
            httpsAgent: agent,
        };
        const response = await axios(config);
        return true;
    } catch (e) {
        let msg = 'Erro ao enviar requisição para a API';
        logError(e, msg, { whatsapp: body.whatsapp });
        console.log(msg, e);
        if (id) await deleteCAById(id);
        throw new Error(msg);
    }
};

const updateOrderStatus = async (prisma: any, id: number | null) => {
    if (id === null) {
        let msg = 'ID não pode ser nulo.';
        throw new Error(msg);
    }
    try {
        await prisma.controle_acesso_wpp.update({
            where: { id },
            data: {
                status: 'aberta',
            },
        });
        return true;
    } catch (e) {
        let msg = `Erro ao atualizar controle de acesso com id ${id}:`;
        console.log(msg, e);
        logError(e, msg, { id_ca: id });
        return false;
    }
};

const deleteCAById = async (id: number | null) => {
    if (!id) {
        console.log('ID inválido para exclusão');
        return false;
    }
    try {
        await prisma.$transaction(async (prisma) => {
            await prisma.controle_acesso_wpp.delete({
                where: { id },
            });
            console.log(`C.A com ID ${id} foi excluído com sucesso.`);
        });
        return true;
    } catch (e) {
        console.log('Erro ao excluir a C.A:', e);
        return false;
    }
};