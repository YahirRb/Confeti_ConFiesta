import { supabase } from "./conexion.js";
//import {telefono, direccion, ciudad, estado,nombre,apellidos,correo,fechaNacimiento,password,passwordConfirmed } from "/Proveedor.js";




export async function registrarProveedor(fotoPerfil, nombre, apellidos, empresa, fechaNacimiento, telefono
  , direccion, ciudad, estado, tarjeta, paypal, correo, password, passwordConfirmed) {
  if (calcularEdad(fechaNacimiento) >= 18) {

    console.log(telefono, direccion, ciudad, estado);
    if (password == passwordConfirmed) {
      console.log("Contraseñas iguales");
      console.log(nombre, apellidos, correo, fechaNacimiento, password, telefono, direccion, ciudad, estado);

      const { data: email } = await supabase
        .from('Usuario')
        .select('correo')
        .eq('correo', correo)
      console.log(email);
      if (email.length > 0) {
        alert('ya existe')
      } else {
        alert('correo nuevo')


        supabase.auth.signUp({
          email: correo,
          password: password,
        }).then(response => {
          console.log(response);
          alert('Correo electrónico enviado. Por favor, verifica tu correo electrónico para continuar.');

        }).catch(error => {
          console.error(error);
          alert('Error al registrar los datos.');
        });
        supabase
          .storage
          .from('foto_usuario')
          .upload(`fotos/${fotoPerfil.name}`, fotoPerfil, {
            cacheControl: '3600',
            upsert: false
          })
          .then(response => {
            console.log(response);
            alert('Datos registrados correctamente.');


            const { data } = supabase
              .storage
              .from('foto_usuario')
              .getPublicUrl(`fotos/${fotoPerfil.name}`)
            console.log("imagen")
            const img = data.publicUrl;
            console.log(img);

            supabase
              .from('Usuario')
              .insert([
                {
                  nombre, apellidos, fechaNacimiento, correo, password, tipoUsuario: "proveedor", fotoPerfil: img
                },
              ])
              .then(response => {
                console.log(response);
                alert('Datos registrados correctamente.');
              })
              .catch(error => {
                console.error(error);
                alert('Error al registrar los datos.');
              });

            supabase
              .from('Usuario')
              .select('idUsuario')
              .eq('correo', correo)
              .then(response => {
                console.log(response)
                const idUsuario = response.data[0].idUsuario;
                localStorage.setItem('id', idUsuario)
                console.log('El idUsuario correspondiente al correo es:', idUsuario);
                const us = localStorage.getItem('id')
                console.log(us);

                supabase
                  .from('Proveedor')
                  .insert([
                    { idUsuario: us, empresa, direccion, ciudad, estado, numTarjeta: tarjeta, paypay: paypal, telefono },
                  ]).then(response => {
                    console.log(response);
                    alert('proveedor registrado correctamente.');
                  })
                  .catch(error => {
                    console.error(error);
                    alert('Error al registrar los datos.');
                  });


              }, error1 => {
                console.log('Error al consultar la tabla Usuario:', error1);
              }
              )







          })
      }
    } else {
      console.log("No coinciden");
    }


  } else {
    console.log("No puedes registrarte");
  }
}

export function calcularEdad(fechaNacimiento) {
  var fechaNac = new Date(fechaNacimiento);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  if (fechaNac.getMonth() > fechaActual.getMonth() ||
    (fechaNac.getMonth() == fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
    edad--;
  }
  return edad;
}

export async function modificarProveedor(newEmpresa, newDireccion, newCiudad, newEstado, newTarjeta,
  newPaypal, newTelefono) {
  const { data: d, error1 } = await supabase
    .from('Usuario')
    .select('idUsuario')
    .eq('correo', localStorage.getItem('correo'))
  if (error1) {
    console.log(error1);

  }
  //localStorage.setItem('id',d[0].idUsuario)
  console.log(d)
  console.log(localStorage.getItem('id'))
  const { error } = await supabase
    .from('Proveedor')
    .update({
      empresa: newEmpresa,
      telefono: newTelefono,
      direccion: newDireccion,
      ciudad: newCiudad,
      estado: newEstado,
      numTarjeta: newTarjeta,
      paypay: newPaypal
    })
    .eq('idUsuario', localStorage.getItem('id'))
  if (error) {
    alert(error)
  }
}

export async function mostrarDatosProveedor() {
  const { data, error } = await supabase
    .from('Usuario')
    .select('*')
    .eq('idUsuario', 1)

  if (error) {
    console.log(error);
    return;
  }

  tabla.innerHTML = '';

  data.forEach((usuario) => {
    const row = document.createElement('h1');
    row.textContent = `ID: ${usuario.idUsuario}, Nombre: ${usuario.nombre}, apellidos: ${usuario.apellidos}`;
    tabla.appendChild(row);
  });
  const { data1, error1 } = await supabase
    .from('Proveedor')
    .select('*')
    .eq('idUsuario', 1)

  if (error1) {
    console.log(error1);
    return;
  }

  tabla.innerHTML = '';

  data1.forEach((proveedor) => {
    const row = document.createElement('h1');
    row.textContent = `ID: ${proveedor.idProveedor}, Nombre: ${proveedor.telefono}, apellidos: ${proveedor.direccion}`;
    tabla.appendChild(row);
  });

}

function mostrarServicios() {

}

export async function cerrarSesion() {

  const { error } = await supabase.auth.signOut()
  if (error) {
    alert(error);
  } else {
    localStorage.clear();
    window.location.href = '/index.html'
  }

}
export async function eliminarProveedor() {
  
const {  error2 } = await supabase
.from('Paquete')
.delete()
.eq('idProveedor',localStorage.getItem('idProveedor') )
if (error2) {
  alert(error2);
} 
const {  error1 } = await supabase
.from('Servicios')
.delete()
.eq('idProveedor',localStorage.getItem('idProveedor') )
if (error1) {
  alert(error1);
} 
  const { error3 } = await supabase
    .from('Proveedor')
    .delete()
    .eq('idProveedor', localStorage.getItem('idProveedor'))
  if (error3) {
    alert(error3);
  } 
  const { error4 } = await supabase
    .from('Usuario')
    .delete()
    .eq('correo', localStorage.getItem('correo'))
  if (error4) {
    alert(error4);
  } else {
    alert("Usuario eliminado")
    window.location.href='/index.html'
  }}