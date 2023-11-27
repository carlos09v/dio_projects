import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    if(this.validateStatus()) {
      console.log(`Sua conta está ativa e é possivel realizar o empréstimo!`)
    }
    
  }
}
