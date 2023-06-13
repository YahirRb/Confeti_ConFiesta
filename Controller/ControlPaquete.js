import { supabase } from "./conexion.js";
export async function eliminarPaquete(idPaquete) {
    
    const { error } = await supabase
        .from('Paquete')
        .delete()
        .eq('idPaquete', idPaquete)
    if(error){
        console.log(error);
    }

}