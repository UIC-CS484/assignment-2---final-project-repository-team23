const PASSWORDLENGTH = 8 

function checkPasswordLength(data){
    if(data.password.length < PASSWORDLENGTH){
        return false
    }

    return true
}

exports.checkPasswordLength = checkPasswordLength