const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const {postChildFoundInfo } = require("./firebase")



app.post("/ChildFound", (req, res) => {
    console.log("New User", req.body);
    postChildFoundInfo(req, res);
});


// // Import Admin SDK
// const { getDatabase } = require('firebase-admin/database');

// // Get a database reference to our blog
// const db = getDatabase();
// const ref = db.ref('server/saving-data/fireblog');

// // SIGNUP
// app.post('/SignUp', (req, res) => {
//     // res.send("data")
//     console.log("Signup",req.body);
//     db.query("INSERT INTO User (Name, Email, Password, Latitude, Longitude) VALUES (?, ?, ?, ?, ?)", [req.body.Name, req.body.Email, req.body.Password,req.body.Latitude, req.body.Longitude], (error, results) => {
//             console.log(results)
//     })
// });




// app.get("/data",(req,res)=>{
//     // var fs = require('fs'); // file system module
//         console.log(fields);
//         res.send(`<h1>First Name: ${fields[0]}</h1>
//         <h1>Last Name: ${fields[1]}</h1>
//         <h2>Email: ${fields[2]}</h2>
//         `)
//     });




// app.get('/SignUp', (req, res) => {
//     res.send("data")
//     console.log("Login",req.body);

// })


// app.post("/ForgetEmail",(req,res)=>{
//     console.log(req.body.Email)
//     var email = req.body.Email;
//     var mail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//     user: 'wajjuwajahat123@gmail.com', // Your email id
//     pass: '03162150074@' // Your password
//     }
//     });
//     var mailOptions = {
//     from: 'wajjuwajahat123@gmail.com',
//     to: email,
//     subject: 'Reset Password Link - Authentication App',
//     html: `<p>You requested for reset password, kindly use this <a href="http://auth-sql-app.herokuapp.com/Reset_Password/?${email}">link</a> to reset your password</p>`
//     };
//     mail.sendMail(mailOptions, function(error, info) {
//     if (error) {
//     console.log(1)
//     } else {
//     console.log(0)
//     }
//     });
// })

// app.get("/Reset_Password",(req,res)=>{

//     res.render("ReEnterPass",{email:Object.keys(req.query)[0]})


// })

// //  LOGIN
// app.get('/Login', async (req, res) => {

//         db.query('SELECT * FROM User',(error, results) => {

//             res.send(results)

//         })

// })

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })


// app.post("/Login",(req,res)=>{
//     res.send("Login")
// })

// app.post("/ChangePass",(req,res)=>{
//     console.log("body",req.body)
//     db.query('UPDATE User SET ? WHERE Email = ?', [{ Password: req.body.pass}, req.body.email], (error, results) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(results)
//             res.render("PasswordChanged")
//         }
//     });

// });


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
})