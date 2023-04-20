


const setup = () => {
    document.getElementById("target").addEventListener("click", click);
    document.getElementById("btnPlay").addEventListener("click", start)
    let global = {
        IMAGE_COUNT: 5, //aantal figuren
        IMAGE_SIZE: 48, //grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", //map van de figuren
        IMAGE_PATH_SUFFIX: ".png", //extensie van de figuren

        MOVE_DELAY: 3000, //aantal milliseconden voor een nieuwe afbeelding verschijnt

        score: 0, //aantal hits
        timeoutId: 9 //id van de timeout timer, zodat we die kunnen annuleren
    };
};

const start = () => {
    let interval = setInterval(intervalFunction, 2000);
}
const intervalFunction = (x=true) => {
    if(x){
        let image = document.getElementById("target");
        image.style.left = Math.random() * 600 + "px";
        image.style.top = Math.random() * 800 + "px";
        image.src = "images/" + Math.round(Math.random()*4) + ".png";
    }
}

const click = () => {
    if(document.getElementById("target").src === "http://localhost:63342/Tim-Mortier.github.io/JS/Labo-7/BeginSituatie_HitAnObject/images/0.png"){
        intervalFunction(false);
        alert("boem");
    }else{
        document.getElementById("hits").innerHTML++;
        intervalFunction(true);
    }

}


window.addEventListener("load", setup);


