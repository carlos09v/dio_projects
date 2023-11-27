import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// =>> Criar instâncias...
const Nath: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const Dio: CompanyAccount = new CompanyAccount('DIO', 20)

const novaConta_Teste: PeopleAccount = new PeopleAccount(2,'Teste', 2)
novaConta_Teste.deposit(12)
novaConta_Teste.getBalance()

Dio.getLoan()
Dio.getBalance()
Dio.getName()
