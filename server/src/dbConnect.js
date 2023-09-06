import { connect } from 'mongoose';

const dbConnect = () => {

    const DB_URI = process.env.DB_URI;

    // > Sin Promesa 
    connect(DB_URI)
        .then(() => { console.log('****** DB connection successful ******') })
        .catch((error) => { console.log('****** DB connection failed ******') });

    // > Con Promesa 
    /*return new Promise((resolve, reject) => {

        connect(DB_URI)
            .then(() => {
                let message = '****** DB connection successful ******';
                resolve(message)

            })
            .catch((error) => {
                let message = '****** DB connection failed ******';
                reject(message)

            })
    })*/

};

export default dbConnect