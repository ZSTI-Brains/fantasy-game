<?php
    require_once "password.php";

    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

    $query = "SELECT game.`name`, game.`race`, game.`class`, game.`sex`, game.`eyes`, game.`hair`, game.`goddes` FROM `game` WHERE id_nickname = \"1\"";
    if ($result = $mysqli->query($query)) {
        $info = array();
        
        while($row = $result->fetch_assoc())
            $info[] = $row;
        
        echo json_encode($info);
    }

     $mysqli->close();
?>