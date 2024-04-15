<?php
function filter($data){
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
     $data=trim($data) ;
    return $data;
}

$host="localhost";
$user="SAMIR";
$pass="samir123";
$dbname="login_breaf";
$tbname="singup";