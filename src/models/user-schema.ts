import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String
});

module.exports = mongoose.model('userSchema', userSchema);
