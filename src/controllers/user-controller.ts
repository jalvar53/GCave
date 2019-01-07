import mongoose from 'mongoose';

const User = mongoose.model('userSchema');

const user_functions = {
    create_user: (req: any, res: any) => {
        let new_user = new User(req.body);
        
        new_user.save((err, user) => {
            if (err) { 
                res.send(err);
            }
            res.json(user);
            res.end();
        });
    },

    edit_user: (req: any, res: any) => {
        User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true }, (err, updated_user) => {
                if (err) { 
                    res.send(err);
                }
                res.json(updated_user);
                res.end();
        });
    },

    get_single_user: (req: any, res: any) => {
        User.findOne({ username: req.params.username }, '-password', (err, found_user) => {
            if (err) {
                res.send(err);
            }
            res.json(found_user);
            res.end();
        });
    }
};

module.exports = user_functions;
