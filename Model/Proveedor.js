import { registrarProveedor, calcularEdad, cerrarSesion, modificarProveedor } from "../Controller/ControlProveedor.js";
const formulario = document.querySelectorAll('form');

const telefono = document.getElementById('telefono')
const direccion = document.getElementById('direccion')
const ciudad = document.getElementById('ciudad')
const estado = document.getElementById('estado')
const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos')
const fechaNacimiento = document.getElementById('fechaNacimiento')
const correo = document.getElementById('correo')
const password = document.getElementById('password')
const passwordConfirmed = document.getElementById('passwordConfirmed')
const tarjeta = document.getElementById('tarjeta')
const paypal = document.getElementById('paypal')
const empresa = document.getElementById('empresa')
const foto = document.getElementById('file')


formulario.forEach((boton) => {
  boton.addEventListener('submit', (event) => {
    const id = event.target.id;
    event.preventDefault();
    switch (id) {
      case 'registro':

        registrarProveedor(foto.files[0], nombre.value, apellidos.value, empresa.value, fechaNacimiento.value, telefono.value
          , direccion.value, ciudad.value, estado.value, tarjeta.value, paypal.value, correo.value, password.value, passwordConfirmed.value);
        calcularEdad(fechaNacimiento.value);

        break;
      case 'mostrar':
        console.log("Mostrar");
        break;
      case 'edicion':
        console.log("Modificar");

        modificarProveedor(empresa.value, direccion.value, ciudad.value, estado.value, tarjeta.value,
          paypal.value, telefono.value);
        setTimeout(function () {
          window.location.href = "/Views/User/Proveedor/userProfile.html";
        }, 2000);
        break;
      case 'cambiarCorreo':
        actualizarCorreo(correo.value);
        break;
      case 'cambiarPassword':
        console.log("Cambiar contraseña");
        cambiarPassword(password.value);
        break;
      case 'eliminarUsuario':
        console.log("Eliminar usuario");
        eliminarUsuario();
        break;
      case 'LogOut':
        break;
    }
  });

});


//Funcion del menu

const liElement = document.querySelectorAll('li');
console.log(liElement);
liElement.forEach((listas) => {
  listas.addEventListener('click', (e) => {
    const id = e.target.id;
    e.preventDefault();
    if (id == 'LogOut') {
      cerrarSesion();
    }
  });
})

const listMenu = document.getElementById('listMenu');
const links = listMenu.querySelectorAll('li');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Aquí puedes añadir el código que quieras para cada enlace
    switch (link.id) {
      case 'MiPerfil':
        break;
      case 'MisVentas':
        break;
      case 'Carrito':
        break;
      case 'VerEncargos':
        break;
      case 'CambiarPass':
        break;
      case '"CambiarEmail':
        break;
      case 'Favoritos':
        break;
      case 'premium':
        break;
      case 'LogOut': 
      cerrarSesion();
        break;

    }

    console.log(`Se ha pulsado el enlace ${link.innerText}`);
  });
});



