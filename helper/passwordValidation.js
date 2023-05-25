function passwordValidation(password){
    const pattern = /^(?=.*\d)(?=.*[A-Z])(.{8,50})$/
    return pattern.test(password)
}

module.exports = passwordValidation