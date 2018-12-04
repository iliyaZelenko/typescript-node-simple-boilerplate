import AbstractAnimal from '~/entities/AbstractAnimal'

export default class App {
  private entities: AbstractAnimal[]

  public constructor (entities: AbstractAnimal[]) {
    this.entities = entities
  }

  public execute (): void {
    this.entities.forEach(
      (animal: AbstractAnimal) => animal.sayHello()
    )
  }
}
