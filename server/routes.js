

module.exports = (app)=>{
    app.use('/api/v1/user', require('./api/User'));
    app.use('/api/v1/auth', require('./auth/index'));
}