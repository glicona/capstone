function send_mail(){
    var firstName= document.getElementById("inputFirstname").value;
    var email= document.getElementById("inputEmail").value;
    var subject= document.getElementById("inputSubject").value;
    var message= document.getElementById("message").value;
   window.open('mailto:'+email.trim()+'?subject='+subject+'&body='+message);
}