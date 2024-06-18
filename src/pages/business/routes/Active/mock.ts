import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { ActiveTableData, ProductType, StatusList, TableDetailType, UserType } from 'types';

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
  public static createDate(): Date;
  public static createDate(_format: string): string;
  public static createDate(_format?: string): string | Date {
    const date = faker.date.recent({ days: 15 });
    return _format ? format(date, _format) : date;
  }
}

function activeData(): ActiveTableData {
  return {
    client: MockerData.createUser(),
    details: MockerData.createDetail(),
    seller: MockerData.createUser(),
    product: MockerData.createProduct(),
    date: MockerData.createDate('MM-dd-yyy'),
    status: faker.helpers.arrayElement(StatusList),
  };
}

export const dataTable: ActiveTableData[] = Array.from({ length: 10 }, activeData);
