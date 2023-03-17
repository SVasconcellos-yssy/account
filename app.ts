import { Account } from "./class/Account"
import { CompanyAccount } from "./class/companyAccount"
import { NewAccount } from "./class/newAccount"
import {PeopleAccount} from "./class/peopleAccount"

//Account
const newAccount : Account = new Account('Stephanye', 1)
console.log(newAccount.GetName())
console.log(newAccount.Deposit(100))
console.log(newAccount.Withdraw(100))
console.log(newAccount.SetBalance(10))
console.log(newAccount.GetBalance())
console.log(newAccount.GetStatus())
console.log(newAccount.ValidateStatus())


//CompanyAccount
const newCompanyAccount : CompanyAccount = new CompanyAccount('Stephanye', 1)
console.log(newCompanyAccount.GetName())
console.log(newCompanyAccount.Deposit(100))
console.log(newCompanyAccount.Withdraw(100))
console.log(newCompanyAccount.SetBalance(10))
console.log(newCompanyAccount.GetBalance())
console.log(newCompanyAccount.GetStatus())
console.log(newCompanyAccount.ValidateStatus())
console.log(newCompanyAccount.GetLoan(100))

//PeopleAccount
const newPeopleAccount : PeopleAccount = new PeopleAccount(100, 'Stephanye', 1)
console.log(newPeopleAccount.GetName())
console.log(newPeopleAccount.Deposit(100))
console.log(newPeopleAccount.Withdraw(100))
console.log(newPeopleAccount.SetBalance(10))
console.log(newPeopleAccount.GetBalance())
console.log(newPeopleAccount.GetStatus())
console.log(newPeopleAccount.ValidateStatus())

//NewAccount
const newNewAccount : NewAccount = new NewAccount(100, 'Stephanye', 1)
console.log(newNewAccount.GetName())
console.log(newNewAccount.Deposit(100))
console.log(newNewAccount.Withdraw(100))
console.log(newNewAccount.SetBalance(10))
console.log(newNewAccount.GetBalance())
console.log(newNewAccount.GetStatus())
console.log(newNewAccount.ValidateStatus())






