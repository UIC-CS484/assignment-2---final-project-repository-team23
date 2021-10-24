var express = require('express');
var router = express.Router();
var fs = require('fs');
var bcrypt = require('bcrypt');
var user = require('../model/user-structure.js');
let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);

router.use(express.urlencoded({extended:false}))

/* Create user */
router.post('/', async (req, res) => {
    var password = req.body.password;
    if(password.length < 8){
        var error = "Password not long enough";
        res.render('error',{error:error});
    } else {
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            siteUsers.push({
                id: Date.now().toString(),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hashedPassword
            })
            const usersString = JSON.stringify(siteUsers);
            for(var x = 0; x < usersString.length; x++){
                if(user.email != usersString[x].email){
                    siteUsers.push(user)
                    x = usersString.length;
                } else{
                    usersString[x].email = user.email;
                    x = usersString.length;
                }
            }
            fs.writeFile('./users.json', usersString, err =>{
                //error handling if, issue arises with file, else output to successfully wrote file
                if(err){
                    console.log('Error writing file', err)
                }else{
                    console.log('Successfully wrote to file')
                }
            })
    
            //res.redirect('/confirmation', { first_name : user.first_name, last_name: user.last_name})
            res.render('confirmation', { first_name : user.first_name, last_name: user.last_name});
        }catch{
            res.redirect('/createAccount')
        }

    }
    })


  

module.exports = router