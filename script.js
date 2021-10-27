const showOnDisplay = (result) => {
    const display = document.querySelector('#resultado');
    display.innerHTML = result;
}

function insert(click) {
    var resultado = document.getElementById('resultado').innerHTML;
    showOnDisplay(resultado + click);
}

function clean() {
    showOnDisplay("");
};

function back() {
    var numero = document.getElementById('resultado').innerHTML;
    showOnDisplay(numero.substring(0, numero.length - 1));
};

function result() {
    var resultado = document.getElementById('resultado').innerHTML;

    let textToShow = "Nada para calc...";

    if (resultado) {
        textToShow = eval(resultado)
    }

    showOnDisplay(textToShow);

};