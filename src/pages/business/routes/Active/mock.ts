import { faker } from '@faker-js/faker';
import { ActiveTableData, ProductType, StatusList, TableDetailType, UserType } from './type';

class MockerData {
  public static createUser(): UserType {
    return {
      id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
    };
  }
  public static createDetail(): TableDetailType {
    return {
      detail: faker.lorem.paragraph(),
    };
  }
  public static createProduct(): ProductType {
    return {
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.product(),
      image: faker.image.avatar(),
    };
  }
}

function activeData(): ActiveTableData {
  return {
    client: MockerData.createUser(),
    details: MockerData.createDetail(),
    seller: MockerData.createUser(),
    product: MockerData.createProduct(),
    date: new Date(),
    status: faker.helpers.arrayElement(StatusList),
  };
}

export const dataTable: ActiveTableData[] = Array.from({ length: 10 }, activeData);
