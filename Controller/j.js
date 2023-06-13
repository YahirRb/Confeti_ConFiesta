import { supabase } from "./conexion.js";
import { buscarS } from "../Controller/ControlServicio.js"
const serviceLinks = document.querySelectorAll(".service");

// Asociar un evento de clic a cada enlace
serviceLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const value = event.target.parentNode.getAttribute("value");
    if (localStorage.getItem('tipoUsuario') == "proveedor") {

      if (localStorage.getItem('premium')=="true") {
        window.location.href = '/Views/Premium/Proveedor/results.html';
      } else {
        window.location.href = '/Views/User/Proveedor/results.html';
      }
    } else if (localStorage.getItem('tipoUsuario') == "cliente") {
      if (localStorage.getItem('premium')=="true") {
        window.location.href = '/Views/Premium/Cliente/results.html';
      } else {
        window.location.href = '/Views/User/Cliente/results.html';
      }
    }else{
      window.location.href = '/results.html'
    }


    // Guardar en el localstorage
    localStorage.setItem('servicio', value);
    buscarS(localStorage.getItem('servicio'));
  });
});




