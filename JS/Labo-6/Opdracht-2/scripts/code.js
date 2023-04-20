const setup = () => {
    let lis = document.querySelectorAll("ul > li");
    for(let i = 0; i < lis.length; i++){
        lis[i].setAttribute("class", "listitem")
    }
    let img = document.createElement("img");
    img.setAttribute("src", "images/hond.jpg")
    document.querySelector("body").appendChild(img);
}
window.addEventListener("load", setup);