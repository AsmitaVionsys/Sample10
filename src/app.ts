import express from 'express';
import path from 'path';
import router from './routes/apiRoute';
import helmet from 'helmet';
import config from './config/config';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/api/v1', router);
app.use(helmet());
app.use(
    cors({
        methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
        origin: [config.FRONTEND_URL as string],
        credentials: true
    })
);

export default app;
