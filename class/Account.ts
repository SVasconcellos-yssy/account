export class Account {
    private readonly name: string 
    private readonly accountNumber: number | undefined
    private balance: number = 1000
    private status: boolean = true

   constructor (name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
   }

   GetName = () : string =>{
      return this.name
   }
   
   Deposit= (depositValue: number) : number=> {
      if(this.ValidateStatus()){
         return this.balance = this.balance + depositValue
      }else {
         throw new Error('Erro ao depositar')  
      }
     }

   Withdraw = (withdrawValue: number): number =>{
      if(this.ValidateStatus() && withdrawValue <= this.balance ){
         return this.balance = this.balance - withdrawValue
      }else{
         throw new Error('Saldo insuficiente em conta')
      }
   }

   GetBalance = (): number =>{
      return this.balance
   }

   SetBalance = (newBalance: number ) : number =>{
     return this.balance = newBalance
   }
     
   GetStatus = (): boolean =>{
      return this.status
   }

   ValidateStatus = () : boolean =>{
      if(this.status){
         return this.status
      }
      throw new Error('Conta Inválida')
   }
}
