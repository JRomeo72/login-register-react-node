import jwt from 'jsonwebtoken';

const getToken = (credentials, secretKey) => {

    return new Promise((resolve, reject) => {

        jwt.sign(
            {
                id: credentials._id,
                username: credentials.username,
                email: credentials.email
            },
            secretKey,
            {
                expiresIn: '15m'
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )
    })
};

export default getToken