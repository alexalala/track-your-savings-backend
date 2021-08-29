import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { CreateAccountDTO } from './dto/create-account.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
    
@Controller('savings')
export class SavingsController {
    
  constructor(private savingsService: SavingsService) { }
    
  // Submit an account
  @Post('/account')
  async addAccount(@Res() res, @Body() createAccountDTO: CreateAccountDTO) {
    const newAccount = await this.savingsService.addAccount(createAccountDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Account has been submitted successfully!',
      account: newAccount,
    });
  }
    
  // Fetch a particular account using ID
  @Get('account/:accountID')
  async getAccount(@Res() res, @Param('accountID', new ValidateObjectId()) accountID) {
    const account = await this.savingsService.getAccount(accountID);
    if (!account) {
        throw new NotFoundException('Account does not exist!');
    }
    return res.status(HttpStatus.OK).json(account);
  }
    
  // Fetch all accounts
  @Get('accounts/:userID')
  async getAccounts(@Res() res, @Param() userID) {
    const accounts = await this.savingsService.getAccounts(userID.userID);
    return res.status(HttpStatus.OK).json(accounts);
  }

   // Edit a particular account using ID
   @Put('/edit')
   async editAccount(
     @Res() res,
     @Query('accountID', new ValidateObjectId()) accountID,
     @Body() createAccountDTO: CreateAccountDTO,
   ) {
     const editedAccount = await this.savingsService.editAccount(accountID, createAccountDTO);
     if (!editedAccount) {
         throw new NotFoundException('Account does not exist!');
     }
     return res.status(HttpStatus.OK).json({
       message: 'Account has been successfully updated',
       account: editedAccount,
     });
   }
   // Delete a account using ID
   @Delete('/delete')
   async deleteAccount(@Res() res, @Query('accountID', new ValidateObjectId()) accountID) {
     const deletedAccount = await this.savingsService.deleteAccount(accountID);
     if (!deletedAccount) {
         throw new NotFoundException('Account does not exist!');
     }
     return res.status(HttpStatus.OK).json({
       message: 'Account has been deleted!',
       account: deletedAccount,
     });
   }
}