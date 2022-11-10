import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
    autor: {
        id: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
        },
        apellido: {
            type: String,
        },
        edad: {
            type: Number,
        },
        // alias: {
        //     type: String,
        // },
        avatar: {
            type: String,
        },
        type: Object,
        // required: true,
    },
    text: {
        type: String,
        required: true,
        maxLength: 250,
    },
})

export const textModel = mongoose.model(`Mensajes`, textSchema);
