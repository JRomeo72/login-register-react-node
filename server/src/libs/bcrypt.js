import bcrypt from 'bcryptjs';

const encryptPass = async (pass) => {
    let encryptedPass = await bcrypt.hash(pass, 10);
    return encryptedPass
};

export default encryptPass