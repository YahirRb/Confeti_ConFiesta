import { supabase } from "./conexion.js";

import { crearContenedor } from "./ej.js";


export function registrarServicio(nombre, descripcion, imagenServicio, galeria, diasEntrega, cancelacion,
    precio, cantidad, unidad, etiquetas) {
    console.log(nombre, descripcion, imagenServicio, diasEntrega, cancelacion,
        precio, cantidad, unidad, etiquetas);
    //Guarda la imagen en storage de supabase
    supabase
        .storage
        .from('fotosservicio')
        .upload(`ejemplo/${imagenServicio.name}`, imagenServicio, {
            cacheControl: '3600',
            upsert: false
        })
        .then(response => {
            console.log(response);

            const { data } = supabase
                .storage
                .from('public-bucket')
                .getPublicUrl(`ejemplo/${imagenServicio.name}`)

        })
        .catch(error => {
            console.error(error);
            alert('Error al registrar los datos.');
        });
    supabase
        .from('Servicios')
        .insert([
            {
                nombreServicio: nombre, descripcion, imagenServicio, galeria, diasEntrega,
                cancelacion, precio, cantidad, unidad, etiqueta: etiquetas, idProveedor: localStorage.getItem('idProveedor')
            },
        ])
        .then(response => {
            console.log(response);
            alert('Servicio Registrado')
            setTimeout(function () {
                if (localStorage.getItem('tipoUsuario') == "proveedor") {

                    if (localStorage.getItem('premium') == "true") {
                      window.location.href = '/Views/Premium/Proveedor/userProfile.html';
                    } else {
                      window.location.href = '/Views/User/Proveedor/userProfile.html';
                    }
                  }
            }, 500)

        })
        .catch(error => {
            console.error(error);
            alert('Error al registrar los datos.');
        });


}

export async function buscarS(busqueda) {

    const t = document.getElementsByClassName('eventName')[0];
    if(t!=undefined){
        t.innerText = busqueda
    
    


    let { data, error } = await supabase
        .rpc('buscar', {
            busqueda
        })
    console.log(data)

    if (error) console.error(error)
    else
        var x = 1;
    var c = 1;

    data.forEach((dato, index) => {
        if (x > 2) {
            crearContenedor(index + 1)

        }

        const elemento = document.getElementById(`servicio0${index + 1}`)
        elemento.style.display = 'flex'
        const prov = document.getElementById(`proveedor${index + 1}`)
        const precio = document.getElementById(`precio${index + 1}`)

        const descripcion = document.getElementById(`decripcion${index + 1}`)
        const nombr = document.getElementById(`servName${index + 1}`)
        const foto = document.getElementById(`imgServ${index + 1}`)


        const serv = document.getElementById(`idServicio${index}`)
        console.log(serv);
        serv.setAttribute("data-value", `${dato.idServicio}`);




        x++;
        prov.innerText = dato.nombre;
        precio.innerText = dato.precio;
        descripcion.innerText = dato.descripcion
        nombr.innerText = dato.nombreServicio
        foto.style.backgroundImage = `url(${dato.imagenServicio})`


        const elementos = document.getElementById(`servicio0${index + 1}`);
        const etiquetas = elementos.querySelectorAll(`.tags${index + 1} a`);

        dato.etiqueta.forEach((etiqueta, index) => {

            etiquetas[index].innerText = etiqueta
        })



    });
    }

}

export async function modificarServicio(nombre,descripcion, imagen, entrega,
    cancelacion, cantidad, precio, unidad, etiqueta, galeria) {
    var idservicio = localStorage.getItem('ServUpdate')
    const { error } = await supabase
    .from('Servicios')
    .update({ nombreServicio : nombre,
    descripcion: descripcion, imagenServicio: imagen,
diasEntrega: entrega, cancelacion : cancelacion, cantidad: cantidad,
precio: precio, unidad: unidad, etiqueta: etiqueta, galeria: galeria })
    .eq('idServicio', idservicio)
    if(error){
        console.log(error);
    }
    
  
}

export async function eliminarServicio(idServicio) {
    
    const { error } = await supabase
        .from('Servicios')
        .delete()
        .eq('idServicio', idServicio)
    if(error){
        console.log(error);
    }

}