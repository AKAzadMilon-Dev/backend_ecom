const nodemailer = require('nodemailer')
async function sendEmail(email, verify, templete){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "gdazad2267@gmail.com", 
          pass: "xncmngvorlwinkcl", 
        },
    });
    
    let info = await transporter.sendMail({
        from: "akazadmilon.dev@gmail.com", 
        to: email, 
        subject: "Plese verify your email",
        html: templete(verify), 
    });
}

module.exports = sendEmail