<?php
    session_start();
    require_once "password.php";

    $id = $_SESSION["idNickname"];
    
    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

    $query = "SELECT game.`name`, game.`race`, game.`class`, game.`sex`, game.`eyes`, game.`hair`, game.`gods` FROM `game` WHERE id_nickname = $id";
    
    if ($result = $mysqli->query($query)) {
        $info = array();
        
        while($row = $result->fetch_assoc())
            $info[] = $row;
        
        $query = "SELECT users.`nickname` FROM `users` WHERE id = $id";
        $result = $mysqli->query($query);
        while($row = $result->fetch_assoc())
            $info[] = $row;
        
        echo json_encode($info);
    }

     $mysqli->close();
?>