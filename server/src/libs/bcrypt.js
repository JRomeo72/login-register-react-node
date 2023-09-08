import bcrypt from 'bcryptjs';

const encryptPass = async (pass) => {
    let encryptedPass = await bcrypt.hash(pass, 10);
    return encryptedPass
};

const comparePassword = async (pass1, pass2) => {
    return await bcrypt.compare(pass1, pass2)
}

export { encryptPass, comparePassword }