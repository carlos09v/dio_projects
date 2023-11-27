export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (money: number): void => {
    // Conta VIP
    if (this.accountNumber == 2) {
      console.log('Você está em uma conta especial :)')
      console.log('Cada depósito receberá 10 reais a mais!')
      const juros = this.balance += money + 10
      return console.log(`Foi depositado R$10 + R$${money} = R$${juros}.`)
    }

    // Conta comum
    if(this.validateStatus()){
      this.balance += money
      console.log(`Voce depositou R$${money} com sucesso.`)
    }

  }

  withdraw = (money: number): void => {
    if(this.validateStatus()) {
      if (this.balance >= money) {
        this.balance -= money
        return console.log(`Saque de R$${money} efetuado com sucesso!`)
      }
  
      console.log('Saque Inválido! Você não possui fundos suficientes :(')
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Error: Sua conta não é válida!')
  }
}
