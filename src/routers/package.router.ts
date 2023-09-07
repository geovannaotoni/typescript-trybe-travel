import { Router } from 'express';
import packagesController from '../controllers/packages.controller';

const packagesRouter = Router();

packagesRouter.patch('/:id', packagesController.update);
packagesRouter.delete('/:id', packagesController.remove);

export default packagesRouter;