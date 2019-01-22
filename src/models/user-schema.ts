import mongoose from 'mongoose';
import { IUser } from './interfaces/IUser';

const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String,
});

userSchema.pre<IUser>('save', function( next) {
    const user = this,
      SALT_FACTOR = 5;
  
    if (!user.isModified('password')) return next();
  
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });  
});

userSchema.method('verifyPassword', function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return cb(err); }
        cb(null, isMatch)
    });
});

module.exports = mongoose.model('User', userSchema);
