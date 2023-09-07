import { NextFunction, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/User.model';
import { CustomRequest } from '../types/CustomRequest';

function extractToken(authorization: string) {
  return authorization.split(' ')[1];
}

async function authMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { email: decoded.email } });
    if (!user) return res.status(401).json({ message: 'Token inválido ou expirado' }); 
    
    req.user = decoded.email;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;