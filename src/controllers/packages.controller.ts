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

export default {
  update,
};