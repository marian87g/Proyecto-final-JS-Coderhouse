function Tarjeta (banco, numero, vencimiento, codigoSeg, limite){
    this.banco = banco;
    this.numero = numero;
    this.vencimiento = vencimiento;
    this.codigoSeg = codigoSeg;
    this.limite = limite;
}

const tarjetaA = new Tarjeta("Galicia", 1234123412341234, 256, 111, 10000)


function Usuario (nombre, nroCuenta, dineroEnCuenta){
    this.nombre = nombre;
    this.nroCuenta = nroCuenta;
    this.dineroEnCuenta = dineroEnCuenta;

    this.ingresarDinero = function(dineroIngresado){
        dineroIngresado = parseInt(prompt("Ingrese la cantidad de dinero a despositar"))
        if(dineroIngresado > 0){
            this.dineroEnCuenta += dineroIngresado;
        }
        else{
            alert("El monto debe ser superior a 0")
        }

    }
}


const usuarioA = new Usuario("Juan Gonzalez", 1234, 0)
const usuarioB = new Usuario("Maria Perez", 1235, 0)
const usuarioC = new Usuario("Martin Lopez", 1236, 0)

const listaUsuarios = [usuarioA, usuarioB, usuarioC]

let contador = 0
let listadoDeUsuarios = "Usuarios: "

function listarUsuarios(){
    for(const usuario of listaUsuarios){
        contador++
        listadoDeUsuarios += "\n" + contador + "- " + usuario.nombre
    }
    alert(listadoDeUsuarios)
}

// function Servicio (){
//     this.nombre = nombre;

// }

function menu(){
    let opcion = prompt("Menu: \n1 - Mi cuenta\n2 - Pagar\nESC- Salir")

    switch(opcion){
        case "1":
            listarUsuarios();
            operacion();
            break;
        case "2":
            pagar();
            break;
        case "ESC":
            saludar("Gracias por visitar")
            break;
        default:
            alert("Opcion Incorrecta")
            break;
    }
}

let dineroIngresado
let importeAAbonar

function saludar(saludo){
    alert(saludo + " nuestra pagina!")
}

function saldoTotal(usuario){
    alert("Su saldo total es de " + usuario.dineroEnCuenta + " pesos")

}

function pagar(){
    importeAAbonar = parseInt(prompt("Ingrese el importe a abonar"))
    if(importeAAbonar <= usuarioA.dineroEnCuenta){
        usuarioA.dineroEnCuenta -= importeAAbonar;
    }
    else{
        alert("Su saldo es insuficiente")
    }
    saldoTotal()

}

function operacion(){

    let usuarioSeleccionado = prompt("Ingrese su nombre de usuario")

    let usuarioBuscado = listaUsuarios.find(x => x.nombre == usuarioSeleccionado);

    if(usuarioBuscado){
        
        usuarioBuscado.ingresarDinero();
        saldoTotal(usuarioBuscado)

    }

}


menu()