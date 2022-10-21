let userInput; //= prompt("Piedra, papel o tijera?")
let pcInput; //= Math.floor(Math.random() * 3) //Con el math.floor hacemos que el numero sea entero, es decir, sin decimales.
let pregunta = "si"

//Establecemos que:
//Piedra: 0
//Papel: 1
//Tijera: 2


while(pregunta == "si"){
    userInput = prompt("Piedra, papel o tijera?")
    pcInput = Math.floor(Math.random() * 3)
    while (userInput == ""){
    alert("Error, debe ingresar una opcion")
    userInput = prompt("Piedra, papel o tijera?")
} 

//Si elegimos piedra:
if(userInput == "piedra" && pcInput == 0){
    alert("EMPATE")
}else if(userInput == "piedra"  && pcInput == 1){
    alert("PERDISTE")
}else if(userInput == "piedra" && pcInput == 2){
    alert("GANASTE")
}

//Si elegimos papel:
if(userInput == "papel" && pcInput == 0){
    alert("GANASTE")
}else if(userInput == "papel" && pcInput == 1){
    alert("EMPATE")
}else if(userInput == "papel" && pcInput == 2){
    alert("PERDISTE")
}

//Si elegimos tijera:
if(userInput == "tijera" && pcInput == 0){
    alert("PERDISTE")
}else if(userInput == "tijera" && pcInput == 1){
    alert("GANASTE")
}else if(userInput == "tijera" && pcInput == 2){
    alert("EMPATE")
}

alert("Elegiste: " + userInput)
alert("La computadora eligio: " + pcInput)
pregunta = prompt("Quiere seguir jugando?")
}


