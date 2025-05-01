import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'


class userController {
    static home = (req, res)=>{
        res.render('index')
    };
    static registration = (req, res)=>{
        const message = req.query.message;
        const reg = { name: "Registration Page" };
        res.render('registration', {reg, message})
    };
    static login = (req, res)=>{
        const message = req.query.message;
        console.log(message);
        const log = {
            name: "Login page"
        }
        res.render('login', {log, message})
    }
    static createUserDoc = async (req, res)=>{
        console.log("BODY DATA:", req.body);
        const hashPassword = await(bcrypt.hash(req.body.password, 10));
        try {
            //creating new documents using model    
            const doc = new UserModel({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
            })
            //saving documents
            await doc.save()
            res.redirect('/user/login')
        } catch (error) {
            
        }
    }
    static verifyLogin = async(req, res)=>{
        try {
            const {email, password} = await req.body;
            console.log(email)
            console.log(password)
            console.log(req.body)
            const result = await UserModel.findOne({email : email, password: password});
            // console.log(result);
            const existingUser = await UserModel.findOne({ email: email });
            if (existingUser) {
                console.log("User already exists");
                // User already exists
                res.redirect("/user/registration" + "?message=User already exists");
            }
            if (result){
                res.redirect('/user/dashboard'+ "?message = logged in successfully" );
            }else{
                res.redirect('/user/login' + "?message=You don't have an account")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    static dashboard = async (req, res)=> {
        const dash = {
            name: 'Welcome to Dashboard',
        }
        res.render('dashboard', {dash})
    }
}



export default userController
