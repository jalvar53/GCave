const user_controller = require('../controllers/user-controller');

module.exports = function(app: any) {

    app.route('/api/users')
        .post(user_controller.create_user)

    app.route('/api/users/:username')
        .put(user_controller.edit_user)
        .get(user_controller.get_single_user)

}
