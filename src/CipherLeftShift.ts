import { CipherImpl } from "./CipherDecipher";

//TODO
//ciphering left shift '~' - shift
//deciphering right shift ' ' + shift
export class CipherLeftShift extends CipherImpl {
    constructor(lShift: number) {
        super(-Math.abs(lShift))
    }
}