import express from 'express';
import mongoose from 'mongoose';
const app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes/user-routes'),
    passport = require('passport'),
    port = process.env.PORT || 3000;

require('./config/passport.ts')(passport);
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
routes(app, passport);

mongoose.connect('mongodb://localhost:27017/GCave', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.on('open', () => {
    app.listen(port);
});
