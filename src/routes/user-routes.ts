import user_controller from '../controllers/user-controller';

module.exports = function(app: any) {

    app.route('/user')
        .post(user_controller.create_user)
        .put(user_controller.edit_user)
        .get(user_controller.get_user)
        
}