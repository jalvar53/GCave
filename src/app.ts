import express from 'express';
import mongoose from 'mongoose';

const app = express();
const bodyParser = require('body-parser');
const user_model = require('./models/user');
const routes = require('./routes/user-routes');

app.use((bodyParser.urlencoded({extended: true})));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/GCave', { useNewUrlParser: true });

routes(app);

const port = process.env.PORT || 3000;
app.listen(port);