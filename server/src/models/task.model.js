import { Schema, Types, model } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        userId: {
            type: Types.ObjectId,
            ref: 'User',
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('Task', taskSchema)