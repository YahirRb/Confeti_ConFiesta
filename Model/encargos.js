import { supabase } from "../Controller/conexion.js"
import { contenedorPendientes, contenedorRealizados } from "../Controller/ej.js"


var idusuario = localStorage.getItem('id')
let { data, error } = await supabase
    .rpc('mostrarEncargos', {
        idusuario
    })

if (error) {console.error(error)}
console.log(data);





data.forEach(async(element, index) => {

    if (error) console.error(error)

    contenedorPendientes(index + 1)
    const id = document.getElementById(`servicio0${index + 1}`)
    id.style.display = 'flex'
    const proveedor = document.getElementById(`proveedor${index + 1}`)
    const precio = document.getElementById(`precio${index + 1}`)

    const descripcion = document.getElementById(`decripcion${index + 1}`)
    const nombr = document.getElementById(`servName${index + 1}`)
    const foto = document.getElementById(`imgServ${index + 1}`)
    

    const servicio = document.getElementById(`idServicio${index}`)

    servicio.setAttribute("data-value", `${element.idServicio}`);

    console.log(index);
    const idproveedor =data[index].idServicio
    let { data: se } = await supabase
      .rpc('Proveedor', {
        idproveedor
      })
      console.log("Datos");
      console.log(se);

    proveedor.innerText = se[0].nombre;
    precio.innerText = se[0].precio;
    descripcion.innerText = se[0].descripcion
    nombr.innerText = se[0].nombreServicio
    foto.style.backgroundImage = `url(${se[0].imagenServicio})`
    console.log("se");

    const elementos = document.getElementById(`servicio0${index + 1}`);
    const etiquetas = elementos.querySelectorAll(`.tags${index + 1} a`);

/*element.etiqueta.forEach((etiqueta, index) => {

    etiquetas[index].innerText = etiqueta
})*/


});



/*
processData(data);

async function processData(data) {
    try {
        for (const [index, element] of data.entries()) {

            const { data: prov, error1 } = await supabase
                .from('Proveedor')
                .select('*')
                .eq('idProveedor', element.idProveedor);
            console.log(prov);

            const { data: serv, error2 } = await supabase
                .from('Servicios')
                .select('*')
                .eq('idServicio', element.idServicio);

            contenedorPendientes(index + 1);

            const id = document.getElementById(`servicio0${index + 1}`);
            id.style.display = 'flex';

            const proveedor = document.getElementById(`proveedor${index + 1}`)
            const precio = document.getElementById(`precio${index + 1}`)

            const descripcion = document.getElementById(`decripcion${index + 1}`)
            const nombr = document.getElementById(`servName${index + 1}`)
            const foto = document.getElementById(`imgServ${index + 1}`)


            const servicio = document.getElementById(`idServicio${index}`)
            console.log(serv);
            servicio.setAttribute("data-value", `${element.idServicio}`);




            proveedor.innerText = element.nombre;
            precio.innerText = element.precio;
            descripcion.innerText = serv[0].descripcion
            nombr.innerText = serv[0].nombreServicio
            foto.style.backgroundImage = `url(${serv[0].imagenServicio})`


            const elementos = document.getElementById(`servicio0${index + 1}`);
            const etiquetas = elementos.querySelectorAll(`.tags${index + 1} a`);

            /*element.etiqueta.forEach((etiqueta, index) => {
        
                etiquetas[index].innerText = etiqueta
            })
              }
        }
    } catch (error) {
        console.error(error);
    }
}
*/

