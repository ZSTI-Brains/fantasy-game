<?php
    session_start();
    require_once "password.php";

    if (isset($_POST["nickname"])) {
        $nickname = $_POST["nickname"];
        $password = $_POST['password'];
        $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);
        
        $query = "SELECT * FROM `users` WHERE `nickname` = '$nickname' AND password = '$password'";
        
        if ($result = $mysqli->query($query)) {
            $is = $result->num_rows;
            if ($is > 0) {
                $row = $result->fetch_assoc();
                $_SESSION["idNickname"] = $row["id"];
                $_SESSION["nickname"] = $row["nickname"];

                $result->free_result(); 
                header("Location:../game.php");
            }
            else {
                echo "Incorrect nickname or password, missing user!";
            }
        }
        else {
            echo "Connect Error!";
        }
    }
    else {
        echo "Empty field nickname or password.";
    }
    
?>