function validate() 
{
    let user = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let confrmpassword = document.querySelector('#passwordconfrm').value;
    let mobileno = document.querySelector('#numbermobile').value;
    let email = document.querySelector('#emailid').value;

    //username
    if ((user.length < 3) || (user.length > 20)) {
        document.querySelector('#username-err').innerHTML = " **  username must be required 3 to 20 characters";
        return false;
    }

    if (!isNaN(user)) {
        document.querySelector('#username-err').innerHTML = " ** please enter character";

        return false;
    }


    //password
    if ((password.length < 5) || (password.length > 20)) {
        document.querySelector('#password-err').innerHTML = " ** please fill the password between 5 and 20";
        return false;
    }

    //confrmpassword

    if (password != confrmpassword) {
        document.querySelector('#passwordconfrm-err').innerHTML = " **  password are not matching";
        return false;
    }


    //mobileNumb


    if (mobileno.length != 11) {
        document.querySelector('#numbermobile-err').innerHTML = " ** Mobile number should be 10 digits ";
        return false;
    }
    if (isNaN(mobileno)) {
        document.querySelector('#numbermobile-err').innerHTML = " ** Mobile number should conatins only digits ";
        return false;
    }

    //email


    if (email.indexOf('@') <= 0) {
        document.querySelector('#emailid-err').innerHTML = " ** please fill the email id i proper format @ ";
        return false;
    }



    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {

        document.querySelector('#emailid-err').innerHTML = " ** please fill the email id in proper format . ";
        return false;
    }



}
