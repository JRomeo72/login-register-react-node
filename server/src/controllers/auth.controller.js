
const register = (req, res) => {
    res.send('<h3>Register</h3>')
};

const login = (req, res) => {
    res.send('<h3>Login</h3>')
};

let authCtr = { register, login };

export default authCtr