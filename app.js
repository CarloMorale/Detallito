function moverPosicionRandom(elmt) {
    elmt.style.position = 'absolute';
    elmt.style.top = Math.random() * (window.innerHeight - elmt.offsetHeight) + 'px';
    elmt.style.left = Math.random() * (window.innerWidth - elmt.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});
btnSi.addEventListener('click', function(e) {
    alert('Sabía que aceptarías, te amo miamor');
    divModoSexo.style.display = 'block';
    const cancion = new Audio('media\\modo-hot.mp3');
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    const img = document.createElement("img")
    img.src = "media\\imagen_bob.jpg";
    //divModoSexo.innerHTML = "<h2>Callese la boca joto</h2>"
    divModoSexo.appendChild = "<h2>Callese la boca joto</h2>"
})

botones = document.getElementsByTagName("button");
console.log(botones);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
})