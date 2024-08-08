const signup = require('./signup-controller');

module.exports = (app)=>{
    app.post('/create/user',signup)
}