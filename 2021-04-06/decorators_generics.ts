//Generics
function echo(data: any): any {
    return data;
}

echo('heloo');
echo(21);
echo('true');

//Generic function
function betterEcho<T>(data: T): T{
    return data;
}

betterEcho<string>('hello');
betterEcho<number>(21);
betterEcho<boolean>(true);


//Generic class
class Collection<T extends string | number> {

    add( data: T) {
        console.log(data);
    }
}

let obj1 = new Collection<string>();
obj1.add('hello');

let obj2 = new Collection<number>();
obj2.add(21);


//------------
//Decorators
//------------
function decoratorName( abc: Function) {
    console.log('Hi from decorator!');
    abc.prototype.save();
}

@decoratorName
class Database {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    save(){
        console.log('Save to DB...');
    }
}