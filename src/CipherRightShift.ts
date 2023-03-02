import { CipherImpl } from "./CipherDecipher";

//TODO
//ciphering right shift ' ' + shift
//deciphering left shift '~' - shift
export class CipherRightShift extends CipherImpl {
    constructor(rShift: number) {
        super(Math.abs(rShift));
    }
}
