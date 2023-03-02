import { CipherImpl } from './CipherDecipher';
import { CipherLeftShift } from './CipherLeftShift';
import { CipherRightShift } from './CipherRightShift';
import { displayCipherDecipher } from './displayCipherDecipher';

const cipherCode1 = new CipherImpl(4);
const cipherCode2 = new CipherImpl(-4);

const cls = new CipherLeftShift(4);
const cls2 = new CipherLeftShift(-4);
const crs = new CipherRightShift(4);
const crs2 = new CipherRightShift(-4);

displayCipherDecipher(cipherCode1, "aabx!")
displayCipherDecipher(cipherCode2, "aabx!")
displayCipherDecipher(cls, "aabx!")
displayCipherDecipher(cls2, "aabx!")
displayCipherDecipher(crs, "aabx!")
displayCipherDecipher(crs2, "aabx!")