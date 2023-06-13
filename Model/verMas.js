
setTimeout(function () {
  const verMasBtns = document.querySelectorAll('.verMasBtn');

  console.log(verMasBtns);
  // Recorre todos los botones y agrega un event listener
  verMasBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      // Obtén el ID del botón seleccionado
      const id = btn.id;
      console.log(`Se ha seleccionado el botón con ID ${id}`);
      const x = document.getElementById(`idServicio${id}`);
      const a = x.getAttribute("data-value")

      localStorage.setItem('idServicio', a);
      if (localStorage.getItem('tipoUsuario') == "proveedor") {

        if (localStorage.getItem('premium')=="true") {
          window.location.href = '/Views/Premium/Proveedor/serviceDetail.html';
        } else {
          window.location.href = '/Views/User/Proveedor/serviceDetail.html';
        }
      } else if (localStorage.getItem('tipoUsuario') == "cliente") {
        if (localStorage.getItem('premium')=="true") {
          window.location.href = '/Views/Premium/Cliente/serviceDetail.html';
        } else {
          window.location.href = '/Views/User/Cliente/serviceDetail.html';
        }
      }else{
        window.location.href = '/serviceDetail.html'
      }

    });
  });
}, 500);

