
setTimeout(function () {
    const verMasBtns = document.querySelectorAll('.verMasBtn');
  
    console.log(verMasBtns);
    // Recorre todos los botones y agrega un event listener
    verMasBtns.forEach((btn) => {
      btn.addEventListener('click', async () => {
        // Obtén el ID del botón seleccionado
        const id = btn.id;
        console.log(`Se ha seleccionado el botón con ID ${id}`);
        const x = document.getElementById(`verMasPaq${id}`);

        const a = x.getAttribute("data-value")

  
        localStorage.setItem('idPaquete', a);
        
        if (localStorage.getItem('tipoUsuario') == "proveedor") {
  
          if (localStorage.getItem('premium')=="true") {
            window.location.href = '/Views/Premium/Proveedor/editPaquete.html';
          } else {
            window.location.href = '/Views/User/Proveedor/editPaquete.html';
          }
        } 
  
      });
    });
  }, 500);
  
  