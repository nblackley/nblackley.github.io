
function putOnHat(){
    if( isBirthday()){
        document.getElementById("birthday-hat").style.visibility="visible";
    }
   // else{
   //     document.getElementById("birthday-hat").style.visibility="hidden";
    //}
}
function isBirthday() {
    var birthday = new Date("4/26/00"),
        today = new Date();
    if (birthday.getDate() == today.getDate() &&
    birthday.getMonth() == today.getMonth()) {
        //alert("true");
        return true;   
    }
    else {
        //alert("false");
        return false;
    }
}
//document.ready(putOnHat());