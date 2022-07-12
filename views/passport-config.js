const { authenticate } = require('passport')
const bcrypt=require('bcrypt')
const LocalStrategy=require('passport-local').Strategy
function initialize(passport,getUerByEmail){
    const authenticateUser=(email,password,done)=>{
        const user=getUerByEmail(email)
        if(user==email){
            return done(null,false,{message:'No User with that email'})
        }
try {
    if(await bcrypt.compare(password,user.password))
    {
        return done(null,user)
    }
    else{
        return done(null,false,{message:"password incorrect"})
    }
} catch {
    
}
    }
 passport.use(new LocaleStrategy({usernameFiled:'email'}),
 authenticateUser)
 passport.serializeUser((user,done)=>{})
 passport.deserializeUser((id,done)=>{})
}