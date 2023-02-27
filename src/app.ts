const a: string = 'a';
const z: string = 'z';
const aCode: number =  a.charCodeAt(0);
const aFill: number = z.charCodeAt(0) - aCode + 1; 

function shiftRound(_str: string, _shift: number): string {
    return destructuriseString(_str, _shift);
}

function unshiftRound(str: string, shift: number): string {
    shift = -shift;
    return destructuriseString(str, shift);
}

function destructuriseString(str: string, shift: number): string {
    const strArr: string[] = str.split("");
    return strArr
        .map((letter) =>
            letter >= a && letter <= z
                ? shiftLetter(letter, shift)
                : letter
        )
        .join("");
}

function shiftLetter(letter: string, shift: number): string {
    const abcArr: string[] = new Array(aFill)
        .fill(0)
        .map((_, i) => String.fromCharCode(aCode + i));
    shift %= abcArr.length;
    let curIndex: number = abcArr.indexOf(letter);
    let resIndex: number = curIndex + shift;

    resIndex = resIndex < 0 ? abcArr.length + resIndex : resIndex;
    resIndex = resIndex >= abcArr.length ? resIndex - abcArr.length : resIndex;

    return abcArr[resIndex];
}

console.log(shiftRound("aabx!", 4)); // → "eefb!"
console.log(shiftRound("aabx!", 30)); // → "eefb!"
console.log(shiftRound("aabx!", 212)); // → "eefb!"

console.log(unshiftRound("eefb!", 4)); // → "aabx!"
console.log(unshiftRound("eefb!", 212)); // → "aabx!"
console.log(unshiftRound("eefb!", 30)); // → "aabx!"

console.log(shiftRound("A1750abx?", 212)); // → "A1750efb?"
console.log(unshiftRound("E1750efb?", 212)); // → "E1750abx?"