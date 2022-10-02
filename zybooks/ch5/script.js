// Your solution goes here
function isStrongPassword(password){
    let isStrong;

    if(password.length >= 8 && password.indexOf("password") === -1){
        isStrong = true;
        for(let i = 0; i < password.length; i++){
            let unicodeVal = password.charCodeAt(i);
            if( unicodeVal>= 65 && unicodeVal <= 90){
                return true;
            }
            else{
                isStrong = false;
            }
        }
    }
    else{
        return false;
    }
    return isStrong;
}
