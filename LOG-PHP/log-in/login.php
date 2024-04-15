<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    include "all.php";
    if(!empty($_POST["username"])){
        $username =filter($_POST["username"]);
         if(!empty($_POST["password"])){
            $password = filter($_POST["password"]);
            try{
                $con = new PDO("mysql:host=$host;dbname=$dbname",$user,$pass);
                $con->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);

                $select = $con->query("SELECT username , email , password FROM $tbname WHERE username='$username'");
                $fetch = $select->fetch();
                if($fetch && $fetch["username"] == $username){
                    
                    if($fetch && $fetch["password"] == $password){
                        echo "connect";
                    }else{
                    echo "dbpassword";
                    }
                }else{
                echo "dbusername";
                }
                
            }catch(PDOException $e){echo "notconnect".$e->getMessage();}
         }else{echo "emptypassword";}
    }else{echo "emptyusername";}
}