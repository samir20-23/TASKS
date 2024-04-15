let submit = document.getElementById("submit");
//elements

let username = document.getElementById("username");
let password = document.getElementById("password");

//errors elements

let errusername = document.getElementById("errusername");
let errpassword = document.getElementById("errpassword");
let errvirafied = document.getElementById("errvirafied");

//clear

function clear(){
 [errusername , errpassword , errvirafied].forEach(function (e){
    e.innerHTML="";
    e.style.color="red";
 })
}

submit.addEventListener("click",function(){
    request = new XMLHttpRequest();
    request.open("POST","login.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("username="+username.value+"&password="+password.value);
    request.responseType = "document";
     request.onload = () => {
         response = request.response.body.innerHTML;
        
             if (response.trim().toLowerCase() == "emptyusername"){clear(); errusername.innerHTML="empty username!";}
        else if (response.trim().toLowerCase() == "emptypassword"){clear(); errpassword.innerHTML="empty password!";}
        else if (response.trim().toLowerCase() == "dbusername"){clear(); errusername.innerHTML="not virafied username!";}
        else if (response.trim().toLowerCase() == "dbpassword"){clear(); errpassword.innerHTML="password not virafied !";}
        else if (response.trim().toLowerCase() == "notconnect"){clear(); errvirafied.innerHTML="not connect!";}
        else if (response.trim().toLowerCase() == "connect"){clear();  errvirafied.style.color="green";  errvirafied.innerHTML="connect";}    
     
    }
})