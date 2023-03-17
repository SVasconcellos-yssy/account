import { Account } from "../class/Account"

export class PeopleAccount extends Account {
    private doc_id: number | undefined
    
    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    Deposit = (depositValue: number) : number  => {
        if(this.ValidateStatus()){
            const newBalance : number = this.GetBalance() + depositValue
            return this.SetBalance(newBalance)
         }else {
            throw new Error('Erro ao depositar')  
         }
    }
}