<?php
    session_start();
    require_once "password.php";
    
    $id = $_SESSION["idNickname"];

    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

    $query = "SELECT game.`gold`, game.`level` FROM `game` WHERE id_nickname = $id";

    if ($result = $mysqli->query($query)) {
        $row = $result->fetch_assoc();
        $all[] = $row["level"];
        $all[] = $row["gold"];
       
        echo json_encode($all);
    }
?>