import { ModelDefined, Model, Optional, DataTypes } from 'sequelize';
import db from './index';
import { Package } from '../../types/Package';

export type PackageInputtableFields = Optional<Package, 'id'>;

type PackageSequelizeModelCreator = ModelDefined<Package, PackageInputtableFields>;

export type PackageSequelizeModel = Model<Package, PackageInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  timestamps: false,
  underscored: true,
  tableName: 'packages',
});

export default PackageModel;