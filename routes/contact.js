let express = require("express");
let router = express.Router();
let mongoose=require('mongoose');
//create a ref to the db schema  
let contact=require('../models/contact');
//get contact list page read operation
router.get('/',(reg,res,next)=>{
    contact.find((err,contactList)=>{
    if(err){return console.error(err);}
    else
    //console.log(contactList);
    
    res.render('contacts/index',{
      title:"Contact List",
      contactList:contactList
    });
    
    });
});
module.exports = router;
