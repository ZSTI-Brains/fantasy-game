stage();

var stageNumber; var name; var race; var clas; var sex; var eyes; var hair; var gods;

function stage() {
    const text = document.querySelector("#text-container");
    const choose = document.querySelector("#choose-container");
    
    $.ajax({
        type: "post",
        data: {loading : 0},
        url: "php/stage.php"
    })
    .done(function(response) {
        stageNumber = response;
        if (stageNumber == 0.1) { //Choose a name
            text.innerHTML = "Wpisz imię dla swojej postaci:";
            
            const inputName = document.createElement("input");
            const inputNext = document.createElement("input");
            
            inputName.setAttribute("type", "text");
            inputName.setAttribute("placeholder", "Imię");
            
            inputNext.setAttribute("type", "button");
            inputNext.setAttribute("value", "Dalej");
            
            choose.appendChild(inputName);
            choose.appendChild(inputNext);
            
            $(inputNext).on('click', inputName, function() {name = inputName.value;})
            inputNext.addEventListener("click", nextStage);
        }
        else if(stageNumber == 0.2) { //Choose a race
            text.innerHTML = "Wybierz rasę dla swojej postaci: <span class=\"less\">(Pamiętaj, każda rasa ma przypisaną inną kalsę, wybieraj mądrze.)<span>";  
            choose.innerHTML = "";
            
            const inputHuman = document.createElement("input");
            const inputElf = document.createElement("input");
            const inputHalfElf = document.createElement("input");
            const inputBeastman = document.createElement("input");
            const inputOrc = document.createElement("input");
            
            inputHuman.setAttribute("type", "button");
            inputElf.setAttribute("type", "button");
            inputHalfElf.setAttribute("type", "button");
            inputBeastman.setAttribute("type", "button");
            inputOrc.setAttribute("type", "button");
            
            inputHuman.setAttribute("value", "Człowiek");
            inputElf.setAttribute("value", "Elf");
            inputHalfElf.setAttribute("value", "Półelf");
            inputBeastman.setAttribute("value", "Zwierzoczłek");
            inputOrc.setAttribute("value", "Ork");

            choose.appendChild(inputHuman);
            choose.appendChild(inputElf);
            choose.appendChild(inputHalfElf);
            choose.appendChild(inputBeastman);
            choose.appendChild(inputOrc);
            
            inputHuman.addEventListener("click",    function(){race = this.value; typeRace(race); select(this);})            
            inputElf.addEventListener("click",      function(){race = this.value; typeRace(race); select(this);})                     
            inputHalfElf.addEventListener("click",  function(){race = this.value; typeRace(race); select(this);})     
            inputBeastman.addEventListener("click", function(){race = this.value; typeRace(race); select(this);})  
            inputOrc.addEventListener("click",      function(){race = this.value; typeRace(race); select(this);})                     
        }
        else if (stageNumber == 0.3) { //Choose a class
            text.innerHTML = "Wybierz klasę dla swojej postaci:";  
            choose.innerHTML = "";
            $.ajax({
                type: "post",
                url: "php/collection-race.php"
            })
            .done(function(response) {
                if (response == "Human" || response == "Człowiek") {
                    const humanAssasin = document.createElement("input");
                    const humanArcher = document.createElement("input");
                    const humanWarrior = document.createElement("input");
                    
                    humanAssasin.setAttribute("type", "button");
                    humanArcher.setAttribute("type", "button");               
                    humanWarrior.setAttribute("type", "button");

                    humanAssasin.setAttribute("value", "Zabójca");
                    humanArcher.setAttribute("value", "Łowca");
                    humanWarrior.setAttribute("value", "Wojownik");

                    choose.appendChild(humanAssasin);
                    choose.appendChild(humanArcher);
                    choose.appendChild(humanWarrior);
                    
                    humanWarrior.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})      
                    humanAssasin.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})       
                    humanArcher.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})           
                }
                else if (response == "Elf") {
                    const elfAssasin = document.createElement("input");
                    const elfArcher = document.createElement("input");
                    const elfSorcerer = document.createElement("input");
                    
                    elfAssasin.setAttribute("type", "button");
                    elfArcher.setAttribute("type", "button");               
                    elfSorcerer.setAttribute("type", "button");

                    elfAssasin.setAttribute("value", "Zabójca");
                    elfArcher.setAttribute("value", "Łucznik");
                    elfSorcerer.setAttribute("value", "Czarodziej");

                    choose.appendChild(elfAssasin);
                    choose.appendChild(elfArcher);
                    choose.appendChild(elfSorcerer);
                    
                    elfAssasin.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})          
                    elfArcher.addEventListener("click",   function(){clas = this.value; typeClass(clas); select(this);})            
                    elfSorcerer.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})     
                }
                else if (response == "Half-Elf" || response == "Półelf") {
                    const helfAssasin = document.createElement("input");
                    const helfArcher = document.createElement("input");
                    const helfSorcerer = document.createElement("input");
                    const helfWarrior = document.createElement("input");
                    
                    helfAssasin.setAttribute("type", "button");
                    helfArcher.setAttribute("type", "button");               
                    helfSorcerer.setAttribute("type", "button");
                    helfWarrior.setAttribute("type", "button");

                    helfAssasin.setAttribute("value", "Zabójca");
                    helfArcher.setAttribute("value", "Łucznik");
                    helfSorcerer.setAttribute("value", "Czarodziej");
                    helfWarrior.setAttribute("value", "Wojownik");

                    choose.appendChild(helfAssasin);
                    choose.appendChild(helfArcher);
                    choose.appendChild(helfSorcerer);
                    choose.appendChild(helfWarrior);
                    
                    helfWarrior.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})         /
                    helfAssasin.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})         
                    helfArcher.addEventListener("click",   function(){clas = this.value; typeClass(clas); select(this);})            
                    helfSorcerer.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})     
                }
                 else if (response == "Beastman" || response == "Zwierzoczłek") {
                    const centaur = document.createElement("input");
                    const faun = document.createElement("input");
                    const minotaur = document.createElement("input");
                    const werewolf = document.createElement("input");
                    const werecat = document.createElement("input");
                    
                    centaur.setAttribute("type", "button");
                    faun.setAttribute("type", "button");
                    minotaur.setAttribute("type", "button");
                    werewolf.setAttribute("type", "button");
                    werecat.setAttribute("type", "button");
                  
                    centaur.setAttribute("value", "Centaur");
                    faun.setAttribute("value", "Faun");
                    minotaur.setAttribute("value", "Minotaur");
                    werewolf.setAttribute("value", "Wilkołak");
                    werecat.setAttribute("value", "Kotołak");
                    
                    choose.appendChild(centaur);
                    choose.appendChild(faun);
                    choose.appendChild(minotaur);
                    choose.appendChild(werewolf);
                    choose.appendChild(werecat);
                    
                    centaur.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})         
                    faun.addEventListener("click",     function(){clas = this.value; typeClass(clas); select(this);})                  
                    minotaur.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})      
                    werewolf.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})       
                    werecat.addEventListener("click",  function(){clas = this.value; typeClass(clas); select(this);})         
                }
                else if (response == "Ork" || response == "Orc") {
                    const barbarian = document.createElement("input");
                    const blackMagician = document.createElement("input");
                    
                    barbarian.setAttribute("type", "button");
                    blackMagician.setAttribute("type", "button");
                    
                    barbarian.setAttribute("value", "Barbażyńca");
                    blackMagician.setAttribute("value", "Czarnoksiężnik");
                    
                    choose.appendChild(barbarian);
                    choose.appendChild(blackMagician);
                    
                    barbarian.addEventListener("click",     function(){clas = this.value; typeClass(clas); select(this);})       
                    blackMagician.addEventListener("click", function(){clas = this.value; typeClass(clas); select(this);})  
                }
            })

        }
        else if (stageNumber == 0.4) { //Choose a sex
            text.innerHTML = "Wybierz płeć dla swojej postaci:";  
            choose.innerHTML = "";
            
            const man = document.createElement("input");
            const woman = document.createElement("input");
            
            man.setAttribute("type", "button");
            woman.setAttribute("type", "button");
            
            man.setAttribute("value", "Mężczyzna");
            woman.setAttribute("value", "Kobieta");
            
            choose.appendChild(man);
            choose.appendChild(woman);
            
            man.addEventListener("click",   function(){sex = "Man"; sex = "Mężczyzna"; nextStage(); select(this);})
            woman.addEventListener("click", function(){sex = "Woman"; sex = "Kobieta"; nextStage(); select(this);})
        }
        else if (stageNumber == 0.5) { //Choose a eyes color
            text.innerHTML = "Wybierz kolor oczy dla swojej postaci:";  
            choose.innerHTML = "";
            
            const blueEyes = document.createElement("input");
            const greenEyes = document.createElement("input");
            const brownEyes = document.createElement("input");
            const redEyes = document.createElement("input");
            const violetEyes = document.createElement("input");
            
            blueEyes.setAttribute("type", "button");
            greenEyes.setAttribute("type", "button");
            brownEyes.setAttribute("type", "button");
            redEyes.setAttribute("type", "button");
            violetEyes.setAttribute("type", "button");
            
            blueEyes.setAttribute("value", "Niebieskie");
            greenEyes.setAttribute("value", "Zielone");
            brownEyes.setAttribute("value", "Brązowe");
            redEyes.setAttribute("value", "Czerwone");
            violetEyes.setAttribute("value", "Fiołkowe");
            
            choose.appendChild(blueEyes);
            choose.appendChild(greenEyes);
            choose.appendChild(brownEyes);
            choose.appendChild(redEyes);
            choose.appendChild(violetEyes);
            
            blueEyes.addEventListener("click",   function(){eyes = this.value; nextStage(); select(this);})
            greenEyes.addEventListener("click",  function(){eyes = this.value; nextStage(); select(this);})
            brownEyes.addEventListener("click",  function(){eyes = this.value; nextStage(); select(this);})
            redEyes.addEventListener("click",    function(){eyes = this.value; nextStage(); select(this);})
            violetEyes.addEventListener("click", function(){eyes = this.value; nextStage(); select(this);})
        }
        else if (stageNumber == 0.6) { //Choose a hair color
            text.innerHTML = "Wybierz kolor włosów dla swojej postaci:";  
            choose.innerHTML = "";
            
            const whiteHair = document.createElement("input");
            const blondHair = document.createElement("input");
            const brownHair = document.createElement("input");
            const blackHair = document.createElement("input");
            const redHair = document.createElement("input");
            
            whiteHair.setAttribute("type", "button");
            blondHair.setAttribute("type", "button");
            brownHair.setAttribute("type", "button");
            blackHair.setAttribute("type", "button");
            redHair.setAttribute("type", "button");
            
            whiteHair.setAttribute("value", "Białe");
            blondHair.setAttribute("value", "Blond");
            brownHair.setAttribute("value", "Brązowe");
            blackHair.setAttribute("value", "Czarne");
            redHair.setAttribute("value", "Czerwone");
            
            choose.appendChild(whiteHair);
            choose.appendChild(blondHair);
            choose.appendChild(brownHair);
            choose.appendChild(blackHair);
            choose.appendChild(redHair);
            
            whiteHair.addEventListener("click", function(){hair = this.value; nextStage(); select(this);})
            blondHair.addEventListener("click", function(){hair = this.value; nextStage(); select(this);})
            brownHair.addEventListener("click", function(){hair = this.value; nextStage(); select(this);})
            blackHair.addEventListener("click", function(){hair = this.value; nextStage(); select(this);})
            redHair.addEventListener("click",   function(){hair = this.value; nextStage(); select(this);})
        }
        else if (stageNumber == 0.7) { //Choose a ???
            text.innerHTML = "Wybierz wiarę dla swojej postaci:";  
            choose.innerHTML = "";
            
            const oldGods = document.createElement("input");
            const redGoddes = document.createElement("input");
            const threeInOne = document.createElement("input");
            const ateizm = document.createElement("input");
            
            oldGods.setAttribute("type", "button");
            redGoddes.setAttribute("type", "button");
            threeInOne.setAttribute("type", "button");
            ateizm.setAttribute("type", "button");
            
            oldGods.setAttribute("value", "Starzy Bogowie");
            redGoddes.setAttribute("value", "Czerwona Bogini");
            threeInOne.setAttribute("value", "Trójca");
            ateizm.setAttribute("value", "Ateizm");
            
            choose.appendChild(oldGods);
            choose.appendChild(redGoddes);
            choose.appendChild(threeInOne);
            choose.appendChild(ateizm);
            
            oldGods.addEventListener("click",    function(){gods = this.value; typeGods(gods); select(this);})
            redGoddes.addEventListener("click",  function(){gods = this.value; typeGods(gods); select(this);})
            threeInOne.addEventListener("click", function(){gods = this.value; typeGods(gods); select(this);})
            ateizm.addEventListener("click",     function(){gods = this.value; typeGods(gods); select(this);})
        }
    })
};

function nextStage() {
    if (stageNumber == 0.1) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, name: name},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })
    }
    else if (stageNumber == 0.2) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, race: race},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
    else if (stageNumber == 0.3) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, class: clas},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
    else if (stageNumber == 0.4) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, sex: sex},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
    else if (stageNumber == 0.5) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, eyes: eyes},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
    else if (stageNumber == 0.6) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, hair: hair},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stage();
        })   
    }
    else if (stageNumber == 0.7) {
        $.ajax({
            type: "post",
            data: {loading : 1, stage: stageNumber, gods: gods},
            url: "php/stage.php"
        })
        .done(function(response) {
            stageNumber = response;
            setCharacterInformation();
            stageOne();
        })   
    }
}

function select(t) {
    const inputs = document.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++)
        inputs[i].style.borderColor = "#0085ff";
    
    t.style.borderColor = "yellow";
}