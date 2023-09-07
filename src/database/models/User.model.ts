import { ModelDefined, Model, Optional, DataTypes } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

export type UserInputtableFields = Optional<User, 'id'>;

type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

export type UserSequelizeModel = Model<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  timestamps: false,
  underscored: true,
  tableName: 'users',
});

export default UserModel;