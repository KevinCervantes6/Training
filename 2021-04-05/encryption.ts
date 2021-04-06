//Encryption interface
interface IEncryption {
    encrypt(data: string): string;
    decrypt(data: string): string;
}

//Encription class
class Encrypt implements IEncryption {
    
    encrypt(data: string): string{
        return 'xyz${data}';
    }

    decrypt(data: string): string{
        return data.slice(3);
    }
}

//Class
class Oracle {
    _encObj: IEncryption;

    constructor(encObj: IEncryption) {
        this._encObj = encObj;
    }

    save( data: string): void {
        let encryptedData = this._encObj.encrypt(data);
    }
}

let dbObj = new Oracle(new Encrypt());
dbObj.save('Hello');