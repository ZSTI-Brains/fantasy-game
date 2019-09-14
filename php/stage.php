<?php
    require_once "password.php";

    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);
    //echo $_POST["loading"];
    if ($_POST["loading"] == 0) {
        $query = "SELECT game.`stage` FROM `game` WHERE id_nickname = \"1\"";
        if ($result = $mysqli->query($query)) {
            $row = $result->fetch_assoc();
            echo $row["stage"]; 
        }
    }
    else {
        if(isset($_POST["name"])){
            if ($_POST["stage"] == 0.1) {
                $name = $_POST["name"];
                $query = "UPDATE `game` SET `name`='$name' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                echo 0.2;
            }
        }
    }

     $mysqli->close();
?>