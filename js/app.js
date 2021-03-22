// Este Algoritmo va a calcular la edad de una persona para el año 2021, y va a realizar la validaciones de la Fecha.

const ANNO_ACTUAL = 2021;
let mensaje;
let edad;
let nombre;
let annoNacimientoStr;
let annoNacimiento;
const RECARGAR_MSG ="Presione F5 para recargar";

nombre = prompt("Hola, ¿Cual es tu nombre?.");
mensaje = "Hola " + nombre + ", voy a calcular tu edad para este año.";
alert(mensaje);

annoNacimientoStr = prompt("Por favor ingresa tu año de nacimiento (en Formato AAAA entre 1900 y 2021)");

annoNacimiento = Number(annoNacimientoStr); // Convierte a numero la variable, si no puede muestra NaN (Not a Number)

if (isNaN(annoNacimiento)) { // Verifica si la año es una palabra, usando la funcion isNaN (is Not a Number), si es un NaN es debido a la conversion de Number().
  alert('"' + annoNacimientoStr + '"' + " No es un numero, " + RECARGAR_MSG);   
} 
else {  
  
  if (annoNacimiento < 0) { // verifica si el año es negativo
    alert(annoNacimiento + " El año no puede se negativo, " + RECARGAR_MSG); // verifica que el año no sea negativo
  }

  else if (annoNacimiento % 1 != 0) { // Verifica si el año es decimal
    alert(annoNacimiento + " El año no puede ser un valor decimal, " + RECARGAR_MSG);
  }

  else if ((annoNacimiento < 1900) || (annoNacimiento > 2021)) { // Verifica que el año este en el rango valido
    alert(annoNacimiento + " El año esta fuera del rango valido, (1900 - 2021), " + RECARGAR_MSG); 
  }

  else { // Realiza el calculo de la edad, si la fecha es correcta.
    edad = ANNO_ACTUAL - annoNacimiento;
    mensaje = nombre + ", tu edad para este " + ANNO_ACTUAL + " sera de " + edad + " años.";
    alert(mensaje);
  }
}
