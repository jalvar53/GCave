import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,

    password: String,
    bio: String
});

module.exports = mongoose.model('User', userSchema);
