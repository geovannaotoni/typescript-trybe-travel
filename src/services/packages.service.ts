import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import { ServiceResponse } from '../types/ServiceResponse';

async function update(updatedPackage: Package): Promise<ServiceResponse<Package>> {
  const packageToUpdate = await PackageModel.findByPk(updatedPackage.id);

  if (!packageToUpdate) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }

  await PackageModel.update(
    updatedPackage,
    { where: { id: updatedPackage.id } },
  );

  const packageUpdated = await packageToUpdate.reload();

  return { status: 'SUCCESSFUL', data: packageUpdated.dataValues };
}

export default {
  update,
};