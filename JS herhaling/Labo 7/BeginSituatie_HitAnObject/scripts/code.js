let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    document.getElementById("target").addEventListener("click", click);
    setInterval(move, global.MOVE_DELAY);
};

const click = () => {
    let target = document.getElementById("target");
    if(target.src.slice(95) !== global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX){
        move();
        global.score++;
    } else {
        window.alert("lost with score of:" + global.score);
    }

}
const move = () => {
    console.log("move");
    let target = document.getElementById("target");
    let playfield = document.getElementById("playField");

    let positionLeft = Math.round(Math.abs(Math.random() * 600 - global.IMAGE_SIZE));
    target.style.left = positionLeft + "px";

    let positionTop = Math.round(Math.abs(Math.random() * 800 - global.IMAGE_SIZE));
    target.style.top = positionTop + "px";

    target.src = global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * 5) + global.IMAGE_PATH_SUFFIX;
}




window.addEventListener("load", setup);


