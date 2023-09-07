import { ServiceResponse } from '../types/ServiceResponse';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import UserModel from '../database/models/User.model';
import jwtUtil from '../utils/jwt.util';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.email || !login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  const foundUser = await UserModel.findOne({ where: { email: login.email } });
  
  if (!foundUser || foundUser.dataValues.password !== login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  const { id, email } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, email });

  return { status: 'SUCCESSFUL', data: { token } };
}
export default {
  verifyLogin,
};