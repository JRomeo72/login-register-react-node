import User from '../models/user.model.js';
import { encryptPass, comparePassword } from '../libs/bcrypt.js';
import { createToken } from '../libs/jwtoken.js';

// > REGISTER 
const register = async (req, res) => {
    let secretKey = process.env.JWT_SECRET_KEY;
    let { username, email, password } = req.body;

    try {

        let encryptedPass = await encryptPass(password);

        let newUser = new User({
            username,
            email,
            password: encryptedPass
        });

        let userSaved = await newUser.save();

        let showUserSaved = {
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email, 
        };

        console.log(showUserSaved)

        let token = await createToken(showUserSaved, secretKey);
        // .then(token => console.log(token))
        // .catch(err => console.log(err));

        res.cookie('token', token);
        res.send({"message": "User crated successfully", "New User": showUserSaved})

    } catch (error) {
        res.status(500).send({message: "Error en el proceso", error})
    }
};

// > LOGIN 
const login = async (req, res) => {
    let secretKey = process.env.JWT_SECRET_KEY;
    let { email, password } = req.body;

    try {
        let userFound = await User.findOne({email});
        if(!userFound) return res.status(400).send({message: "Usuario no encontrado"});
    
        let isMatch = await comparePassword(password, userFound.password);
        if(!isMatch) return res.status(400).send({message: "Credenciales incorrectas"});

        let userMatch = {
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        };

        let token = await createToken(userMatch, secretKey);

        res.cookie('token', token);
        res.send({"message": "Usuario Logeado", "New User": userMatch})
    } catch (error) {
        res.status(500).send({message: "Error en el proceso", error})
    }
    
};

//> LOGOUT 
const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) });
    res.status(200).send({message: "User Logout"})
}

let authCtr = { register, login, logout };

export default authCtr