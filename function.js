function validPassword(password, username){
if (password.length < 8){
    return false
}
if (password = ''){
    return false
}
if (password.includes(username)){
    return false
}
return true
}
