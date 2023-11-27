
function pass(){
const input_1 = (document.querySelector('#input_1').value);
const input_2 = (document.querySelector('#input_2').value);
const input_3 = (document.querySelector('#input_3').value);
const concat = input_1 + input_2 + input_3;


    if(concat == "911"){
        var mensaje = 'password 1 correcto';
        document.getElementById('texto').innerText = mensaje;    
    }
    else if (concat == "714"){
        var mensaje = 'password 2 correcto';
        document.getElementById('texto').innerText = mensaje;
    }     
    else{
        var mensaje = 'password  incorrecto';
        document.getElementById('texto').innerText = mensaje;
    }
}