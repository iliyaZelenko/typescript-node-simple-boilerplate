import AbstractAnimal from '~/entities/AbstractAnimal'

export default class Dog extends AbstractAnimal {
  // this will work when running from a minified file though
  protected readonly type: string = 'Dog'

  protected get nameFormated (): string {
    return `{${this.type}} ${this.name}`
  }
}
