


function frmValidation(){
    var first_name = document.registrtaion.f_first_name;
    var last_name = document.registrtaion.f_last_name;
    var address = document.registrtaion.f_address;
    var mobileno = document.registrtaion.f_mobile_no;
    var email = document.registrtaion.f_email_id;
    var pass1 = docuemnt.registration.f_password;
    var pass2 = document.registrtaion.f_password2;
    var security_ques = document.registration.f_my_select;
    var security_answer = document.registration.f_my_answer;
    
     var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    var alphaExp = /^[a-zA-Z]+$/;
    
     if (first_name === null || first_name === "") {
        alert("First Name not filled");
        return false;
    }
    if(!first_name.match(alphaExp)){
        alert="plese enter letters only";
        return false;
    }if (last_name === null || last_name === "") {
        alert("Last Name not filled");
        return false;
    }
    if (address === null || address === " ") {
        alert = "Address Field is Blank";
        return false;
    }
    if (!email.match(reEmail)) {
        alert("invalid email address");
        return false;
    }

    if (pass1 !== null || pass2 !== null) {
        alert = "plaese fill the both  password";
    }
    if (pass1 !== pass2) {
        alert = "Password not matched";
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        return false;
    }


    if (security_ques === null || security_ques === "") {
        alert = "Selet Security Answer";
        return false;
    }
    if (security_answer === null || security_answer === "") {
        alert = "please answer the security answer";
        return false;
    }


    if (isNaN(mobile_no)) {
        document.getElementId("id_mobile_no").innerHTML = "Enter Numeric Value only";
        return false;
    }

    else {
        alert = "Ready to Register";
    }



    
}