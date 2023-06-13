let tipoServicios= []
let tipoEventos = []
//Obtener los datos del archivo JSON y guardarlos en la variable
fetch('/Model/TipoServicios.json')
  .then(response => response.json())
  .then(data => {
    tipoServicios=data.servicios;

  });
  fetch('/Model/TipoEventos.json')
  .then(response => response.json())
  .then(data => {
    tipoEventos = data.eventos;
  });
// Obtener el elemento input del HTML
const tagsInput = document.getElementById('tag1');

// Añadir un event listener al input para detectar cuando se escriba en él

const suggestions = document.getElementById('suggestions');

//Usar los datos de los JSON para mostrar sugerencias
tagsInput.addEventListener('input', function() {
  const inputText = this.value;
  const matchingTags = tipoServicios.filter(tag => tag.toLowerCase().includes(inputText.toLowerCase()));
  const matchingTags2 = tipoEventos.filter(tag => tag.toLowerCase().includes(inputText.toLowerCase()));

  suggestions.innerHTML = '';
  matchingTags.forEach(tag => {
    const suggestion = document.createElement('option');
    suggestion.textContent = tag;
    suggestion.addEventListener('mousedown', function() {
      tagsInput.value = this.textContent;
      suggestions.style.display = 'none';
    });
    suggestions.appendChild(suggestion);
  });

  matchingTags2.forEach(tag => {
    const suggestion = document.createElement('option');
    suggestion.textContent = tag;
    suggestion.addEventListener('mousedown', function() {
      tagsInput.value = this.textContent;
      suggestions.style.display = 'none';
    });
    suggestions.appendChild(suggestion);
  });

    if (matchingTags.length > 0 || matchingTags2.length > 0) {
      suggestions.style.display = 'block';
    } else {
      suggestions.style.display = 'none';
    }
});
//cuando el usuario da click en otro lugar se ocultan las sugerencias
tagsInput.addEventListener('focusout', function() {
  suggestions.style.display = 'none';
});

const addButton = document.getElementById('agregar');
const container = document.getElementById('Tags');
let count = 1;
let tags=1;
const maxBoxes = 5;
//Autocompletar
addButton.addEventListener('click', () => {
  
  if(count <= maxBoxes){

    const newBox = document.createElement('div');
    const newInput = document.createElement('input');
    const newSuggestion = document.createElement('select');
    newInput.type = 'text';
    newInput.id = `tag${count+1}`;
    newInput.autocomplete ='on';
    newSuggestion.id = `suggestions${count+1}`;
    newSuggestion.size = "5";
    newSuggestion.style = 'display:none;';
    newBox.appendChild(newInput);
    newBox.appendChild(newSuggestion);
    container.appendChild(newBox);
    count++;
    
    const suggestions2 = document.getElementById(`suggestions${count}`);
    const tagsInput2 = document.getElementById(`tag${count}`);
    
    tagsInput2.addEventListener('input', function() {
      const inputText = this.value;
      const matchingTags = tipoServicios.filter(tag => tag.toLowerCase().includes(inputText.toLowerCase()));
      const matchingTags2 = tipoEventos.filter(tag => tag.toLowerCase().includes(inputText.toLowerCase()));
    
      suggestions2.innerHTML = '';
      matchingTags.forEach(tag => {
        const suggestion2 = document.createElement('option');
        suggestion2.textContent = tag;
        suggestion2.addEventListener('mousedown', function() {
          tagsInput2.value = this.textContent;
          suggestions2.style.display = 'none';
        });
        suggestions2.appendChild(suggestion2);
      });
      matchingTags2.forEach(tag => {
        const suggestion2 = document.createElement('option');
        suggestion2.textContent = tag;
        suggestion2.addEventListener('mousedown', function() {
          tagsInput2.value = this.textContent;
          suggestions2.style.display = 'none';
        });
        suggestions2.appendChild(suggestion2);
      });

    
      if (matchingTags.length > 0 || matchingTags2.length > 0) {
        suggestions2.style.display = 'block';
      } else {
        suggestions2.style.display = 'none';
      }
    });
    
    tagsInput2.addEventListener('focusout', function() {
      suggestions2.style.display = 'none';
    });  
  }else{
    alert("Ya no puedes agregar mas etiquetas");
  }


});
