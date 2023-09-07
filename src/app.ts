import express, { Request, Response } from 'express';
import packagesRouter from './routers/package.router';
import loginRouter from './routers/login.router';
import authMiddleware from './middlewares/auth.middleware';
import usersRouter from './routers/users.router';

const app = express();

app.use(express.json());

app.use('/packages', packagesRouter);
app.use('/login', loginRouter);
app.use(authMiddleware);
app.use('/users', usersRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
