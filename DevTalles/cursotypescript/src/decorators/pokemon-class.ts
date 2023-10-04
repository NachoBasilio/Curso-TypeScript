
function printToConsole(constructorFn: Function) {
    console.log(constructorFn);
}

const printToConsoleConditional = (condicion : boolean): Function => {
    if (condicion) {
        return printToConsole;
    } else {
        return () => {};
    }
}

const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


function CheckValidPokemonId(){
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(id:number){
            if(id < 1 || id > 1000){
                console.log('Invalid pokemon id');
            } else {
                return originalMethod(id);
            }
        }
    }
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string, public type: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id:number) {
        console.log(`Saving ${id} to DB`);
    }


}