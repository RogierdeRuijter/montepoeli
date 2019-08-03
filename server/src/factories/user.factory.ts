import {Factory} from './factory';
import {User} from '../models/interfaces/user.interface';
import {FactoryUtilService} from './factory-util.service';

export class UserFactory implements Factory<User> {
  private factoryUtilService = new FactoryUtilService();

  public create(): User {
    return {
      id: this.factoryUtilService.id(),
      name: this.factoryUtilService.name(),
      username: this.factoryUtilService.name(),
      passwordHash: this.factoryUtilService.passwordHash(),
    };
  }

  public createMany(amount: number): User[] {
    const list: User[] = [];

    for (let i = 0; i < amount; i++) {
      list.push(this.create());
    }

    return list;
  }

}
