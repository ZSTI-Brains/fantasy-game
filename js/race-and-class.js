var text= true;

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
        description.innerText = "Zwierzoludzie";
    else if (r == "Orc") 
        description.innerText = "Orkowie to najbardziej znienawidzone istoty na kontynencie, każdy inna rasa pała do nich nienawiścią. Orkowie nie mają ziem na których mogliby się osiedlić, dlatego najczęściej wybierają walkę pod rozkazami ludzkiego czy elfiego pana. Ci bez przynależności spotykają się najczęściej z linczem. Mimo tak wielu wad są silni i znacznie bardziej wytrzymali.";

    
    container.appendChild(description);
    
    const inputNext = document.createElement("input");
    inputNext.setAttribute("type", "button");
    inputNext.setAttribute("value", "Dalej");
    
    container.appendChild(inputNext);
    
    inputNext.addEventListener("click", nextStage);
}
