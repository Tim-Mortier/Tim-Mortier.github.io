const setup = () => {
    document.getElementById("btnGo").addEventListener("click", go);
    restore();
}
window.addEventListener("load", setup);

const go = () => {
    let input = document.getElementById("commandoInput").value;

    let controle = input.match("\/[tygi]{1} [a-z]*");
    if(controle != null){
        let zoek = input.slice(3);
        let type = input.slice(1,2);
        let url = getLink(type, zoek);
        window.open(url);
        createCardAndAppend()
    } else {
        window.alert("invalid command");
    }
}

let getLink = (type, zoek) => {
    let url;
    let title;
    switch (type) {
        case "t":
            url = "https://twitter.com/hashtag/" + zoek;
            title = "twitter";
            createCardAndAppend(title, zoek, url);
            store(title, zoek, url);
            return url;
        case "y":
            url = "https://youtube.com/results?search_query=" + zoek;
            title = "youtube";
            createCardAndAppend(title, zoek, url);
            store(title, zoek, url);
            return url;
        case "g":
            url = "https://www.google.com/search?q=" + zoek;
            title = "google";
            createCardAndAppend(title, zoek,url);
            store(title, zoek, url);
            return url;
        case "i":
            url = "https://www.instagram.com/explore/tags/" + zoek + "/";
            title = "instagram";
            createCardAndAppend(title, zoek, url);
            store(title, zoek, url);
            return url;
    }
}

const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card", title);
    card.classList.add(title.toLowerCase()+"-card");

    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let linkGo = createLinkButton(url, "card-button");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");

    row.appendChild(col4);
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};


const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text))
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

const store = (title, text, url) => {
    let hJSON = {
        title: title,
        text: text,
        url:  url
    };
    let hString = JSON.stringify(hJSON);

    let history;
    let historyJSON = localStorage.getItem("labo-10.history");
    if(historyJSON === null){
        history = [];
    } else {
        history = JSON.parse(historyJSON);
    }
    history.push(hString);
    localStorage.setItem("labo-10.history", JSON.stringify(history));
}

const restore = () => {
    let history = localStorage.getItem("labo-10.history");
    let historyJSON = JSON.parse(history);
    //console.log("succes");
    for(let i = 0; i < historyJSON.length; i++){
        console.log(historyJSON[i].title);
        createCardAndAppend(historyJSON[i].title, historyJSON[i].text, historyJSON[i].url);
    }
}