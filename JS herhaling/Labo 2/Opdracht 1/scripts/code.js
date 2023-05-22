const setup = () => {
    let alert = window.alert("test");
    console.log(alert);
    let confirm = window.confirm("test");
    console.log(confirm);
    console.log(prompt("prompt"))
}
window.addEventListener("load", setup);