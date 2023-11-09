String.prototype.replaceAt=function(index, character) { return this.substr(0,index) + character + this.substr(index+character.lenght);}
const palabras = ['abrir', 'dudar', 'pedir', 'agarrar', 'durar', 'pensar', 'ahorrar', 'elegir', 'perder', 'almorzar', 'enamorarse',	'perdonar',
'amar', 'entender', 'poder', 'apagar', 'escribir', 'preferir', 'aprender', 'escuchar', 'preguntar', 'bajar', 'esperar',	'prender', 'barrer', 'estar', 'prometer', 
'beber', 'estudiar', 'querer', 'buscar', 'existir', 'recomendar', 'cambiar', 'ganar', 'recordar', 'caminar', 'gobernar', 'regalar', 'cantar', 'guardar',	
'reir', 'cenar', 'gustar', 'resolver', 'cerrar', 'haber', 'responder', 'cocinar', 'hablar',	'saber', 'omenzar', 'hacer', 'saludar', 'comer', 'indicar',	'sentir',
'comparar', 'invitar', 'compartir', 'ir', 'soler', 'comprar', 'jugar', 'subir', 'conducir', 'lavar', 'suceder', 'conocer', 'leer', 'tener', 'contar',	
'limpiar', 'terminar',  'conversar', 'llamar', 'trabajar',  'copiar', 'llevar', 'traer', 'creer', 'llover', 'usar', 'dar', 'mirar', 
'utilizar', 'decir', 'necesitar', 'venir',  'desayunar', 'oir',	'ver', 'despertarse', 'olvidar', 'viajar', 'dirigir', 'pagar', 'visitar', 'dormir',	'parar','vivir']
    

const palabras = palabras[Math.floor(Math.random()*palabras.length)];

const palabraConGuiones = palabra.replace(/./g, "_ ");
document.querySelector('#output').innerHTML = palabraConGuiones;

document.querySelector("#calcular").addEventListener("click", () =>{
  
    const letra = document.querySelector("#letra").value;
    let haFallado = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }
    }
    if(hafallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.
        backgroundPosition = -(307*contadorFallos) + 'px 0'
        if(contadorFallos == 4){
            alert("perdiste el juego")
        }
    }else{
        if(palabraConGuiones.indexOf('_') <0){
             document.querySelector('#ganador').style-display = 
             'flex';

        }
    }




    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();

} );



















