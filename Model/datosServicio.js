
import { supabase } from "../Controller/conexion.js"
const nombreServ = document.getElementById('servName')
const direccion = document.getElementById('direccion')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio1')
const cantidad = document.getElementById('cantidad1')
const unidad = document.getElementById('unidad1')
const imgServ = document.getElementById("imgServ");
const idBoton = document.getElementById('botones1');
const btnCarrito = document.getElementById('btnCart1');
const btnContract = document.getElementById('btnContract1');


const idservicio = localStorage.getItem('idServicio')
const fotos = document.querySelectorAll('.fotoServ img');
console.log(fotos);

let { data, error } = await supabase
  .rpc('recuperarIdServicio', {
    idservicio
  })

if (error) console.error(error)
else console.log(data)
nombreServ.innerText = data[0].nombreServicio;
direccion.innerText = data[0].direccion;
descripcion.innerHTML = data[0].descripcion;
precio.innerHTML = data[0].precio;
cantidad.innerHTML = data[0].cantidad;
unidad.innerHTML = data[0].unidad;
imgServ.src = data[0].imagenServicio;
idBoton.style.display = 'block';
// seleccionar el botón
console.log(data[0].idServicio);
console.log(data[0].precio.length);
console.log(btnCarrito);

if(data[0].galeria==null){
  console.log("No hay");
}else{
data[0].galeria.forEach((element, i) => {
  console.log(element);
  fotos[i].src = element;
});}

console.log(btnContract);
if (btnCarrito == null || btnContract == null) {
 console.log('error');
} else {
  btnCarrito.dataset.value = localStorage.getItem('idServicio');
  btnContract.dataset.value = localStorage.getItem('idServicio');
  btnCarrito.addEventListener('click', ev => {
    console.log('carrito');
  })



  btnContract.addEventListener('click', () => {
    if (localStorage.getItem('tipoUsuario') == "proveedor") {

      if (localStorage.getItem('premium') == "true") {
        window.location.href = '/Views/Premium/Proveedor/contratarServ.html';
      } else {
        window.location.href = '/Views/User/Proveedor/contratarServ.html';
      }
    } else if (localStorage.getItem('tipoUsuario') == "cliente") {
      if (localStorage.getItem('premium') == "true") {
        window.location.href = '/Views/Premium/Cliente/contratarServ.html';
      } else {
        window.location.href = '/Views/User/Cliente/contratarServ.html';
      }
    } else {
      window.location.href = '/registro.html'
    }
    console.log('contrato');
  })
}
/*data[0].precio.forEach((valor, index)=>{
  const btnCarrito = document.getElementById(`btnCart${index+1}`);
  const btnContract = document.getElementById(`btnContract${index+1}`);
  btnCarrito.dataset.value = valor;
  btnContract.dataset.value = valor;
});*/

// asignar el valor mediante la propiedad value







