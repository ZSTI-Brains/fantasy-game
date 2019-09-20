<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Soon!</title>
    <link rel="stylesheet" href="css/game.css">
    <style>
        body {
            background-color: black;
        }
        form {
            position: absolute;
            top: 50%; 
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        input {
            display: block;
        }
    </style>
</head>
<body>
    <form action="php/sign-in.php" method="post">
        <input type="text" placeholder="Nickname" name="nickname">
        <input type="password" placeholder="Password" name="password">
        <input type="submit" value="Log In">
    </form>
</body>
</html>