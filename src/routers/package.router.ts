import { Router } from 'express';
import packagesController from '../controllers/packages.controller';

const packagesRouter = Router();

packagesRouter.patch('/:id', packagesController.update);

export default packagesRouter;