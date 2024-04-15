let submit = document.getElementById("submit");
//elements

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");

//errors elements

let errusername = document.getElementById("errusername");
let erremail = document.getElementById("erremail");
let errpassword = document.getElementById("errpassword");
let errcpassword = document.getElementById("errcpassword");
let errsubmit = document.getElementById("errsubmit");

//clear

function clear(){
    [errusername , erremail , errpassword , errcpassword , errsubmit].forEach(function(e){
        e.innerHTML="";
        e.style.color='red';
        e.style.textShadow="0 0 12px  red";
    })}
//virafide send
submit.addEventListener("click",function(){

    let request = new XMLHttpRequest();
    request.open("POST","singUp.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(
        "username=" +
          username.value +
          "&email=" +
          email.value +
          "&password=" +
          password.value +
          "&cpassword=" +
          cpassword.value
      );
      request.responseType = "document";
      request.onload = () => {
        response = request.response.body.innerHTML;
       
    
    
        if (response.trim().toLowerCase() == "emptyusername") {
          clear();
          errusername.innerHTML = "username is empty!";
        } else if(response.trim().toLowerCase() == "longthusername"){
            clear();
            errusername.innerHTML ="Username more be less than 5 characters.";
        }else if(response.trim().toLowerCase() == "emptyemail"){
            clear();
            erremail.innerHTML ="Email field is empty!";
        }else if(response.trim().toLowerCase() == "bademail"){
            clear();
            erremail.innerHTML = "This email address isn't valid!";
        }else if(response.trim().toLowerCase() == "emptypassword"){
            clear();
            errpassword.innerHTML = "Password field is empty!";
        }else if(response.trim().toLowerCase() == "lengthpassword"){
            clear();
            errpassword.innerHTML = "The password must contain at least 8 characters.";
        }else if(response.trim().toLowerCase() == "notmatch"){
            clear();
            errcpassword.innerHTML = "Passwords do not match!";
        }else if(response.trim().toLowerCase() == "invalied"){
            clear();
            errsubmit.style.color="green";
            errsubmit.innerHTML = "connect";
        }else if(response.trim().toLowerCase() == "notconnect"){
            clear();
            errsubmit.style.color="red";
            errsubmit.innerHTML = "notconnect";
        }else{
            
            clear();
        }
    }

})

