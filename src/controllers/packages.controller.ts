import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import packagesService from '../services/packages.service';

async function update(req: Request, res: Response) {
  const { id } = req.params;
  const { destination, category, price } = req.body;

  const serviceResponse = await packagesService
    .update({ id: Number(id), destination, category, price });

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const serviceResponse = await packagesService.remove(Number(id));

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(204).end();
}

export default {
  update,
  remove,
};