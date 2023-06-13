import { supabase } from "../Controller/conexion.js";
import { serviciosPaquete } from "../Controller/servProveedor.js";
const nomPaquete = document.getElementById('nombrePaq')
const desc = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const boton = document.getElementById('editPaquete')
const inputImagen = document.getElementById('imagenPaquete');
const imagenPerfil = document.getElementById('imagenPerfil');
let servicios = []


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
/*
nombreUsuario.innerText = data[0].nombre;
telefono1.innerText = d[0].telefono;
correoUser.innerText = data[0].correo;
tipoUsuario.innerText = data[0].tipoUsuario;
empresa.innerText = d[0].empresa;
direccion.innerText = d[0].direccion;
img.src = data[0].fotoPerfil;
*/


var idproveedor = localStorage.getItem('idProveedor')




let { data: serv, error3 } = await supabase
    .rpc('serviciosProveedor', {
        idproveedor
    })
if (error3) console.log(error3)
else
console.log(serv);

    for (let index = 0; index < serv.length; index++) {

        if (index > 0) {
            serviciosPaquete(index + 1)

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
const paquetes = document.querySelectorAll("[id^='Paquete']");
const idPaquete =localStorage.getItem('idPaquete')
let { data: Paquete, error2 } = await supabase
  .from('Paquete')
  .select('*')
  .eq('idPaquete',idPaquete)
  console.log(idPaquete);
  console.log(Paquete);
Paquete.forEach(element => {
    element.servicios.forEach(e =>{
        paquetes.forEach((x,i) =>{
            const ser = document.getElementById(`idServicio${i + 1}`)
            const paq = document.getElementById(`Paquete${i+1}`)
            console.log(e);
            if(ser.dataset.value ==e){
                paq.checked=true
                servicios.push(e.toString())
            }
            
        })
    })
});



const cantidadServicios = serv.length;

// Función para manejar el evento change del checkbox
function handleCheckboxChange(index, checkbox) {
    const idServicio = document.getElementById(`idServicio${index}`);
    const idServicioValue = idServicio.getAttribute('data-value');

    if (checkbox.checked && !servicios.includes(idServicioValue)) {
        console.log(`Valor de idServicio${index}:`, idServicioValue);
        servicios.push(idServicioValue);
        console.log(servicios);
    } else if (!checkbox.checked && servicios.includes(idServicioValue)) {

        console.log(idServicioValue);
        servicios = servicios.filter(servicio => servicio !== idServicioValue);
        console.log(servicios);
        
    }
}

for (let index = 1; index <= cantidadServicios; index++) {
    const checkbox = document.getElementById(`Paquete${index}`);

    checkbox.addEventListener('change', () => {
        handleCheckboxChange(index, checkbox);
    });
}
boton.addEventListener('click', async ev => {
    ev.preventDefault()
    console.log(servicios);
    if (servicios.length == 0) {
        alert("Debes seleccionar por lo menos un servicio")
    } else {

        const archivo = imagenPaquete.files[0];
        const { error } = await supabase
            .storage
            .from('paquetes')
            .upload(`fotos/${archivo.name}`, archivo, {
                cacheControl: '3600',
                upsert: false
            })
        if (error) {
            console.log(error);
        }
        const { data } = supabase
            .storage
            .from('paquetes')
            .getPublicUrl(`fotos/${archivo.name}`)
        const img = data.publicUrl;
        
        const { error1 } = await supabase
            .from('Paquete')
            .update({
                nombre: nomPaquete.value, descripcion: desc.value, precio: precio.value, servicios: servicios,
                idProveedor: localStorage.getItem('idProveedor'), imagen: img
            })
            .eq('idPaquete', idPaquete)
        if(error1){
            console.log(error1);
        }
        if (localStorage.getItem('tipoUsuario') == "proveedor") {

            if(localStorage.getItem('premium')=="true"){
            window.location.href = '/Views/Premium/Proveedor/userProfile.html';
            }else{
            window.location.href = '/Views/User/Proveedor/userProfile.html';
            }
          } 

    }

})



inputImagen.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        console.log(imagenPerfil);
        imagenPerfil.src = e.target.result;
    }

    reader.readAsDataURL(file);
});
