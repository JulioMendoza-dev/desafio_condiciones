
function consultar(){
    const input_1 = Number(document.querySelector('#input_1').value);
    const input_2 = Number(document.querySelector('#input_2').value);
    const input_3 = Number(document.querySelector('#input_3').value);
    const suma = input_1 + input_2 + input_3;

    if (suma <= 10) {
        alert('bien hecho ') + suma;
        var msg = `Ud. lleva ${suma} stickers`;
        document.getElementById('texto').innerText = msg;

    }else{
        alert('lleva demasiados stickers!  ') + suma;
        msg = 'lleva demasiados stickers!!  ' + suma;
        document.getElementById('texto').innerText = msg;
    }

}