import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { main } from './controllers/main.js';
import { returnEncryptedLink } from './utils/returnEncryptedLink.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const accessLogStream = createStream('access.log', {
    size: '10M',
    interval: '1d',
    path: logDirectory,
    maxFiles: 5,
    compress: 'gzip',
});

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));

app.post('/webhook', async (req: Request, res: Response) => {
    try {
        await main(req.body);
        res.status(200).send('OK');
    } catch (error) {
        console.error('Erro no /webhook:', error);
        res.status(500).send('Erro interno no webhook');
    }
});

app.get('/startAccessControlService', async (req: Request, res: Response) => {
    try {
        const link = await returnEncryptedLink(req.query);
        res.redirect(link);
    } catch (error) {
        console.error('Erro em /startAccessControlService:', error);
        res.status(500).send('Erro ao gerar o link');
    }
});

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ Message: 'API is running!!!' });
});

app.listen(3034, () => {
    console.log('Webhook ouvindo na porta 3034!');
});
