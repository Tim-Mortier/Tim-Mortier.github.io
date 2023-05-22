const setup = () => {
    document.getElementById("btnSubstring").addEventListener("click", substring);
}
const substring = () => {
    let begin = document.getElementById("nmbBegin").value;
    let eind = document.getElementById("nmbEind").value;
    let input = document.getElementById("txtInput").value;
    let output = input.substring(begin, eind);

    document.getElementById("spanOutput").innerHTML = output;

}
window.addEventListener("load", setup);