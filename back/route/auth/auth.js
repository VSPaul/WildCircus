var express = require('express');
var router = express.Router();
const models = require('../../models');
// const sendNodeMailer = require('../nodemailer');



//Create users 
router.post('/buyticket', (req, res) => {
    // this is a const that changes the user's inputs into something right for database
    let post={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email:req.body.email,
        event:req.body.event,
        number_of_tickets:req.body.number_of_tickets
    };
    models
    .TicketsTable
    .create(post)
    .then(user =>
        res.status(200).json({ message: "The user bought a ticket!"})
    )
    .catch(err => res.status(500).json({ message: err.message }))
})
    // console.log(usersData)
     
    // connection.query('INSERT INTO users SET ?', usersData, (error,res) => {
    //   console.log(error)
    //     if (error)
    //       res.status(500).json({ flash:  "E-mail already exist!" });
    //        else
    //       res.status(200).json({ flash:  "User has been signed up!" })
    //     });
    // });

module.exports = router;