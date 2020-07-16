export class UnexpectedError extends Error {
  constructor() {
    super('Algo de errado aconteceu. Tente Novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
