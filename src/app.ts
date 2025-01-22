import express from 'express';
import path from 'path';
import router from './routes/apiRoute';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/api/v1', router);

export default app;
