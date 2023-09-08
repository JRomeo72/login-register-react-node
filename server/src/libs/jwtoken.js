import jwt from 'jsonwebtoken';

export const createToken = (credentials, secretKey) => {

    return new Promise((resolve, reject) => {

        jwt.sign(
            {
                id: credentials.id,
                username: credentials.username,
                email: credentials.email
            },
            secretKey,
            {
                expiresIn: '1m'
            },
            (err, token) => {
                if(err) reject(new Error("No se pudeo generer Token"));
                resolve(token)
            }
        )
    })
};

export const verifyToken = (token, secretKey) => {

    return new Promise((resolve, reject) => {

        jwt.verify(token, secretKey, (err, credentials) => {
            if(err) reject(new Error("Token invalido"));
            resolve(credentials)
        })

    })
}