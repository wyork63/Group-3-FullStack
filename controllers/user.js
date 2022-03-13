const { body } = require('express-validator/check')

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
     return [ 
        body('username', 'userName doesnt exists').exists(),
        body('email', 'Invalid email').exists().isEmail(),
        body('password', 'password cannot be blank').exists(),
       ]   
    }
  }
}