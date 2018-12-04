import AbstractAnimal from '~/entities/AbstractAnimal';
export default class Cat extends AbstractAnimal {
    protected readonly type = "Cat";
    constructor(name: string);
    protected readonly nameFormated: string;
}
