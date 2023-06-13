import { supabase } from "../Controller/conexion.js";
import { contenedorPaquetes, crearContenedor, serviciosPaquete } from "../Controller/servProveedor.js";
import { eliminarServicio } from "../Controller/ControlServicio.js"
import { eliminarPaquete } from "../Controller/ControlPaquete.js";
import { eliminarProveedor } from "../Controller/ControlProveedor.js";
import { eliminarUsuario } from "../Controller/ControlUsuario.js";
const nombreUsuario = document.getElementById('proveedor');
const empresa = document.getElementById('empresa');
const telefono1 = document.getElementById('numTel');
const correoUser = document.getElementById('email1');
const tipoUsuario = document.getElementById('tipoUsuario');
const direccion = document.getElementById('direccion');
const userPhoto = document.getElementById('perfilServ');
const img = userPhoto.querySelector('img');
const { data, error } = await supabase
  .from('Usuario')
  .select('*')
  .eq('idUsuario', localStorage.getItem('id'))

if (error) {
  console.log(error)

}
const { data: d, error1 } = await supabase
  .from('Proveedor')
  .select('*')
  .eq('idUsuario', localStorage.getItem('id'))

if (error1) {
  console.log(error1)

}

nombreUsuario.innerText = data[0].nombre;
telefono1.innerText = d[0].telefono;
correoUser.innerText = data[0].correo;
tipoUsuario.innerText = data[0].tipoUsuario;
empresa.innerText = d[0].empresa;
direccion.innerText = d[0].direccion;
img.src = data[0].fotoPerfil;

const deletProv = document.getElementById('btnDelete')
deletProv.addEventListener('click', ev=>{
  ev.preventDefault()
  console.log(deletProv);
  console.log(localStorage.getItem('idProveedor'));
  eliminarUsuario()
})

const { data: paq, error2 } = await supabase
  .from('Paquete')
  .select('*')
  .eq('idProveedor', localStorage.getItem('idProveedor'))

if (error2) {
  console.log(error2)

}
var idproveedor = localStorage.getItem('idProveedor')



let { data: serv, error3 } = await supabase
  .rpc('serviciosProveedor', {
    idproveedor
  })
if (error3) console.log(error3)
else
  if (serv != null) {

    for (let index = 0; index < serv.length; index++) {

      if (index > 0) {
        crearContenedor(index + 1)

      }
      const ser = document.getElementById(`idServicio${index + 1}`)
      ser.dataset.value = serv[index].idServicio
      const servicio = document.getElementById(`servName${index + 1}`)
      const nombr = document.getElementById(`proveedor${index + 1}`)
      const prov = document.getElementById(`proveedorServ${index + 1}`)
      const descripcion = document.getElementById(`decripcion${index + 1}`)
      const precio = document.getElementById(`precio${index + 1}`)
      // Obtener referencia al elemento
      const imgServ = document.getElementById(`imgServ${index + 1}`);

      // Asignar imagen al estilo de fondo del elemento

      nombr.innerText = data[0].nombre;
      precio.innerText = serv[index].precio;

      imgServ.style.backgroundImage = `url(${serv[index].imagenServicio})`

      descripcion.innerText = serv[index].descripcion
      prov.innerText = serv[index].empresa
      servicio.innerHTML = serv[index].nombreServicio
    }

    for (let index = 0; index < paq.length; index++) {
      if (index > 0) {
        contenedorPaquetes(index + 1)
      }
      const ser = document.getElementById(`idPaquete${index + 1}`)
      ser.dataset.value = paq[index].idPaquete
      const paquete = document.getElementById(`PaqName${index + 1}`)
      const nombr = document.getElementById(`provPaq${index + 1}`)
      const prov = document.getElementById(`proveedorPaq${index + 1}`)
      const descripcion = document.getElementById(`decripcionPaq${index + 1}`)
      const precio = document.getElementById(`precioPaq${index + 1}`)
      // Obtener referencia al elemento
      const imgServ = document.getElementById(`imgPaq${index + 1}`);

      // Asignar imagen al estilo de fondo del elemento

      nombr.innerText = data[0].nombre;
      precio.innerText = paq[index].precio;

      imgServ.style.backgroundImage = `url(${paq[index].imagen})`

      descripcion.innerText = paq[index].descripcion
      prov.innerText = serv[0].empresa
      paquete.innerHTML = paq[index].nombre
    }
  }
const editBtnsServ = document.querySelectorAll('[id^="editServ"]');
const deleteBtnsServ = document.querySelectorAll('[id^="deleteServ"]');

editBtnsServ.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    const id = this.getAttribute('id');
    const ser = document.getElementById(`idServicio${i + 1}`)
    localStorage.setItem('ServUpdate', ser.dataset.value)
    if (localStorage.getItem('tipoUsuario') == "proveedor") {

      if (localStorage.getItem('premium') == "true") {
        window.location.href = '/Views/Premium/Proveedor/editServ.html';
      } else {
        window.location.href = '/Views/User/Proveedor/editServ.html';
      }
    }

  });
});

deleteBtnsServ.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    const servicio = document.getElementById(`idServicio${i + 1}`)
    eliminarServicio(servicio.dataset.value);
    window.location.reload();

  });
});

const editBtns = document.querySelectorAll('[id^="editPaq"]');
const deleteBtns = document.querySelectorAll('[id^="deletePaq"]');

editBtns.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    const id = this.getAttribute('id');
    const ser = document.getElementById(`idPaquete${i + 1}`)
    console.log(ser.dataset.value);
    localStorage.setItem('PaqUpdate', ser.dataset.value)
    localStorage.setItem('idPaquete', ser.dataset.value)
    console.log(localStorage.getItem('idPaquete'));

    if (localStorage.getItem('tipoUsuario') == "proveedor") {

      if (localStorage.getItem('premium') == "true") {
        window.location.href = '/Views/Premium/Proveedor/editPaquete.html';
      } else {
        window.location.href = '/Views/User/Proveedor/editPaquete.html';
      }
    }

  });
});

deleteBtns.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    const servicio = document.getElementById(`idPaquete${i + 1}`)

    eliminarPaquete(servicio.dataset.value);
    window.location.reload();

  });
});