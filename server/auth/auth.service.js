const jwt = require('jsonwebtoken');



isAuth = ()=>{
    return function(req,res, next){
        const token = req.header('token');
        if(!token){
            return res.status(401).send('Access denied');
        }
        try {
            const verified = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = verified;
            next()
        }catch(err){
           return res.status(400).send('Invalid token');
        }
    }
}


hasRole = (roleRequired) =>{
    if(!roleRequired) {
        throw new Error('Required role needs to be set');
    }
    return function(req,res,next){
        isAuth();
        if(roleRequired == req.user.role) {
            return next();
        } else {
            return res.status(403).send('Forbidden');
        }
    }
}

module.exports={
    isAuth,hasRole
}