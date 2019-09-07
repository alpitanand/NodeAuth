var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean
    }
})


UserSchema.statics.findSimilarEmail = async function(emailId){
    return await this.model('User').findOne({email:emailId})
}

module.exports = mongoose.model('User',UserSchema)
