function hide(){
    document.getElementById('boxTextoDecrp').style.display = 'none';
    document.getElementById('divaux').style.display = 'block';
}


function encriptar(){
var textoOrigen = "";
var encriptado = "";
textoOrigen = document.getElementById('ingresoTexto').value;
    for (let index = 0; index < textoOrigen.length; index++) {
        if (textoOrigen[index] == 'a') {
            encriptado += 'ai';         
        } else if (textoOrigen[index] == 'e') {
            encriptado += 'enter';         
        } else if (textoOrigen[index] == 'i') {
            encriptado += 'imes';         
        } else if (textoOrigen[index] == 'o') {
            encriptado += 'ober';         
        } else if (textoOrigen[index] == 'u') {
            encriptado += 'ufat';         
        } else {
            encriptado += textoOrigen[index];
        }
    }
    return document.getElementById('textoDesencriptado').value =(encriptado); 
}

function desEncriptar(){
    var textoOrigen = "";
    var desencriptado = "";
    textoOrigen = document.getElementById('ingresoTexto').value;
        for (let index = 0; index < textoOrigen.length; index++) {
            if (textoOrigen[index] == 'a' && textoOrigen[index+1] =='i') {
                desencriptado += textoOrigen[index];
                index+=1;      
        } else if (textoOrigen[index] == 'e' && textoOrigen[index+1] == 'n') {
            desencriptado += textoOrigen[index]; 
            index+=4;    
        }else  if (textoOrigen[index] == 'i' && textoOrigen[index+1] == 'm') {
            desencriptado += textoOrigen[index];
            index+=3;
        }
        else  if (textoOrigen[index] == 'o' && textoOrigen[index+1] == 'b'){
            desencriptado += textoOrigen[index];
            index+=3;
        }else  if (textoOrigen[index] == 'u' && textoOrigen[index+1] == 'f'){
            desencriptado += textoOrigen[index];
            index+=3;
        } else {
            desencriptado += textoOrigen[index];
        }
    }
        
        return document.getElementById('textoDesencriptado').value =(desencriptado); 
    } 



function copiarTexto() {
    var copyText = document.getElementById('textoDesencriptado');
    navigator.clipboard.writeText(copyText.value);
  }