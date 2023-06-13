import { supabase } from "../Controller/conexion.js";
import { eliminarUsuario } from "../Controller/ControlUsuario.js";
const nombreUsuario = document.getElementById('nombreUsuario');

const correoUser = document.getElementById('emailUsuario');
const tipoUsuario = document.getElementById('tipoUsuario');
const userPhoto = document.getElementById('userPhoto');
const img = userPhoto.querySelector('img');
const deleteUser = document.getElementById('btnDelete')






const { data, error } = await supabase
  .from('Usuario')
  .select('*')
  .eq('idUsuario', localStorage.getItem('id'))

if (error) {
  console.log(error);

}
console.log(data);

nombreUsuario.innerText = data[0].nombre;
correoUser.innerText = data[0].correo;
tipoUsuario.innerText = data[0].tipoUsuario;
img.src = data[0].fotoPerfil;

deleteUser.addEventListener('click', ev=>{
  ev.preventDefault()
  eliminarUsuario()
})