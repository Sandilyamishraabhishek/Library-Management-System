function display(){
    window.alert("Your are registerd now!!");

}
function validateForm() {
    var name = document.forms["myfm"] ["name"].value;
    var password = document.getElementById("password").value;

    var namePattern = /^[a-zA-Z]{6,}$/;
    var passwordPattern = /^\d{6}$/;

    if (!name.match(namePattern)) {
        alert("Name should contain alphabets and the length should not be less than 6 characters.");
        return false;
    }

    if (!password.match(passwordPattern)) {
        alert("Password should contain 6 digits only.");
        return false;
    }


    return true;
}
function validateForm() {
    var email = document.forms["myfm"]["email"].value;
    var phonePattern = /^\d{10}$/;


    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phone = document.forms["myfm"]["phone"].value;


    if (!email.match(emailPattern)) {
        alert("Invalid email format. Please enter a valid email address.");
        return false;
    }
    if (!phone.match(phonePattern)) {
        alert("Phone number should contain 10 digits only.");
        return false;
    }



    

    return true;
}