const helperFunctions = require('../helper/helperFunctions')

const securePassword = {"password": "Gopika96"}
const insecurePassword = {"password": "Gopika"}

describe("To test enforcing strong passwords", ()=>{
    //Correct usage 
    test("Positive test case for secure input", ()=>{
        var isPasswordStrong = helperFunctions.checkPasswordLength(securePassword);
        expect(isPasswordStrong).toBe(true)
    })
    //Erroneous input 
    test("Negative case for weak password", ()=>{
        var isPasswordStrong = helperFunctions.checkPasswordLength(insecurePassword);
        expect(isPasswordStrong).toBe(false)
    })

})

