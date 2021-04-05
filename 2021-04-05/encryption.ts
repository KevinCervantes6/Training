//Encryption interface
interface Encryption {
    data: string;
    encrypt(data: string): string;
    decrypt(data: string): string;
}

//Encription class
class Encrypt implements Encryption {
    data: string;

    constructor(data: string) {
        this.data = data;
    }

    encrypt(data: string): string{
        return '';
    }

    decrypt(data: string): string{
        return '';
    }
}