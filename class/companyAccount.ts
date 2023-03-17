import { Account } from "./Account"

export class CompanyAccount extends Account {

  
    constructor(name: string, accountNumber: number){
    super(name, accountNumber)

}


GetLoan = (loanValue : number) : number =>{
    if(this.GetStatus()){
        const newBalance : number = this.GetBalance() + loanValue 
        return this.SetBalance(newBalance) 

    }else {
        throw new Error('Não pode fazer empréstimo')
    }
}
}