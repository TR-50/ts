import { Cipher } from "./Cipher";


export class CipherImpl implements Cipher {
    startCodeAscii: number;
    endCodeAscii: number;
    nAsciiSymbols: number;
    constructor(private shift: number) {
        this.startCodeAscii = " ".charCodeAt(0);
        this.endCodeAscii = "~".charCodeAt(0);
        this.nAsciiSymbols = this.endCodeAscii - this.startCodeAscii + 1;
    }
    cipher(plainText: string): string {
        return this.#mapping(plainText, -this.shift)
    }
    decipher(cipherText: string): string {
        return this.#mapping(cipherText, this.shift)
    }
    #mapping(str: string, resShift: number): string {
        const strArr: string[] = str.split("");
    return strArr
        .map((letter) =>
            letter.charCodeAt(0) >= this.startCodeAscii && letter.charCodeAt(0) <= this.endCodeAscii ? this.#shiftLetter(letter, resShift) : letter
        )
        .join("");
    }
    #shiftLetter(letter: string, resShift: number): string {
        this.shift %= this.nAsciiSymbols;
        let curIndex: number = letter.charCodeAt(0) - this.startCodeAscii;
        let resIndex: number = curIndex + resShift;
    
        resIndex = resIndex < 0 ? this.nAsciiSymbols + resIndex : resIndex;
        resIndex = resIndex >= this.nAsciiSymbols ? resIndex - this.nAsciiSymbols : resIndex;
    
        return String.fromCharCode(resIndex + this.startCodeAscii);
    }
}