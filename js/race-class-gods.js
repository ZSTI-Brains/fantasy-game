var text = true;
var text2 = true; 
var text3 = true; 

function typeRace(r) {
    const container = document.querySelector("#choose-container");
    if (text == false) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
    }
    
    text = false;
    
    const description = document.createElement("p");
    description.classList.add("description");
    if (r == "Human" || r == "Człowiek")
        description.innerText = "Ludzie są dominującą rasą na kontynencie, chodź jest ich niewiele więcej od elfów. Najlepsi szermierze w Orme to właśnie oni. Mimo iż większość to wojownicy, nie brakuje łuczków, skrytobójców. Największą wadą rasy ludzkiej jest brak umiejętności używania magii, którą utracili setki lat temu.";
    else if (r == "Elf")
        description.innerText = "Elfy są drugą pod względem liczebnością rasą. To co ich najbardziej wyróżnia w przeciwieństwie od ludzi to możliwość używania magii, która w ludzkich krwiach przestała płynąć z początkiem powstania Orme. Natomiast elfickie komanda łucznicze słyną z swoich umiejętności strzeleckich.";
    else if (r == "Half-Elf" || r == "Półelf") 
        description.innerText = "Półelfy to najdziwniejsze istoty, przez swą mieszaną krew. Są z nich za równo dobrzy magowie jak i wojownicy jednak najczęściej trudnią się sztuce skrytobójczej, jako zabójcy do wynajęcia, mimo iż nie są darzeni zbytnim szacunkiem, to nikt nie próbuje wchodzić im w drogę.";
    else if (r == "Beastman" || r == "Zwierzoczłek") 
        description.innerText = "Zwierzoludzie trudno jest spotkać na kontynencie, od czasu wojen Ormiańskich czy samego buntu zwierzoludzi nie ostało ich się za wiele, szczególnie na kontynencie. Są bardziej uważane za relikty, gdy któryś z nich zjawi się w mieście, przyciąga uwagę niezliczonych gapiów. Zwierzoludzie to bardzo ogólna nazwa opisująca zarówno centaury, fauny, minotaury, kotołaki czy wilkołaki które w dzień przypominają ludzi a w nocy przemieniają się w straszliwą bestię.";
    else if (r == "Orc" || r == "Ork") 
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
    if (c == "Assasin" || c == "Zabójca") { //Human & Elf & Half Elf
        description.innerHTML = "Zabójcy to najczęściej pół elfy, którzy wybierają to profesje ze względu na swoją rasę. Jednak nie brakuje również w tym fachu ludzi czy elfów, jednak umiejętnościami nie dorównują mieszańcom.";
    }
    else if (c == "Archer" || c == "Łowca" || c == "Łucznik") { //Human & Elf & Half Elf
        description.innerHTML = "Sława elfich strzelców sięga poza kontynent, aż na samą wyspę, ich celność nie zna granic. Natomiast ludzcy strzelcy także są dobrzy, jednak wolą gdy nazywa się ich łowcami. A samych pół elfich strzelów jest tak mało że z łatwością można było ich policzyć.";
    }
    else if (c == "Sorcerer" || c == "Czarodziej") { //Elf & Half Elf
        description.innerHTML = "Najbardziej potężną bronią w Orme są czarodzieje, o ile znają zaklęcie. Ze względu na potrzebę magicznej krwi w żyłach, magami są tylko elfy lub pół elfy zwane mieszańcami. Podobno na wyspie można znaleźć jeszcze ludzkich magów, ale to tylko plotki. Jednak Orme dawno nie widziało człowieka czarodzieja.";   
    }
    else if (c == "Warrior" || c == "Wojownik") { //Human & Half Elf
        description.innerHTML = "Wojownicy są najbardziej szanowani w Orme, oczywiście jeśli są ludźmi. Wśród pół elfów również znajdują się wybitni wojownicy, jednak jest ich znacznie mniej.";   
    }
    else if (c == "Centaur") {
        description.innerHTML = "Centaury, kiedyś gdy dysponowałeś kawalerią centaurów, nie miałeś sobie równych, jednak tych czworonogów zostało zbyt mało aby stworzyć z nich armię. Jednak prędzej oni sami by się nie zgodzili, było już zbyt dużo rozlewów krwi z udziałem zwierzoludzi. Te istoty są do dosyć duże i trudno im się ukryć, wielkość też ma swoje zalety. Są naprawdę silne, siłą dorównują nawet samym orką.";
    }
    else if (c == "Faun") {
        description.innerHTML = "Faun wyróżnia szybkość i biegłość w władaniu bronią. Podczas buntu to oni wyrządzili największe krzywdy innym rasą, za co najbardziej zostali wymordowani spośród wszystkich innych zwierzoludzi. Często walczą w zbroi która specjalnie dopasowana prawie w ogóle ich nie spowalnia.";
    }
    else if (c == "Minotaur") {
        description.innerHTML = "Minotaury najbardziej ze zwierzoludzi nie są podobni do ludzkich istot, ich głowa przypomina byczą, a reszta ciała mają pokryte sierścią. Duża siła i wytrzymałość, pozwalają na walkę z wymagającymi przeciwnikami. Jednak są słabi w walki na miecze, dlatego preferują wielkie topory.";
    }
    else if (c == "Werewolf" || c == "Wikołak") {
        description.innerHTML = "Wilkołaki w pół bestie w pół istoty ludzkie, kiedy księżyc jest w pełni przemieniają się w krwiożercze monstrum, maszynę do zabijania. Aby zaspokoić swój głód wybijają nawet całe wioski. Tak krwiożercze monstrum nie może się narodzić, są to normalni ludzie na których została rzucona klątwa, której nie łatwo jest się pozbyć. Dużą wadą wilkołaków jest mała odporność na odniesione ranę, wskutek zadania srebrnym mieczem czy bronią wykonaną z tego metalu.";
    }
    else if (c == "Werecat" || c == "Kotołak") {
        description.innerHTML = "Kotołaki to istoty posiadające w swoim wyposażeniu na stałe ostre jak brzytwa pazurki. Większość ich ciała jest pokryta sierścią, tylko głowa która zachowała swój ludzki wygląd, oczywiście nie liczą kocich uszów. Są to naprawdę szybkie i zwinne istoty, posiadające przy sobie zawsze zabójczą broń.";
    }
    else if (c == "Barbarian" || c == "Barbażyńca") { 
        description.innerText = "Orkowie barbarzyńcy zwykle walczą aby, w sumie to kto ich wie, walczą aby walczyć. Mówi się iż przybyli z innego świata, jednak przegrali walkę z rasą ludzką. Ci co mieszkają na kontynencie to zapewne ich potomkowie, którzy zapomnieli o swych przodkach i próbują po prostu przeżyć.";
    }
    else if (c == "Black Magician" || c == "Czarnoksiężnik")  {
        description.innerText = "Kiedykolwiek widziałeś czarnoksiężnika Orka, ja też nie, ale na pewno słyszałeś o zakonie Orków którzy nie utracili umiejętności magicznych i pamiętają prastare wydarzenie. Podobno nie potrafią władać mieczem, ale ich bronią jest jedynie magia, tak samo jak elfich czarodziei.";
    }
    
    container.appendChild(description);
    
    const inputNext = document.createElement("input");
    inputNext.setAttribute("type", "button");
    inputNext.setAttribute("value", "Dalej");
    
    container.appendChild(inputNext);
    
    inputNext.addEventListener("click", nextStage);
}

function typeGods(g) {
    const container = document.querySelector("#choose-container");
    if (text3 == false) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
    }
    
    text3 = false;
    
    const description = document.createElement("p");
    description.classList.add("description");
    if(g == "Starzy Bogowie") {
        description.innerHTML = "Starzy Bogowie są głównie wyznawani w gronie elfów, lecz nie brakuje ludzi którzy ślą do nich swe modły. Wyznawcy starych bogów nie posiadają głównych miejsc w którym się zbierają i modlą, jednak mają swoich kapłanów, których na prawdę jest trudno rozróżnić nie będąc wyznawcą.";
    }
    else if(g == "Czerwona Bogini"){
        description.innerHTML = "Wiara w Czerwoną Boginie występuje najczęściej w gronie zwierzoludzi, którzy czczą ją ponad wszystkie inne rasy. Utożsamiają ją z kobietą o wyglądzie sukuba o przepięknej urodzie, pokrytej czerwoną skórą oraz błyszczących czerwonych rogach.";
    }
    else if(g == "Trójca"){
        description.innerHTML = "Trójca to wiara mająca za Bogów trzech braci bliźniaków: Adyna, Aryna, Ahyna. Jest dominująca wiarą na kontynencie, wyznawcy modlą się w potężnych świątynia, często można spotkać wojowników którzy zabijają w imię jednego za trzech bogów.";
    }
    else if(g == "Ateizm"){
        description.innerHTML = "Czy uwżasz że Bóg istnieje?<br>Nie?<br>No to jesteś ateistą.";
    }
    
    container.appendChild(description);
    
    const inputNext = document.createElement("input");
    inputNext.setAttribute("type", "button");
    inputNext.setAttribute("value", "Dalej");
    
    container.appendChild(inputNext);
    
    inputNext.addEventListener("click", nextStage);
}


