export const Injector = new class {

    resolve<T>(target: any): T {
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [];
        let injections = tokens.map(token => Injector.resolve<any>(token));
    
        return new target(...injections);
    } 
}