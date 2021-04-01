//Object literal
//Like static types, there's no need for an instance
let obj = {
    name: 'Kevin',
    age: 25
}

//---------------
//Classes
//---------------
class Fruit {
    protected size: string;
    protected fColor: string;
    protected isSweet: boolean;

    constructor( size: string, fColor: string, isSweet: boolean){
        this.size = size;
        this.fColor = fColor;
        this.isSweet = isSweet;
    }
}

class Pineapple extends Fruit {
    private  hasCrown: boolean;

    constructor( size: string, fColor: string, isSweet: boolean, hasCrown: boolean) {
        super( size, fColor, isSweet);
        this.hasCrown = hasCrown;
    }

    public getSize() {
        return this.size;
    }

    public getColor() {
        return this.fColor;
    }

    public getSweetness() {
        return this.isSweet;
    }

    public getCrown() {
        return this.hasCrown;
    }

    public setSize( newSize: string ) {
        this.size = newSize;
    }

    public setColor( newColor: string ) {
        this.fColor = newColor;
    }

    public setIsSweet( newSweetness: boolean ) {
        this.isSweet = newSweetness;
    }

    public setHasCrown ( newCrown: boolean) {
        this.hasCrown = newCrown;
    }
}


class Avocado extends Fruit {
    private  isMature: boolean;

    constructor( size: string, fColor: string, isSweet: boolean, isMature: boolean) {
        super( size, fColor, isSweet);
        this.isMature = isMature;
    }

    public getSize() {
        return this.size;
    }

    public getColor() {
        return this.fColor;
    }

    public getSweetness() {
        return this.isSweet;
    }

    public getMature() {
        return this.isMature;
    }

    public setSize( newSize: string ) {
        this.size = newSize;
    }

    public setColor( newColor: string ) {
        this.fColor = newColor;
    }

    public setIsSweet( newSweetness: boolean ) {
        this.isSweet = newSweetness;
    }

    public setMatureness ( newMatureness: boolean) {
        this.isMature = newMatureness;
    }

    
}

//We build a pineapple
const pineapple = new Pineapple( 'large', 'yellow', true, true);

const pSize = pineapple.getSize();
const pColor = pineapple.getColor();
const pSweetness = pineapple.getSweetness();
const pCrown = pineapple.getCrown();

//We build an avocado
const avocado = new Avocado( 'medium', 'black', false, true);

const avSize = avocado.getSize();
const avColor = avocado.getColor();
const avSweetness = avocado.getSweetness();
const avMatureness = avocado.getMature();


//Axuliar method to print if a fruit is sweet
function printSweetness( sweet: boolean ): string {
    if( sweet ) {
        return 'it is sweet';
    } else {
        return 'it is not sweet';
    }
}

//Auxiliar method to print if a pineapple has crown
function printHasCrown( crown: boolean ): string {
    if( crown ) {
        return 'it has crown';
    } else {
        return 'it has not crown';
    }
}

//Auxiliar method to print if an avocado is mature
function printMatureness( mature: boolean ): string {
    if( mature ) {
        return 'it is mature';
    } else {
        return 'it is not mature';
    }
}


console.log('The pineapple is ' + pSize + ', has color ' + pColor +
            ' ' + printSweetness(pSweetness) + " and " + printHasCrown(pCrown));

console.log('The avocado is ' + avSize + ', has color ' + avColor +
' ' + printSweetness(pSweetness) + " and " + printMatureness(avMatureness));