import express from 'express';
import mongoose from 'mongoose';

const app = express(),
    bodyParser = require('body-parser'),
    user_schema = require('./models/user-schema'),
    routes = require('./routes/user-routes'),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
    
routes(app);

mongoose.connect('mongodb://localhost:27017/GCave', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.on('open', () => {
    app.listen(port);
});
