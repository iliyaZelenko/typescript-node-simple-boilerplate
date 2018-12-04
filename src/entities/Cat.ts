import AbstractAnimal from '~/entities/AbstractAnimal'

export default class Cat extends AbstractAnimal {
  // this will work when running from a minified file though
  protected readonly type = 'Cat'

  public constructor (name: string) {
    super(name)

    console.log(this.nameFormated + ' created!')
  }

  protected get nameFormated (): string {
    return `[${this.type}] ${this.name}`
  }
}
