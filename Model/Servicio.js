import { supabase } from "../Controller/conexion.js";

import { registrarServicio, modificarServicio } from "../Controller/ControlServicio.js";
const formulario = document.querySelectorAll('form');
let etiquetas = [];
let galeria = [];
var img;

const busqueda = document.getElementById("search")
formulario.forEach((boton) => {
  boton.addEventListener('submit', (event) => {
    const id = event.target.id;
    event.preventDefault();
    console.log(id);
    switch (id) {
      case 'mostrar':

        break;
      case 'editarServicio':
        const nuevoNombre = document.getElementById('nombre').value;

        const nuevaDescripcion = document.getElementById('descripcion').value;
        const imagen = document.querySelectorAll('#preview img');
        // mejor usar un for normal
        imagen.forEach((imagen, i) => {
          const imagenServicio = document.getElementById('imagen').files[i];
          //Guarda la imagen en storage de supabase
          supabase
            .storage
            .from('fotosservicio')
            .upload(`ejemplo/${imagenServicio.name}`, imagenServicio, {
              cacheControl: '3600',
              upsert: true
            })
            .then(response => {
            })
            .catch(error => {
              console.error(error);
              alert('Error al registrar los datos.');
            });

          const { data } = supabase
            .storage
            .from('fotosservicio')
            .getPublicUrl(`ejemplo/${imagenServicio.name}`)
          if (i == 0) {
            img = data.publicUrl;
          } else {
            galeria.push(data.publicUrl)
          }
        })
        const nuevoDiasEntrega = document.getElementById('diasMin').value;
        const nuevaCancelacion = document.getElementById('cancelacion').value;
        const nuevoPrecio = document.getElementById('precio').value;
        const nuevaCantidad = document.getElementById('cantidad').value;
        const nuevaUnidad = document.getElementById('unidad').value;
        const nuevoTags = document.querySelectorAll('[id^="tag"]');
        const nuevoNumTags = nuevoTags.length;
        console.log(`Se crearon ${nuevoNumTags} etiquetas.`);
        //Obtiene los tags y los guarda dentro de un array llamado etiquetas[]
        for (let i = 1; i <= nuevoNumTags; i++) {
          const tagInput = document.getElementById(`tag${i}`);
          etiquetas.push(tagInput.value);
        }

        modificarServicio(nuevoNombre,nuevaDescripcion, img, nuevoDiasEntrega,
          nuevaCancelacion, nuevaCantidad, nuevoPrecio, nuevaUnidad, etiquetas, galeria)

        if (localStorage.getItem('tipoUsuario') == "proveedor") {
          console.log(localStorage.getItem('premium'));
          if (localStorage.getItem('premium') == "true") {
            window.location.href = '/Views/Premium/Proveedor/userProfile.html';
          } else {
            window.location.href = '/Views/User/Proveedor/userProfile.html';
          }
        }

        break;

      case 'eliminar':

        break;
      case 'registroServicio':

        event.preventDefault();
        const nombre = document.getElementById('nombre').value;

        const descripcion = document.getElementById('descripcion').value;

        const imagenes = document.querySelectorAll('#preview img');
        // mejor usar un for normal
        imagenes.forEach((imagen, i) => {
          const imagenServicio = document.getElementById('imagen').files[i];
          //Guarda la imagen en storage de supabase
          supabase
            .storage
            .from('fotosservicio')
            .upload(`ejemplo/${imagenServicio.name}`, imagenServicio, {
              cacheControl: '3600',
              upsert: true
            })
            .then(response => {
            })
            .catch(error => {
              console.error(error);
              alert('Error al registrar los datos.');
            });

          const { data } = supabase
            .storage
            .from('fotosservicio')
            .getPublicUrl(`ejemplo/${imagenServicio.name}`)

          console.log(data.publicUrl);
          if (i == 0) {
            img = data.publicUrl;
          } else {
            galeria.push(data.publicUrl)
          }

        })


        const diasEntrega = document.getElementById('diasMin').value;
        const cancelacion = document.getElementById('cancelacion').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;
        const unidad = document.getElementById('unidad').value;
        const tags = document.querySelectorAll('[id^="tag"]');
        const numTags = tags.length;
        console.log(`Se crearon ${numTags} etiquetas.`);
        //Obtiene los tags y los guarda dentro de un array llamado etiquetas[]
        for (let i = 1; i <= numTags; i++) {
          const tagInput = document.getElementById(`tag${i}`);
          etiquetas.push(tagInput.value);
        }

        registrarServicio(nombre,descripcion,img,galeria,diasEntrega,cancelacion,
          precio,cantidad,unidad,etiquetas);

        break;
      case 'buscar':

        break;
    }
  });

});

/*
//Mostrar la imagen
const inputImagen = document.getElementById('imagen');
const previewImagen = document.getElementById('preview');

inputImagen.addEventListener('change', function () {
  const archivo = this.files[0];
  const archivo2 = this.files[1];
  const archivo3 = this.files[2];
  const archivo4 = this.files[3];
  const lector = new FileReader();

  lector.addEventListener('load', function () {
    previewImagen.src = lector.result;
  });

  lector.readAsDataURL(archivo);
  lector.readAsDataURL(archivo2);
  lector.readAsDataURL(archivo3);
  lector.readAsDataURL(archivo4);
});

busqueda.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    console.log("Ww");
  }
}) */

const inputImagen = document.getElementById('imagen');
const previewImagen = document.getElementById('preview');



inputImagen.addEventListener('change', function () {
  const archivos = this.files;
  console.log(archivos);
  for (let i = 0; i < archivos.length; i++) {
    const lector = new FileReader();
    lector.addEventListener('load', function () {
      const imagen = document.createElement('img');
      imagen.src = lector.result;
      imagen.style.maxWidth = '100px';
      previewImagen.appendChild(imagen);

    });
    lector.readAsDataURL(archivos[i]);
  }
});


//Cargar varios archivos a storage

function cargar() {
  const inputImage = document.getElementById('imagen');

  inputImage.addEventListener('change', function (event) {
    const cantidadImagenes = event.target.files.length;
    for (let i = 0; i < cantidadImagenes; i++) {
      console.log(i);
      const imagenServicio = document.getElementById('imagen').files[i];

      //Guarda la imagen en storage de supabase
      supabase
        .storage
        .from('fotosservicio')
        .upload(`ejemplo/${imagenServicio.name}`, imagenServicio, {
          cacheControl: '3600',
          upsert: true
        })
        .then(response => {
          console.log(response);
          alert('Datos registrados correctamente.');
        })
        .catch(error => {
          console.error(error);
          alert('Error al registrar los datos.');
        });

      const { data } = supabase
        .storage
        .from('fotosservicio')
        .getPublicUrl(`ejemplo/${imagenServicio.name}`)

      console.log(data.publicUrl);
      if (i > 0) {
        galeria.push(data.publicUrl)
      }

    }

    console.log("imagen")

    console.log(`Se seleccionaron ${cantidadImagenes} imágenes.`);
    console.log(galeria);
  });


}
