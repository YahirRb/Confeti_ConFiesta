import { supabase } from "../Controller/conexion.js"
const nomServ = document.getElementById('servicio')
const nomProv = document.getElementById('proveedor')
const precioServ = document.getElementById('precioServ')
const cantidadServ = document.getElementById('cantidadServ')
const unidadServ = document.getElementById('unidadServ')
const btnContratar = document.getElementById('contratar');
const tarifa = document.getElementById('tarifa')

const porcentaje = 0.20;

var comision// = document.getElementById('')
var fechaActual = new Date();

const idservicio = localStorage.getItem('idServicio')
console.log(btnContratar);
let { data, error } = await supabase
    .rpc('recuperarIdServicio', {
        idservicio
    })

if (error) console.error(error)
else console.log(data)
fechaActual.setDate(fechaActual.getDate() + data[0].diasEntrega);
var fechaMinima = fechaActual.toISOString().split('T')[0];
document.getElementById("entrega").setAttribute("min", fechaMinima);
nomServ.innerText = data[0].nombreServicio
nomProv.innerText = data[0].nombre
precioServ.innerHTML = data[0].precio;
cantidadServ.innerHTML = data[0].cantidad;
unidadServ.innerText = data[0].unidad



const idusuario = localStorage.getItem('id');
let { data: user, error1 } = await supabase
    .rpc('tipoUsuario', {
        idusuario
    })

if (error1) console.error(error1)
else console.log(user[0].isPremium)

if (user[0].isPremium == true) {
    comision = data[0].precio * (porcentaje / 2);
    tarifa.innerHTML = comision;

    console.log(comision);
} else {
    comision = data[0].precio * porcentaje;
    tarifa.innerHTML = comision;
    console.log(comision);
}


console.log(localStorage.getItem('id'));
btnContratar.addEventListener('click', async e => {
    e.preventDefault();
    const fechaEntrega = document.getElementById('entrega').value;
    const direccionEntrega = document.getElementById('direccion').value;
    const descripcionEntrega = document.getElementById('descripcion').value;
    console.log(fechaEntrega);
    console.log(direccionEntrega);
    console.log(descripcionEntrega);
    if (fechaEntrega >= fechaMinima) {
        var dialog = document.getElementById("pagos");
        dialog.style.display = 'flex';
        const total = document.getElementById('totalPagar')
        total.innerHTML = data[0].precio + comision;
        const comprar = document.getElementById('btnComprar')
        console.log(comprar);
        comprar.addEventListener('click', async ev => {
            ev.preventDefault();

            const radios = document.getElementsByName('radio-group');
            let valorSeleccionado;

            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    valorSeleccionado = radios[i].value;
                    break;
                }
            }

            if (valorSeleccionado == 'paypal') {
                contratar(data[0].idProveedor, data[0].idServicio, fechaEntrega, direccionEntrega, descripcionEntrega, data[0].precio,
                    data[0].cantidad, data[0].unidad, valorSeleccionado)
            } else if (valorSeleccionado == 'mercadoPago') {
                contratar(data[0].idProveedor, data[0].idServicio, fechaEntrega, direccionEntrega, descripcionEntrega, data[0].precio,
                    data[0].cantidad, data[0].unidad, valorSeleccionado)
            } else {
                alert('Primero debe seleccionar un metodo de pago')
            }
            console.log('Valor seleccionado:', valorSeleccionado);
            console.log('comprar');

        })
        console.log('Fecha permitida');


    } else {
        alert(`No puedes seleccionar una fecha antes de ${fechaMinima}`)
    }

})

async function contratar(idProveedor, idServicio, fechaEntrega, direccionEntrega, descripcionEntrega, precio,
    cantidad, unidad, valorSeleccionado) {
    const { error } = await supabase
        .from('Contrato')
        .insert([{
            idProveedor: idProveedor, idServicio,
            idUsuario: localStorage.getItem('id'), fechaEntrega, direccionEntrega, descripcionEntrega, precio: precio,
            cantidad: cantidad, unidad: unidad, metodoPago: valorSeleccionado
        }])
    if (error) {
        console.log(error);
    }else{
        if (localStorage.getItem('tipoUsuario') == "proveedor") {
            console.log(localStorage.getItem('premium'));
           if(localStorage.getItem('premium')=="true"){
           window.location.href = '/Views/Premium/Proveedor/encargos.html';
           }else{
           window.location.href = '/Views/User/Proveedor/encargos.html';
           }
         } else if(localStorage.getItem('tipoUsuario') == "cliente"){
           if(localStorage.getItem('premium')=="true"){
             window.location.href = '/Views/Premium/Cliente/encargos.html';
             }else{
             window.location.href = '/Views/User/Cliente/encargos.html';
             }
         }
    }
}


