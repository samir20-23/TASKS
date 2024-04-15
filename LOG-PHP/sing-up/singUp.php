<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include "all.php";

    if (!empty($_POST["username"])) {
        if (strlen($_POST["username"]) >= 5 && strlen($_POST["username"]) <= 35) {
            $username = filter($_POST["username"]);

            if (!empty($_POST["email"])) {

                if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                    $email = filter($_POST["email"]);

                    if (!empty($_POST["password"])) {

                        if (strlen($_POST["password"]) >= 5 && strlen($_POST["password"]) <= 8 ) {
                            $password = filter($_POST["password"]);

                            if ($_POST["cpassword"] == $_POST["password"]) {
                                $cpassword = filter($_POST["cpassword"]);

                                try {
                                    $con = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
                                    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                                    $select = $con->query("SELECT username,email,password FROM $tbname WHERE email='$email'");
                                    $slt = $select->fetch();
                                    if($slt && $slt["email"]==$email){
                                       echo "notconnect";
                                    } else {
                                         $insert = $con->prepare("INSERT INTO $tbname(username , email , password) VALUES(:username , :email , :password)");
                                        $insert->bindParam(":username", $username);
                                        $insert->bindParam(":email", $email);
                                        $insert->bindParam(":password", $password);
                                        $insert->execute();
                                        echo "invalied";

                                    }
                                } catch (PDOException $e) {
                                    echo "notconnect" . $e->getMessage();
                                }
                            } else {
                                echo "notmatch";
                            }
                        } else {
                            echo "lengthpassword";
                        }
                    } else {
                        echo "emptypassword";
                    }
                } else {
                    echo "bademail";
                }
            } else {
                echo "emptyemail";
            }
        } else {
            echo "longthusername";
        }
    } else {
        echo "emptyusername";
    }
}
