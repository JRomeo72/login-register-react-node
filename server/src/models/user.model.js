import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
});

let User = model('User', userSchema);

export default User