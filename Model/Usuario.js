import {
  registrarUsuario, calcularEdad, iniciarSesion,
  mostrarDatosUsuario, actualizarCorreo, cambiarPassword,
  cerrarSesion, eliminarUsuario, modificarUsuario
} from "../Controller/ControlUsuario.js";


import { supabase } from "../Controller/conexion.js";
console.log("hola");
console.log(localStorage.getItem('premium'));
console.log(localStorage.getItem('tipoUsuario'));
/*const form = document.getElementById('registro');
  form.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log("sdds");
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const passwordConfirmed = document.getElementById('passwordConfirmed').value;  
  registrarUsuario(nombre,apellidos,fechaNacimiento,
    correo,password,passwordConfirmed);
    calcularEdad(fechaNacimiento);


})*/

/*
const botonIniciarSesion = document.getElementById('sesion');
botonIniciarSesion.addEventListener('click', async (event) => {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();
  console.log("Hola");
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  iniciarSesion(correo,password);
  // Aquí puedes agregar tu código para iniciar sesión en Supabase
  // por ejemplo, puedes llamar a una función de inicio de sesión

});*/

const formulario = document.querySelectorAll('form');

const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const passwordConfirmed = document.getElementById('passwordConfirmed');
const fotoPerfil = document.getElementById('file');
let cor;
formulario.forEach((boton) => {
  boton.addEventListener('submit', (event) => {
    const id = event.target.id;
    event.preventDefault();

    if (id == 'login') {


      iniciarSesion(correo.value, password.value);

      localStorage.setItem('correo', correo.value);

    }


    if (id == 'registro') {

      registrarUsuario(fotoPerfil.files[0], nombre.value, apellidos.value, fechaNacimiento.value,
        correo.value, password.value, passwordConfirmed.value);
      calcularEdad(fechaNacimiento.value);

    }
    if (id == "mostrar") {
      const tabla = document.getElementById('tabla');


      mostrarDatosUsuario(tabla);
    }

    if (id == "modificar") {

    }
    switch (id) {
      /*case 'login':
        console.log("Login");
        break;*/
      /*case 'signinClient':
        console.log("SignIn");
        break; */
      /*case 'registrar':
        console.log("Mostrar");
        break;*/
      case 'mostrar':
        console.log("Mostrar");
        break;
      case 'edicion':
        console.log("Modificar");
        //var nombre = "yahir";
        //var apellidos= "Rodriguez Barrios"
        modificarUsuario(fotoPerfil.files[0], nombre.value, apellidos.value, fechaNacimiento.value);
        break;
      case 'cambiarCorreo':
        actualizarCorreo(correo.value);
        break;
      case 'cambiarPwd':
        cambiarPassword(password.value);
        break;
      case 'eliminarUsuario':
        console.log("Eliminar usuario");
        eliminarUsuario();
        break;

    }
  });

});

const liElement = document.querySelectorAll('li');
liElement.forEach((listas) => {
  listas.addEventListener('click', async (e) => {
    const id = e.target.id;
    e.preventDefault();
    switch (id) {
      case 'LogOut':
        cerrarSesion();
        break;
      case 'perfil':
        window.location.href = '/Views/User/Cliente/userProfile.html';
        const nombreUsuario = document.getElementById('nombreUsuario');
        const telefono = document.getElementById('numUsuario');
        const correoUser = document.getElementById('emailUsuario');
        const tipoUsuario = document.getElementById('tipoUsuario');
        const { data, error } = await supabase
          .from('Usuario')
          .select('*')
          .eq('idUsuario', localStorage.getItem('id'))

        if (error) {
          console.log(error);
          return;
        }

        nombreUsuario.innerText = data[0].nombre;
        correoUser.innerText = data[0].correo;
        tipoUsuario.innerText = data[0].tipoUsuario;
        break;
    }

  });
})

