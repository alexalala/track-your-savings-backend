import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/account.interface';
import { CreateAccountDTO } from './dto/create-account.dto';
    
@Injectable()
export class SavingsService {
  constructor(@InjectModel('Account') private readonly accountModel) { }
    
  async addAccount(createAccountDTO: CreateAccountDTO): Promise<Account> {
    const newAccount = await this.accountModel(createAccountDTO);
    return newAccount.save();
  }  
    
  async getAccount(accountID): Promise<Account> {
    const account = await this.accountModel
      .findById(accountID)
      .exec();
    return account;
  }
    
  async getAccounts(): Promise<Account[]> {
    const accounts = await this.accountModel.find().exec();
    return accounts;
  }

  async editAccount(accountID, createAccountDTO: CreateAccountDTO): Promise<Account> {
    const editedAccount = await this.accountModel
      .findByIdAndUpdate(accountID, createAccountDTO, { new: true });
    return editedAccount;
  }

  async deleteAccount(accountID): Promise<any> {
    const deletedAccount = await this.accountModel
      .findByIdAndRemove(accountID);
    return deletedAccount;
  }
}