if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express=require('express')
const app=express()
const passport = require('passport')
const bcrypt=require('bcrypt')
const initializepassport=require("./passport-config")
const flash = require('express-flash')
const session = require('express-session')

initializepassport(

    passport,
    email=>{
        return users.find(user=>user.email===email)
    }
)

initializepassport(passport)
const users=[]
app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(flash)
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.get('/',(req,res)=>{
res.render('index.ejs',{name:" hena"})
}

)

app.get('/login',(req,res)=>{
    res.render('login.ejs')
    }
    )
app.get('/register',(req,res)=>{
    res.render('register.ejs')
    }
    )

app.post("/register",async(req,res)=>{
    try {
        const hashedpassword=await bcrypt.hash(req.body.password,10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedpassword


        })
        res.redirect("/login")
    } catch  {
        res.redirect("register")
    }
console.log(users)
})
app.post("/login",(req,res)=>{
    
})
app.listen(3000)
