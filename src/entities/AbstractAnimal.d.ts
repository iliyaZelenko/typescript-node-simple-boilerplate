export default abstract class AbstractAnimal {
    protected abstract readonly type: string;
    protected name: string;
    constructor(name: string);
    protected abstract readonly nameFormated: string;
    sayHello(): void;
}
