import { Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import usersService from '../services/users.service';
import { CustomRequest } from '../types/CustomRequest';

async function getAll(req: CustomRequest, res: Response) {
  const serviceResponse = await usersService.getAll();

  // somente verificando se o middleware de auth está passando o email do usuário autenticado
  console.log(req.user); 

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  getAll,
};