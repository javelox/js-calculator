var pantalla = document.querySelector('#pantalla');
var simbolo = document.querySelectorAll('.simbolo');

for (item of simbolo) {
    item.addEventListener('click', (e) => {
        simbolotext = e.target.outerText;
        console.log(e)

        if (simbolotext == '×') {
            simbolotext = '*';
        }

        if (simbolotext == '÷') {
            simbolotext = '/';
        }
        pantalla.value += simbolotext;
    });
}
//funcion para sacar el seno

function sin() {
    pantalla.value = Math.sin(pantalla.value);
}

//funcion para sacar el coseno
function cos() {
    pantalla.value = Math.cos(pantalla.value);
}

//funcion para sacar tangente
function tan() {
    pantalla.value = Math.tan(pantalla.value);
}

//funcion para elevar al cuadrado un numero 
function pow() {
    pantalla.value = Math.pow(pantalla.value, 2);
}

//funcion para sacar raiz cuadrada
function raiz() {
    pantalla.value = Math.sqrt(pantalla.value, 2);
}

//funcion para sacar el logaritmo de un numero
function log() {
    pantalla.value = Math.log(pantalla.value);
}

//funcion para dale valor a pi
function pi() {
    pantalla.value = Math.PI;
}

//funcion para darle valor al numero e
function e() {
    pantalla.value = 2.71828182846;
}

//funcion para sacar factorial
function fact() {
    var i, num, f;
    f = 1
    num = pantalla.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    pantalla.value = f;
}

//funcion para eliminar digitos uno por uno
function borrardigitos() {
    pantalla.value = pantalla.value.substr(0, pantalla.value.length - 1);
}