setCharacterInformation();

function setCharacterInformation() {
    const name = document.querySelector("#name");
    const race = document.querySelector("#race");
    const clas = document.querySelector("#class");
    const sex = document.querySelector("#sex");
    const eyes = document.querySelector("#eyes");
    const hair = document.querySelector("#hair");
    const goddes = document.querySelector("#goddes");
    
    $.ajax({
        type: "post",
        data: {},
        url: "php/character-information.php"
    })
    .done(function(response) {
        if (response !== "") {
            let info = JSON.parse(response);
            
            if(info[0].name == null)
                name.innerHTML = "???";
            else
                name.innerHTML = info[0].name;
            
            if(info[0].race == null)
                race.innerHTML = "<span class=\"tag\">Rasa:</span> ???";
            else
                race.innerHTML = "<span class=\"tag\">Rasa: </span>" + info[0].race;
            
            if(info[0].class == null)
                clas.innerHTML = "<span class=\"tag\">Klasa:</span> ???";
            else
                clas.innerHTML = "<span class=\"tag\">Klasa: </span>" + info[0].class;
            
            if(info[0].sex == null)
                sex.innerHTML = "<span class=\"tag\">Płeć:</span> ???";
            else
                sex.innerHTML = "<span class=\"tag\">Płeć: </span>" + info[0].sex;
            
            if(info[0].eyes == null)
                eyes.innerHTML = "<span class=\"tag\">Oczy:</span> ???";
            else
                eyes.innerHTML = "<span class=\"tag\">Oczy: </span>" + info[0].eyes;
            
            if(info[0].hair == null)
                hair.innerHTML = "<span class=\"tag\">Włosy:</span> ???";
            else
                hair.innerHTML = "<span class=\"tag\">Włosy: </span>" + info[0].hair;
            
            if(info[0].goddes == null)
                goddes.innerHTML = "<span class=\"tag\">Wiara:</span> ???";
            else
                goddes.innerHTML = "<span class=\"tag\">Wiara: </span>" + info[0].goddes;
        }
    })
};

