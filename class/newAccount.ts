import { Account } from "./Account";

export class NewAccount extends  Account {
    constructor(deposit : number, name: string, accountNumber: number){
        super(name, accountNumber)
        
    }

   Deposit = (depositValue : number) :  number => {
    const newDepositeValue : number = this.GetBalance() + depositValue + 10
    return this.SetBalance(newDepositeValue)
   }
}