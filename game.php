<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Soon!</title>
    <link rel="stylesheet" href="css/game.css"> <!-- To 1200 On 800-->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Da&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1>TheThx</h1>
    </header>
    <div id="flex-contener">
        <nav>
            <div id="gold-level">
                <span id="level"></span>
                <span id="gold"></span>
            </div>
            <p id="nickname" class="character"><span id="name"></span></p>
            <p id="race" class="character"></p>
            <p id="class" class="character"></p>
            <p id="sex" class="character"></p>
            <p id="eyes" class="character"></p>
            <p id="hair" class="character"></p>
            <p  id="goddes" class="character"></p>
            
            <p id="continue">Continue</p>
            <p id="equipment">Equipment</p>
            <p id="magic">Magic</p>
        </nav>
        <main>
            <div id="default"> 
                <p id="text-container">
                    
                </p>
                <div id="choose-container">
                   
                </div>
            </div>
            <div id="equipment-div"> 
                <div id="player-eq">
                    
                </div>
                <div id="backpack">
                    
                </div>
            </div>
            <div id="magic-div">
                
            </div>
        </main>
    </div>
    <footer>&copy; All rights reserved!</footer>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/change-container.js"></script>
    <script src="js/chatacter-info.js"></script>
    <script src="js/gold-and-level.js"></script>
    <script src="js/stage.js"></script>
</body>
</html>