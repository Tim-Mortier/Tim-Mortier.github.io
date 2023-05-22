const setup = () => {
    document.getElementById("btnSend").addEventListener("click", print);
}
const print = () => {
    let input = document.getElementById("txtInput").value;
    let output = ""
    for(let i = 0; i < input.length; i++){
        output += input[i];
        if(i !== input.length -1){
            output += " ";
        }
    }
    console.log(output);
}
window.addEventListener("load", setup);