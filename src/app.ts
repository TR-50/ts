import { CipherImpl } from './CipherDecipher';
import { CipherLeftShift } from './CipherLeftShift';
import { CipherRightShift } from './CipherRightShift';
import { displayCipherDecipher } from './displayCipherDecipher';

const cipherCode1 = new CipherImpl(4);
const cls = new CipherLeftShift(4);
const crs = new CipherRightShift(-4);

displayCipherDecipher(cipherCode1, "aabx!")
displayCipherDecipher(cls, "aabx!")
displayCipherDecipher(crs, "aabx!")