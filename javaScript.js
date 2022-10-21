/*//let nombreUsuario = alert("Bienvenido" + prompt("Hola, que edad tienes?")) 
prompt ("Que edad tienes?" + alert("Has entrado a la hackercripta de Maye. Si cancelas, o aceptas o te sales de la pagina o incluso si destruyes tu compu, esta pagina te hackeara toda tu informacion personal XD")) 
/*let nombreUsuario = prompt ("Bienvenido, cual es tu nombre")
alert("Bienvenido " + nombreUsuario)*/
//confirm("Esta seguro que desea continuar?") //Esto es un popUp

/*let nombre = "Maye"
let edad = 29
let cumple = "19/11/1991"
let ciudad = "Maracay"
let city = "Macaray"
console.log("Tu nombre es " + nombre + " y tu edad es :" + edad + " tu cumpleaños es el :" + cumple + " Y eres de :" + ciudad + " Pero Genecio dice que eres de: " + city)
let String = "Hola carita de culo, como te va?"
String.length7*/


let nombre="Gabriela"
let profesion="Programadora"
console.log(`${nombre + " es " + profesion}`)


//Calculadora de edad
let edadUsuario = prompt ("Que edad tienes?")
diasUsuario = (edadUsuario * 365)
//alert ("Tu edad equivalente en dias es de: " + diasUsuario + " dias")

//suma de valores
/*let num1 = prompt("Ingrese un primer numero")
let num2 = prompt("Ingrese un segundo numero")
//let resultado = num1 + num2
resultado =parseInt(num1)+parseInt(num2)
alert ("El resultado de la suma es de: " + resultado)*/

//¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!
let edadMaxima = prompt ("Cuantos años crees q viviras?")
diasMaximos = (edadMaxima * 365) //esta cuenta me calcula los dias que equivalen a la edad maxima
let snackFav = prompt ("Cual es tu snack favorito?")
let precioSnack = prompt ("Cual es el precio aproximado de tu snack favorito?")
let snackPorDia = prompt ("Cuantos " + snackFav + " puedes comer por dia?")
diferenciaEdad = parseInt(diasMaximos) - parseInt(diasUsuario)
cuentaSnack = diferenciaEdad * snackPorDia
gastoSnackDiario = (snackPorDia * precioSnack)
gastoSnackDePorVida = diferenciaEdad * gastoSnackDiario
alert ("Asumiendo que te quedan " + diferenciaEdad + " dias de vida y asumiendo que puedes comer " +  snackPorDia + " "  +  snackFav  + " " + " por dia, entonces comeras  " +  cuentaSnack + " " + snackFav +  " " + "por el resto de tu vida y gastaras " + "$"+gastoSnackDePorVida + " " + "el resto de tu vida")

