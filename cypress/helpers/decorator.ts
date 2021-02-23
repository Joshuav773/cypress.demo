import 'reflect-metadata';

export type GenericClassDecorator<T> = (target: T) => void 

export const Injectable = (): GenericClassDecorator<Object> => {
    return (target: Object) => {
        console.log(Reflect.getMetadata('design:paramtypes', target));
    }
}