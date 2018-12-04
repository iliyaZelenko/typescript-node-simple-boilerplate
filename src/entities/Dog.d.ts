import AbstractAnimal from '~/entities/AbstractAnimal';
export default class Dog extends AbstractAnimal {
    protected readonly type: string;
    protected readonly nameFormated: string;
}
