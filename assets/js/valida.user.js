function validate_user(){
    var username= document.getElementById("log-username").value;
    var password_recovery= localStorage.getItem(username.toLowerCase()+"-password");
    var password = document.getElementById("log-password").value;
    var full_name ;
    if(password_recovery===password.trim()){
        full_name=localStorage.getItem(username.toLowerCase()+"-first-name")+" "+localStorage.getItem(username.toLowerCase()+"-last-name");
        document.getElementById("login-alert").classList.add("alert-primary");
        document.getElementById("message-login").innerHTML = "Welcome "+full_name;
    }else{
        document.getElementById("message-login").innerHTML = "Authentication Error";
        document.getElementById("login-alert").classList.add("alert-danger");
    }
    $('#login-alert').show();
}