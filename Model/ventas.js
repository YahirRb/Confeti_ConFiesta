import { supabase } from "../Controller/conexion.js";
const img = document.getElementById('imgServ1')
const nombreProv = document.getElementById('proveedor1')
const precio = document.getElementById('precio1')
const nameServ = document.getElementById('servName1')
const empresa = document.getElementById('empresa1')
const fecha = document.getElementById('fechaEntrega1')
const descripcion = document.getElementById('decripcion1')

const idproveedor = 2//localStorage.getItem('idProveedor')


let { data, error3 } = await supabase
    .rpc('ventas', {
        idproveedor
    })

if (error) console.error(error3)
else console.log(data)
