import { buscarS } from "../Controller/ControlServicio.js"
let tipoServicios= []
let tipoEventos = []
const busqueda = document.getElementById("search")
const iconoSearch = document.querySelector('.fa-search')
const suggestionsSearch = document.getElementById('suggestionsSearch');


//Obtener los datos del archivo JSON y guardarlos en la variable

  fetch('/Model/TipoEventos.json')
  .then(response => response.json())
  .then(data => {
    tipoEventos = data.eventos.concat(data.servicios);
  });

  busqueda.addEventListener('input', function() {
    const inputText = this.value;
    const matchingSuggestion = tipoEventos.filter(tag => tag.toLowerCase().includes(inputText.toLowerCase()));
  
    suggestionsSearch.innerHTML = '';

  
    matchingSuggestion.forEach(tag => {
      const suggestion = document.createElement('option');
      suggestion.textContent = tag;
      suggestion.addEventListener('mousedown', function() {
        busqueda.value = this.textContent;
        suggestionsSearch.style.display = 'none';
      });
      suggestionsSearch.appendChild(suggestion);
    });
  
    if (matchingSuggestion.length > 0) {
      suggestionsSearch.style.display = 'block';
    } else {
      suggestionsSearch.style.display = 'none';
    }
  });
  //cuando el usuario da click en otro lugar se ocultan las sugerencias
  busqueda.addEventListener('focusout', function() {
    suggestionsSearch.style.display = 'none';
  });


busqueda.addEventListener('keydown', function(event){
  if(event.keyCode == 13){
    if(busqueda.value.length > 0){

      setTimeout(function() {
        // redirigir a la página principal
        if (localStorage.getItem('tipoUsuario') == "proveedor") {
          if(localStorage.getItem('premium')=="true"){
          window.location.href = '/Views/Premium/Proveedor/results.html';
          }else{
          window.location.href = '/Views/User/Proveedor/results.html';
          }
        } else if(localStorage.getItem('tipoUsuario') == "cliente"){
          if(localStorage.getItem('premium')=="true"){
            window.location.href = '/Views/Premium/Cliente/results.html';
            }else{
            window.location.href = '/Views/User/Cliente/results.html';
            }
        }else{
          window.location.href = '/results.html'
        }
  
      }, 500);
      buscar()
    }
  }
}) 

iconoSearch.addEventListener('click', function(event){
  event.preventDefault()
  if(busqueda.value.length > 0){

    setTimeout(function() {
      // redirigir a la página principal
      if (localStorage.getItem('tipoUsuario') == "proveedor") {

        if(localStorage.getItem('premium')=="true"){
        window.location.href = '/Views/Premium/Proveedor/results.html.html';
        }else{
        window.location.href = '/Views/User/Proveedor/results.html';
        }
      } else if(localStorage.getItem('tipoUsuario') == "cliente"){
        if(localStorage.getItem('premium')=="true"){
          window.location.href = '/Views/Premium/Cliente/results.html';
          }else{
          window.location.href = '/Views/User/Cliente/results.html';
          }
      }else{
        window.location.href = '/results.html'
      }
    }, 500);
    buscar()
  }else{
    setTimeout(function() {
      // redirigir a la página principal
      if (localStorage.getItem('tipoUsuario') == "proveedor") {

        if(localStorage.getItem('premium')=="true"){
        window.location.href = '/Views/Premium/Proveedor/results.html';
        }else{
        window.location.href = '/Views/User/Proveedor/results.html';
        }
      } else if(localStorage.getItem('tipoUsuario') == "cliente"){
        if(localStorage.getItem('premium')=="true"){
          window.location.href = '/Views/Premium/Cliente/results.html';
          }else{
          window.location.href = '/Views/User/Cliente/results.html';
          }
      }else{
        window.location.href = '/results.html'
      }
    }, 500);
    console.log("Vacio")
  }
  
})

function buscar (){
  localStorage.setItem('servicio', busqueda.value)
}

buscarS(localStorage.getItem('servicio'));