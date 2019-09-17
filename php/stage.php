<?php
    require_once "password.php";

    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

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
                $query = "UPDATE `game` SET `stage`='0.2' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                echo 0.2;
            }
        }
        else if(isset($_POST["race"])) {
            if ($_POST["stage"] == 0.2) {
                $race = $_POST["race"];
                $query = "UPDATE `game` SET `race`='$race' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                $query = "UPDATE `game` SET `stage`='0.3' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                echo 0.3;
            }
        }
        else if(isset($_POST["class"])) {
            if ($_POST["stage"] == 0.3) {
                $class = $_POST["class"];
                $query = "UPDATE `game` SET `class`='$class' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                $query = "UPDATE `game` SET `stage`='0.4' WHERE `id_nickname`= \"1\"";
                $mysqli->query($query);
                echo 0.4;
            }
        }
    }

     $mysqli->close();
?>