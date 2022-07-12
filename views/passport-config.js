const { authenticate } = require('passport')

const LocalStrategy=require('passport-local').Strategy
function initialize(passport){
    const authenticateUser=(email,password,done)=>{
        const user=getUerByEmail(email)
        if(user==email){
            return done(null)
        }

    }
 passport.use(new LocaleStrategy({usernameFiled:'email'}),
 authenticateUser)
 passport.serializeUser((user,done)=>{})
 passport.deserializeUser((id,done)=>{})
}