function myFunction() {
    var x, input, suma, text, precio;
    x = document.getElementById("num1").value;
    input = document.querySelector('#colorido');
    precio = 2500000
    if (isNaN(x)) {
        text = "Es necesarios introducir un número válido";
    } else {
        //si no ponemos parseFloat concatenaría x con y  
        suma = parseFloat(x) * parseFloat(precio);
        text = new Intl.NumberFormat('de-DE').format(suma);
        
    }

    cantidad = document.querySelector("#cantidad")
    cantidad.innerHTML = "Cantidad " + x


    document.getElementById("multiplicando").innerHTML = "Total $" + text;
    circulo = document.querySelector('.dot')
    circulo.style.backgroundColor = input.value;
}  