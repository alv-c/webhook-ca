import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDirectory = path.join(__dirname, '..', 'logs');
const errorLogPath = path.join(logDirectory, 'error.log');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

export const logError = (
    error?: any,
    message?: string,
    context?: { [key: string]: any }
) => {
    const timestamp = new Date().toISOString();

    let log = `[${timestamp}]`;
    if (message) log += ` ${message}`;
    if (context && Object.keys(context).length > 0) {
        log += ` | Contexto: ${JSON.stringify(context)}`;
    }

    const errorStack = error?.stack || error?.toString() || '';
    const finalLog = `${log}${errorStack ? `\n${errorStack}` : ''}\n\n`;

    fs.appendFile(errorLogPath, finalLog, (err) => {
        if (err) console.error('Erro ao escrever no error.log:', err);
    });
};

