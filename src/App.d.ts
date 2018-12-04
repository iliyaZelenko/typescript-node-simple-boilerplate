import AbstractAnimal from '~/entities/AbstractAnimal';
export default class App {
    private entities;
    constructor(entities: AbstractAnimal[]);
    execute(): void;
}
