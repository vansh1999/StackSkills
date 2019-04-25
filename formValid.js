function validate() {
       
    
    var passOne = document.myform.passwordOne.value
    var passTwo = document.myform.passwordTwo.value 


    if(passOne == "" || passTwo == "" || passOne.length < 6 || passTwo.length < 6){
       alert("length of password must be more the 6 character")
       return false;
    
   }

   else if(passOne != passTwo){
       alert("password must be same")
       return false;
   }

     


   var mobDig = document.myform.mobileNumber.value
   


    if(mobDig < 7 ){
        alert("Enter a valid number");
        return false;
   }


    if(document.myform.agreeTerms.checked == false) {
    alert("agree to our terms to enroll");
    return false;
}
    return true;
   
}

