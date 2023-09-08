import jwt from 'jsonwebtoken';
import { verifyToken } from '../libs/jwtoken.js';

const authRequired = async (req, res, next) => {
    let secretKey = process.env.JWT_SECRET_KEY;
    let { token } = req.cookies;
    
    if(!token) return res.status(401).send({message: "No hay token, autorización denegada"});

    try {
        
        let credentials = await verifyToken(token, secretKey)
        req.user = credentials;
        next()
        
    } catch (error) {
        console.log(error.message)
        res.send({message: error.message})
    }
    
}

export default authRequired