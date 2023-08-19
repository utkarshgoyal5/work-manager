import mongoose, { Schema } from "mongoose";

//This JS file is used to create a models for entity users
const UserSachema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email required !"]
    },
    password: {
        type: String,
        required: [true, "Password required !"]
    },
    about: String,
    profileURL: String,
    // address: {
    //     street: String,
    //     city: String,
    //     country: String,
    //     pincode: Number
    // }
})

//User= mongoose.models.users <- this is used to check if already model with name users is present
export const User= mongoose.models.users || mongoose.model("users",UserSachema);