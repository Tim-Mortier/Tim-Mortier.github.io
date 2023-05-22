const setup = () => {
    let output = document.getElementById("txtOutput");
    console.log(output.innerHTML);
    console.log(output.value);
    document.getElementById("btnWijzig").addEventListener("click", wijzig)
}

const wijzig = () => {
    let output = document.getElementById("txtOutput");
    output.innerHTML = "Welkom!";
}
window.addEventListener("load", setup);