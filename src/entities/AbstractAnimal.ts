import chalk from 'chalk'

export default abstract class AbstractAnimal {
  protected abstract readonly type: string
  protected name: string

  public constructor (name: string) {
    this.name = name
  }

  protected abstract get nameFormated (): string

  public sayHello (): void {
    console.log(`${chalk.blue(this.nameFormated)}: ${chalk.yellow('Hello World!')}.`)
  }
}
