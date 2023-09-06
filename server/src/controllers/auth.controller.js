import User from '../models/user.model.js';
import encryptPass from '../libs/bcrypt.js';
import getToken from '../libs/jwtoken.js';


const register = async (req, res) => {
    let { username, email, password } = req.body;
    let secretKey = process.env.JWT_SECRET_KEY;

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

        let token = await getToken(showUserSaved, secretKey);
            // .then(token => console.log(token))
            // .catch(err => console.log(err));
        
        console.log(`Token: ${token}`)
        
        res.send({"message": "Usuario ingresado", "New User": showUserSaved})

    } catch (error) {
        res.send({message: "Error en el proceso"})
    }
};

const login = async (req, res) => {
    let { email, password } = req.body;
    res.send({email, password})
};

let authCtr = { register, login };

export default authCtr