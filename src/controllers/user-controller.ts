import mongoose from 'mongoose';

const User = mongoose.model('User');

const user_functions = {
    create_user: (req: any, res: any) => {
        let new_user = new User(req.body);
        new_user.save((err, user) => {
            if (err) { 
                res.send(err)
            }
            res.send(user);
        })
    },

    edit_user: (req: any, res: any) => {
        res.send("Editing User...");
    },

    get_user: (req: any, res: any) => {
        res.send("Retrieving User...");
    }
}

module.exports = user_functions;