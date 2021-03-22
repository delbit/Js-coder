// Este Algoritmo va a calcular la edad de una persona para el año 2021.

const ANNO_ACTUAL = 2021;
let mensaje;
let edad;
let nombre;
let annoNacimiento;

nombre = prompt("Hola, ¿Cual es tu nombre?.");
mensaje = "Hola " + nombre + ", voy a calcular tu edad para este año.";
alert(mensaje);

annoNacimiento = prompt("Por favor ingresa tu año de nacimiento (en Formato AAAA)");
annoNacimiento = parseInt(annoNacimiento, 10);
edad = ANNO_ACTUAL - annoNacimiento;

mensaje = nombre + ", tu edad para este " + ANNO_ACTUAL + " sera de " + edad + " años.";
alert(mensaje);
