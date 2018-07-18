function validation()
{
    let user = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let confrmpassword = document.querySelector('#passwordconfrm').value;
    let mobileno = document.querySelector('#numbermobile').value;
    let email = document.querySelector('#emailid').value;

    //username
    if( user == "" ){
        document.querySelector('#usernameid').innerHTML = " ** please enter a username ";
        return false;
    }
    if(( user.length < 3) || (user.length > 20)){
        document.querySelector('#usernameid').innerHTML = " **  username must be required 3 to 20 characters";
        return false;
    }

    if(!isNaN(user)){
        document.querySelector('#usernameid').innerHTML = " ** please enter character";
        return false;
    }


    //password

    if( password == "" ){
        document.querySelector('#passwords').innerHTML = " ** please enter a password ";
        return false;
    }

    if((password.length < 5) || (password.length > 20)){
        document.querySelector('#passwords').innerHTML = " ** please fill the password between 5 and 20";
        return false;
    }

     //confrmpassword

    if( password!=confrmpassword){
        document.querySelector('#confrmpasswrod').innerHTML = " **  password are not matching";
        return false;
    }



    if( confrmpassword == "" ){
        document.querySelector('#confrmpasswrod').innerHTML = " ** please fill the confrm paasword ";
        return false;
    }

    //mobileNumb

    if( mobileno == "" ){
        document.querySelector('#mobilenumber').innerHTML = " ** please fill the mobile number ";
        return false;
    }

    if(mobileno.length!=11){
        document.querySelector('#mobilenumber').innerHTML = " ** Mobile number should be 10 digits ";
        return false;
    }
    if(isNaN(mobileno)){
        document.querySelector('#mobilenumber').innerHTML = " ** Mobile number should conatins only digits ";
        return false;
    }

    //email

    if( email == "" ){
        document.querySelector('#emailids').innerHTML = " ** please fill the email id ";
        return false;
    }


    if(email.indexOf('@') <= 0){
        document.querySelector('#emailids').innerHTML = " ** please fill the email id i proper format @ ";
        return false;
    }

        

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){

        document.querySelector('#emailids').innerHTML = " ** please fill the email id in proper format . ";
        return false;
    } 

   

}   




