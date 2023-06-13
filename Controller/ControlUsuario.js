import { supabase } from "./conexion.js";
let correoUsuario;
//var btn = document.getElementById('btn')
//btn.addEventListener('click',registrarUsuario,true)
//var btn = document.getElementById('btn')
//btn.addEventListener('click',registrarUsuario,true)
export async function registrarUsuario(fotoPerfil, nombre, apellidos, fechaNacimiento, correo, password, passwordConfirmed) {
  if (calcularEdad(fechaNacimiento) >= 18) {
    if (password == passwordConfirmed) {
      console.log("Contraseñas iguales");
      const { data: email } = await supabase
        .from('Usuario')
        .select('correo')
        .eq('correo', correo)
      console.log(email);
      if (email.length > 0) {
        alert('ya existe')
      } else {  


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
                  nombre, apellidos, fechaNacimiento, correo, password, tipoUsuario: "cliente", fotoPerfil: img
                },
              ])
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.error(error);
                alert('Error al registrar los datos.');
              });

            window.location.href = '/login.html'

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


export async function iniciarSesion(correo, password) {

  const { user, session, error } = await supabase.auth.signInWithPassword({
    email: correo,
    password: password
  })
  if (error) {
    alert("Correo o contraseña incorrectos")
    console.log(error)
  } else {
    console.log('User:', user)
    console.log('Session:', session)




    const { data, error } = await supabase
      .from('Usuario')
      .select('*')
      .eq('correo', localStorage.getItem('correo'))
    if (error) {
      console.log(error);
      return;
    }
    console.log(localStorage.getItem('correo'));
    const tipoUser = data[0].tipoUsuario;
    localStorage.setItem('premium', data[0].isPremium)
    localStorage.setItem('tipoUsuario', data[0].tipoUsuario)
   
    const { data: id, error1 } = await supabase
      .from('Usuario')
      .select('*')
      .eq('correo', localStorage.getItem('correo'))
    if (error1) {
      console.log(error1);
      return;
    }
    localStorage.setItem('id', id[0].idUsuario)
    console.log(localStorage.getItem('id'));

    if (tipoUser == "proveedor") {
      const { data: idPro, error2 } = await supabase
        .from('Proveedor')
        .select('idProveedor')
        .eq('idUsuario', localStorage.getItem('id'))
      if (error2) {
        alert(error2)
      }
      localStorage.setItem('idProveedor', idPro[0].idProveedor)


      var premium = Boolean(id[0].isPremium)
      if (premium == true) {

        window.location.href = '/Views/Premium/Proveedor/main.html'
      } else {
        window.location.href = '/Views/User/Proveedor/main.html'
      }
    } else {
      const premium = Boolean(id[0].isPremium);;
      if (premium == true) {
        window.location.href = '/Views/Premium/Cliente/main.html'
      } else {
        window.location.href = '/Views/User/Cliente/main.html'
      }
    }


  }



}

/*async function comprobarPremium() {
  let premium = false;
  const { data: datos } = await supabase
    .from('Usuario')
    .select('isPremium')
    .eq('correo', localStorage.getItem('correo'))
  console.log(datos)
  var x=Boolean(datos[0].isPremium)
  console.log(x);
  if (x == true) {
    premium=true;
  } else {
    premium=false;
  }
  console.log(premium);
 return premium;
}*/

export async function mostrarDatosUsuario(nombreUsuario, telefono, correoUser, tipoUsuario) {
  /*let { data: Usuario, error } = await supabase
  .from('Usuario')
  .select('*')
  .eq('idUsuario',1)
  .then((result) => {
    // Crear elementos HTML para cada fila de la tabla
    result.data.forEach((fila) => {
      const elemento = document.createElement('div');
      elemento.textContent = `ID: ${fila.idUsuario}, Nombre: ${fila.nombre}`;

      tabla.appendChild(elemento);
    });
  })
  .catch((error) => {
    console.error(error);
  });*/
  const { data, error } = await supabase
    .from('Usuario')
    .select('*')
    .eq('idUsuario', localStorage.getItem('id'))

  if (error) {
    console.log(error);
    return;
  }
  console.log(localStorage.getItem('id'));

  nombreUsuario.innerText = data[0].nombre;
  telefono.innerText = '1234543'
  correoUser.innerText = data[0].correo;
  tipoUsuario.innerText = data[0].tipoUsuario;


}

export async function cerrarSesion() {

  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error);
  } else {
    localStorage.clear();
    window.location.href = '/index.html'
  }

}

export async function eliminarUsuario() {
  const { data: { user } } = await supabase.auth.getUser()
console.log(user.id);

const { error1} = await supabase.auth.admin.deleteUser(
  user.id
)
  const { error } = await supabase
    .from('Usuario')
    .delete()
    .eq('correo', localStorage.getItem('correo'))
  if (error) {
    alert(error);
  } else {
    alert("Usuario eliminado")
    window.location.href='/index.html'
  }
}

//
export async function actualizarCorreo(newEmail) {


  const { data, error } = await supabase.auth.updateUser({ email: newEmail })
  if (error) {
    alert(error);
  }

  const { data1, error1 } = await supabase
    .from("Usuario")
    .update({ correo: newEmail })
    .eq('correo', localStorage.getItem('correo'))
  if (error1) {
    console.log(error1);
    alert("Error al actualizar el correo")
  }

}

//Metodo para cambiar la contraseña del usuario
export async function cambiarPassword(newPassword) {

  const { data, error } = await supabase.auth.updateUser({ password: newPassword })
  if (error) {
    console.log(error);
    alert("Error al cambiar la contraseña");
  }
  const { data1, error1 } = await supabase
    .from("Usuario")
    .update({ password: newPassword })
    .eq('correo', localStorage.getItem('correo'))
  if (error1) {
    alert(error1)
  }else{
    alert('Contraseña actualizada')
  }

}


//Metodo para modificar los datos del usuario
export async function modificarUsuario(newFoto, newName, newApellido, fecha) {
  supabase
    .storage
    .from('foto_usuario')
    .upload(`fotos/${newFoto.name}`, newFoto, {
      cacheControl: '3600',
      upsert: false
    })
  const { data } = supabase
    .storage
    .from('foto_usuario')
    .getPublicUrl(`fotos/${newFoto.name}`)
  const img = data.publicUrl;
  const { error } = await supabase
    .from('Usuario')
    .update({
      nombre: newName,
      apellidos: newApellido,
      fechaNacimiento: fecha,
      fotoPerfil: img
    })
    .eq('idUsuario', localStorage.getItem('id'))
  if (error) {
    console.log(error);
    alert("Error al modificar los datos")
  }

}