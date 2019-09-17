stage();

var stageNumber;
var name;
var race;
var clas;

function stage() {
    const text = document.querySelector("#text-container");
    const choose = document.querySelector("#choose-container");
    
    $.ajax({
        type: "post",
        data: {loading : 0},
        url: "php/stage.php"
    })
    .done(function(response) {
        console.log(response);
        stageNumber = response;
        if (stageNumber == 0.1) {
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
        else if(stageNumber == 0.2) {
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
            
            inputHuman.addEventListener("click", function(){race = "Human"; typeRace(race); race = "Człowiek";})            //change
            inputElf.addEventListener("click", function(){race = "Elf"; typeRace(race); race = "Elf";})                     //change
            inputHalfElf.addEventListener("click", function(){race = "Half-Elf"; typeRace(race); race = "Półelf";})         //change
            inputBeastman.addEventListener("click", function(){race = "Beastman"; typeRace(race); race = "Zwierzoczłek";})  //change
            inputOrc.addEventListener("click", function(){race = "Orc"; typeRace(race); race = "Ork";})                     //change
        }
        else if (stageNumber == 0.3) {
            text.innerHTML = "Wybierz klasę dla swojej postaci:";  
            choose.innerHTML = "";
            if (race == "Human" || race == "Człowiek") {
                
            }
            else if (race == "Elf") {
                const elfArcher = document.createElement("input");
                const elfSorcerer = document.createElement("input");

                elfArcher.setAttribute("type", "button");
                elfSorcerer.setAttribute("type", "button");

                elfArcher.setAttribute("value", "Łucznik");
                elfSorcerer.setAttribute("value", "Czarodziej");

                choose.appendChild(elfArcher);
                choose.appendChild(elfSorcerer);
            }

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
    
}
