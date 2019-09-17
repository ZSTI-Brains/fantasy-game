var text = true;
var text2 = true; 

function typeRace(r) {
    const container = document.querySelector("#choose-container");
    if (text == false) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
    }
    
    text = false;
    
    const description = document.createElement("p");
    description.classList.add("description");
    if (r == "Human")
        description.innerText = "Ludzie są dominującą rasą na kontynencie, chodź jest ich niewiele więcej od elfów. Najlepsi szermierze w Orme to właśnie oni. Mimo iż większość to wojownicy, nie brakuje łuczków, skrytobójców. Największą wadą rasy ludzkiej jest brak umiejętności używania magii, którą utracili setki lat temu.";
    else if (r == "Elf")
        description.innerText = "Elfy są drugą pod względem liczebnością rasą. To co ich najbardziej wyróżnia w przeciwieństwie od ludzi to możliwość używania magii, która w ludzkich krwiach przestała płynąć z początkiem powstania Orme. Natomiast elfickie komanda łucznicze słyną z swoich umiejętności strzeleckich.";
    else if (r == "Half-Elf") 
        description.innerText = "Półelfy to najdziwniejsze istoty, przez swą mieszaną krew. Są z nich za równo dobrzy magowie jak i wojownicy jednak najczęściej trudnią się sztuce skrytobójczej, jako zabójcy do wynajęcia, mimo iż nie są darzeni zbytnim szacunkiem, to nikt nie próbuje wchodzić im w drogę.";
    else if (r == "Beastman") 
        description.innerText = "Zwierzoludzie trudno jest spotkać na kontynencie, od czasu wojen Ormiańskich czy samego buntu zwierzoludzi nie ostało ich się za wiele, szczególnie na kontynencie. Są bardziej uważane za relikty, gdy któryś z nich zjawi się w mieście, przyciąga uwagę niezliczonych gapiów. Zwierzoludzie to bardzo ogólna nazwa opisująca zarówno centaury, fauny, minotaury, kotołaki czy wilkołaki które w dzień przypominają ludzi a w nocy przemieniają się w straszliwą bestię.";
    else if (r == "Orc") 
        description.innerText = "Orkowie to najbardziej znienawidzone istoty na kontynencie, każdy inna rasa pała do nich nienawiścią. Orkowie nie mają ziem na których mogliby się osiedlić, dlatego najczęściej wybierają walkę pod rozkazami ludzkiego czy elfiego pana. Ci bez przynależności spotykają się najczęściej z linczem. Mimo tak wielu wad są silni i znacznie bardziej wytrzymali.";

    
    container.appendChild(description);
    
    const inputNext = document.createElement("input");
    inputNext.setAttribute("type", "button");
    inputNext.setAttribute("value", "Dalej");
    
    container.appendChild(inputNext);
    
    inputNext.addEventListener("click", nextStage);
}

function typeClass(c) {
    const container = document.querySelector("#choose-container");
    if (text2 == false) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
    }
    
    text2 = false;
    
    const description = document.createElement("p");
    description.classList.add("description");
    if (c == "Assasin") { //Human & Elf & Half Elf
        description.innerHTML = "Zabójcy to najczęściej pół elfy, którzy najczęściej wybierają to profesje ze względu na swoją rasę. Jednak nie brakuje również w tym fachu ludzi czy elfów, jednak umiejętnościami nie dorównują mieszańcom.";
    }
    else if (c == "Archer") { //Human & Elf & Half Elf
        description.innerHTML = "Sława elfich strzelców sięga poza kontynent, aż na samą wyspę, ich celność nie zna granic. Natomiast ludzcy strzelcy także są dobrzy, jednak wolą gdy nazywa się ich łowcami. A samych pół elfich strzelów jest tak mało że z łatwością można było ich policzyć.";
    }
    else if (c == "Sorcerer") { //Elf & Half Elf
        description.innerHTML = "Najbardziej potężną bronią w Orme są czarodzieje, o ile znają zaklęcie. Ze względu na potrzebę magicznej krwi w żyłach, magami są tylko elfy lub pół elfy zwane mieszańcami. Podobno na wyspie można znaleźć jeszcze ludzkich magów, ale to tylko plotki. Jednak Orme dawno nie widziało człowieka czarodzieja.";   
    }
    else if (c == "Warrior") { //Human & Half Elf
        description.innerHTML = "Wojownicy są najbardziej szanowani w Orme, oczywiście jeśli są ludźmi. Wśród pół elfów również znajdują się wybitni wojownicy, jednak jest ich znacznie mniej.";   
    }
    else if (c == "Centaur") {
        description.innerHTML = "Centaury, kiedyś gdy dysponowałeś kawalerią centaurów, nie miałeś sobie równych, jednak tych czworonogów zostało zbyt mało aby stworzyć z nich armię. Jednak prędzej oni sami by się nie zgodzili, było już zbyt dużo rozlewów krwi z udziałem zwierzoludzi. Te istoty są do dosyć duże i trudno im się ukryć, wielkość też ma swoje zalety. Są naprawdę silne, siłą dorównują nawet samym orką.";
    }
    else if (c == "Faun") {
        description.innerHTML = "Faun wyróżnia szybkość i biegłość w władaniu bronią. Podczas buntu to oni wyrządzili największe krzywdy innym rasą, za co najbardziej zostali wymordowani spośród wszystkich innych zwierzoludzi. Często walczą w zbroi która specjalnie dopasowana prawie w ogóle ich nie spowalnia.";
    }
    else if (c == "Minotaur") {
        description.innerHTML = "Minotaur";
    }
    else if (c == "Werewolf") {
        description.innerHTML = "Wikołak";
    }
    else if (c == "Werecat") {
        description.innerHTML = "Kotołak";
    }
    
    container.appendChild(description);
    
    const inputNext = document.createElement("input");
    inputNext.setAttribute("type", "button");
    inputNext.setAttribute("value", "Dalej");
    
    container.appendChild(inputNext);
    
    inputNext.addEventListener("click", nextStage);
}
