stage();

var stageNumber;
var name;
var race;
var clas;
var sex;

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
            
            inputHuman.addEventListener("click", function(){race = "Human"; typeRace(race); race = "Człowiek"; select(this);})            //change
            inputElf.addEventListener("click", function(){race = "Elf"; typeRace(race); race = "Elf"; select(this);})                     //change
            inputHalfElf.addEventListener("click", function(){race = "Half-Elf"; typeRace(race); race = "Półelf"; select(this);})         //change
            inputBeastman.addEventListener("click", function(){race = "Beastman"; typeRace(race); race = "Zwierzoczłek"; select(this);})  //change
            inputOrc.addEventListener("click", function(){race = "Orc"; typeRace(race); race = "Ork"; select(this);})                     //change
        }
        else if (stageNumber == 0.3) {
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
                    
                    humanWarrior.addEventListener("click", function(){clas = "Warrior"; typeClass(clas); clas = "Wojownik"; select(this);})      //change
                    humanAssasin.addEventListener("click", function(){clas = "Assasin"; typeClass(clas); clas = "Zabójca"; select(this);})       //change
                    humanArcher.addEventListener("click", function(){clas = "Archer"; typeClass(clas); clas = "Łowca"; select(this);})           //change
                    
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
                    
                    elfAssasin.addEventListener("click", function(){clas = "Assasin"; typeClass(clas); clas = "Zabójca"; select(this);})          //change
                    elfArcher.addEventListener("click", function(){clas = "Archer"; typeClass(clas); clas = "Łucznik"; select(this);})            //change
                    elfSorcerer.addEventListener("click", function(){clas = "Sorcerer"; typeClass(clas); clas = "Czarodziej"; select(this);})     //change
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
                    
                    helfWarrior.addEventListener("click", function(){clas = "Warrior"; typeClass(clas); clas = "Wojownik"; select(this);})         //change
                    helfAssasin.addEventListener("click", function(){clas = "Assasin"; typeClass(clas); clas = "Zabójca"; select(this);})          //change
                    helfArcher.addEventListener("click", function(){clas = "Archer"; typeClass(clas); clas = "Łucznik"; select(this);})            //change
                    helfSorcerer.addEventListener("click", function(){clas = "Sorcerer"; typeClass(clas); clas = "Czarodziej"; select(this);})     //change
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
                    
                    centaur.addEventListener("click", function(){clas = "Centaur"; typeClass(clas); clas = "Centaur"; select(this);})         //change
                    faun.addEventListener("click", function(){clas = "Faun"; typeClass(clas); clas = "Faun"; select(this);})                  //change
                    minotaur.addEventListener("click", function(){clas = "Minotaur"; typeClass(clas); clas = "Minotaur"; select(this);})      //change
                    werewolf.addEventListener("click", function(){clas = "Werewolf"; typeClass(clas); clas = "Wikołak"; select(this);})       //change
                    werecat.addEventListener("click", function(){clas = "Werecat"; typeClass(clas); clas = "Kotołak"; select(this);})         //change
                   
                }
            })

        }
        else if (stageNumber == 0.4) {
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
            
            man.addEventListener("click", function(){sex = "Man"; /*NEXT STAGE*/ sex = "Mężczyzna"; select(this);})
            woman.addEventListener("click", function(){sex = "Woman"; /*NEXT STAGE*/ sex = "Kobieta"; select(this);})
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

function select(t) {
    const inputs = document.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++)
        inputs[i].style.borderColor = "#0085ff";
    
    t.style.borderColor = "yellow";
}