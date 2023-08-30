const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: "bilalbisharat@gmail.com",
        pass: ""
    }
})

module.exports = {transporter};
