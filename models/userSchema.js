import mongoose from "mongoose";


const Users = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    favoriteGame: {type: String, required: true},
    gameID: {type: String, required: true},
    age: {type: String, required: true},
    education: {type: String, required: true},
    discordID: {type: String}
})


export default mongoose.models.Users || mongoose.model("Users", Users)