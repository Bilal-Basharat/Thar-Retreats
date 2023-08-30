//for importing express
const express= require('express');
const router = express.Router();

//for using images in backend we install and import multer
const multer = require('multer');

//for sending email to new users
const {transporter} = require('../nodeMailer/nodemailer')

const {db} = require('../database/sql')

//code for storing images like profile image
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);
    }
})

//saving data into database
router.post('/',(req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(name,email,password);

    //code for sending email to new users
    const mailOption = {
        from: `Thar Retreats <bilalbisharat@gmail.com>`,
        to: email,
        subject: "Congratulations! You have been registered",
        html: `<p> You have been registered successfully</p>`
    }
    
    transporter.sendMail(mailOption,(error,info) => {
        if (error) throw error;
        else{
            console.log('email send successfully')
        }
    })

    const data = {
        "name": name,
        "email": email,
        "password": password,
                    
    }
db.collection('users').insertOne(data,(err,res)=> {
    if (err) throw error;
    else{
        res.redirect("http://localhost:3000/")
    }
})
    
});



module.exports = router;