const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyToken');

module.exports = function (app) {
    const controller = require('../controller/controller.js');

    app.post('/api/auth/singup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
    app.post('/api/auth/signin', controller.signin);
    app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
    app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
    app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

}