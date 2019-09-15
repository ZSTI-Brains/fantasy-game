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
                race.innerHTML = "<span class=\"tag\">Race:</span> ???";
            else
                race.innerHTML = "<span class=\"tag\">Race: </span>" + info[0].race;
            
            if(info[0].class == null)
                clas.innerHTML = "<span class=\"tag\">Class:</span> ???";
            else
                clas.innerHTML = "<span class=\"tag\">Class: </span>" + info[0].class;
            
            if(info[0].sex == null)
                sex.innerHTML = "<span class=\"tag\">Sex:</span> ???";
            else
                sex.innerHTML = "<span class=\"tag\">Sex: </span>" + info[0].sex;
            
            if(info[0].eyes == null)
                eyes.innerHTML = "<span class=\"tag\">Eyes:</span> ???";
            else
                eyes.innerHTML = "<span class=\"tag\">Eyes: </span>" + info[0].eyes;
            
            if(info[0].hair == null)
                hair.innerHTML = "<span class=\"tag\">Hair:</span> ???";
            else
                hair.innerHTML = "<span class=\"tag\">Hair: </span>" + info[0].hair;
            
            if(info[0].goddes == null)
                goddes.innerHTML = "<span class=\"tag\">Goddes:</span> ???";
            else
                goddes.innerHTML = "<span class=\"tag\">Goddes: </span>" + info[0].goddes;
        }
    })
};

