export function crearContenedor(index) {
    // Crear elemento div con clase "serviceBox"
    const contenedor = document.getElementById('servProvided')
    const serviceBox = document.createElement('div');
    serviceBox.classList.add('serviceBox');
    serviceBox.setAttribute('id', `serviceBox${index}`);
    serviceBox.setAttribute('name', 'serviceBox');
    serviceBox.style.display = 'block';
    contenedor.appendChild(serviceBox)

    const id = document.createElement('h1')
    id.setAttribute('id', `idServicio${index}`)
    id.setAttribute('data-value', "")
    serviceBox.appendChild(id)
    console.log("Idserv creado");

    const btnServices = document.createElement('div')
    btnServices.setAttribute('class', 'btnServices');
    serviceBox.appendChild(btnServices)

    const editServ = document.createElement('a')
    editServ.setAttribute('href', "#")
    editServ.setAttribute('title', "Editar")
    editServ.setAttribute('class', "servOpc")
    editServ.setAttribute('type', "submit")
    editServ.setAttribute('id', `editServ${index}`)
    editServ.setAttribute('name', `editServ${index}`)
    btnServices.appendChild(editServ)

    const span = document.createElement('span')
    span.setAttribute('class', "fa-solid fa-pen-to-square")
    editServ.appendChild(span)

    const eliminar = document.createElement('a')
    eliminar.setAttribute('href', "#")
    eliminar.setAttribute('title', "Eliminar")
    eliminar.setAttribute('class', "servOpc")
    eliminar.setAttribute('type', "submit")
    eliminar.setAttribute('id', `deleteServ${index}`)
    eliminar.setAttribute('name', `deleteServ${index}`)
    btnServices.appendChild(eliminar)
    const span2 = document.createElement('span')
    span2.setAttribute('class', "fa-sharp fa-solid fa-trash")
    eliminar.appendChild(span2)

    const estadoServicio = document.createElement('div')
    estadoServicio.setAttribute('id', 'estadoServicio')
    btnServices.appendChild(estadoServicio)

    // Crear el elemento label
    const actServLabel = document.createElement("label");
    actServLabel.id = "actServ";
    actServLabel.textContent = "Activo";
    estadoServicio.appendChild(actServLabel);

    // Crear el elemento de la caja del toggler
    const togglerDiv = document.createElement("div");
    togglerDiv.classList.add("toggler");
    estadoServicio.appendChild(togglerDiv);

    // Crear el elemento input
    const togglerInput = document.createElement("input");
    togglerInput.id = `toggler-${index}`;
    togglerInput.name = `toggler-${index}`;
    togglerInput.type = "checkbox";
    togglerInput.value = index;
    togglerDiv.appendChild(togglerInput);

    // Crear el elemento label del toggler
    const togglerLabel = document.createElement("label");
    togglerLabel.setAttribute("for", `toggler-${index}`);
    togglerDiv.appendChild(togglerLabel);

    // Crear el elemento SVG de la parte 'off' del toggler
    const togglerOffSvg = document.createElement("svg");
    togglerOffSvg.classList.add("toggler-off");
    togglerOffSvg.setAttribute("version", "1.1");
    togglerOffSvg.setAttribute('xmlns', "http://www.w3.org/2000/svg")
    togglerOffSvg.setAttribute("viewBox", "0 0 130.2 130.2");
    togglerLabel.appendChild(togglerOffSvg);

    const togglerOffPolyline = document.createElement("polyline");
    togglerOffPolyline.classList.add("path", "check");
    togglerOffPolyline.setAttribute("points", "100.2,40.2 51.5,88.8 29.8,67.5");
    togglerOffSvg.appendChild(togglerOffPolyline);

    // Crear el elemento SVG de la parte 'on' del toggler
    const togglerOnSvg = document.createElement("svg");
    togglerOnSvg.classList.add("toggler-on");
    togglerOnSvg.setAttribute("version", "1.1");
    togglerOnSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    togglerOnSvg.setAttribute("viewBox", "0 0 130.2 130.2");
    togglerLabel.appendChild(togglerOnSvg);

    const togglerOnLine1 = document.createElement("line");
    togglerOnLine1.classList.add("path", "line");
    togglerOnLine1.setAttribute("x1", "34.4");
    togglerOnLine1.setAttribute("y1", "34.4");
    togglerOnLine1.setAttribute("x2", "95.8");
    togglerOnLine1.setAttribute("y2", "95.8");
    togglerOnSvg.appendChild(togglerOnLine1);

    const togglerOnLine2 = document.createElement("line");
    togglerOnLine2.classList.add("path", "line");
    togglerOnLine2.setAttribute("x1", "95.8");
    togglerOnLine2.setAttribute("y1", "34.4");
    togglerOnLine2.setAttribute("x2", "34.4");
    togglerOnLine2.setAttribute("y2", "95.8");
    togglerOnSvg.appendChild(togglerOnLine2);

    const Suspender = document.createElement('label')
    Suspender.setAttribute('id', 'desactServ')
    Suspender.textContent = "Suspender";
    estadoServicio.appendChild(Suspender)


    var serviceCardDiv = document.createElement("div");

    serviceCardDiv.classList.add("service-card");
    serviceCardDiv.id = `servicioProv${index}`;

    serviceCardDiv.setAttribute('name', `servicioProv${index}`);
    serviceBox.appendChild(serviceCardDiv)
    var metaDiv = document.createElement("div");
    metaDiv.classList.add("meta");
    serviceCardDiv.appendChild(metaDiv)

    var photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.id = `imgServ${index}`;
    photoDiv.setAttribute("name", "imgServ");
    photoDiv.style.backgroundImage = "url()";
    metaDiv.appendChild(photoDiv)

    var detailsUl = document.createElement("ul");
    detailsUl.classList.add("details");
    metaDiv.appendChild(detailsUl)

    var authorLi = document.createElement("li");
    authorLi.classList.add("author");
    authorLi.id = `proveedor${index}`;
    authorLi.setAttribute("name", `proveedor${index}`);
    authorLi.setAttribute("value", `proveedor${index}`);
    detailsUl.appendChild(authorLi)

    var dateLi = document.createElement("li");
    dateLi.classList.add("date");
    dateLi.id = `precio${index}`;
    dateLi.setAttribute("name", "precio");
    dateLi.setAttribute("value", "precio");
    detailsUl.appendChild(dateLi)

    var tags1Li = document.createElement("li");
    tags1Li.classList.add(`tags${index}`);
    tags1Li.setAttribute("id", "tag")
    detailsUl.appendChild(tags1Li)

    var tags1Ul = document.createElement("ul");
    tags1Li.appendChild(tags1Ul)

    var tag1Li = document.createElement("li");
    tag1Li.id = "tag1";
    tag1Li.setAttribute("name", "tag1");
    tag1Li.setAttribute("value", "tag1");
    tags1Ul.appendChild(tag1Li)
    var tag1A = document.createElement("a");
    tag1A.setAttribute("type", "submit");
    tag1A.setAttribute("href", "");
    tag1Li.appendChild(tag1A);

    var tag2Li = document.createElement("li");
    tag2Li.id = "tag2";
    tag2Li.setAttribute("name", "tag2");
    tag2Li.setAttribute("value", "tag2");
    tags1Ul.appendChild(tag2Li)
    var tag2A = document.createElement("a");
    tag2A.setAttribute("type", "submit");
    tag2A.setAttribute("href", "");
    tag2Li.appendChild(tag2A);


    var tag3Li = document.createElement("li");
    tag3Li.id = "tag3";
    tag3Li.setAttribute("name", "tag3");
    tag3Li.setAttribute("value", "tag3");
    tags1Ul.appendChild(tag3Li)
    var tag3A = document.createElement("a");
    tag3A.setAttribute("type", "submit");
    tag3A.setAttribute("href", "");
    tag3Li.appendChild(tag3A);

    var tag4Li = document.createElement("li");
    tag4Li.id = "tag4";
    tag4Li.setAttribute("name", "tag4");
    tag4Li.setAttribute("value", "tag4");
    tags1Ul.appendChild(tag4Li)

    var tag4A = document.createElement("a");
    tag4A.setAttribute("type", "submit");
    tag4A.setAttribute("href", "");
    tag4Li.appendChild(tag4A);

    var tag5Li = document.createElement("li");
    tag5Li.id = "tag5";
    tag5Li.setAttribute("name", "tag5");
    tag5Li.setAttribute("value", "tag5");
    tags1Ul.appendChild(tag5Li)
    var tag5A = document.createElement("a");
    tag5A.setAttribute("type", "submit");
    tag5A.setAttribute("href", "");
    tag5Li.appendChild(tag5A);

    var tag6Li = document.createElement("li");
    tag6Li.id = "tag6";
    tag6Li.setAttribute("name", "tag6");
    tag6Li.setAttribute("value", "tag6");
    tags1Ul.appendChild(tag6Li)
    var tag6A = document.createElement("a");
    tag6A.setAttribute("type", "submit");
    tag6A.setAttribute("href", "");
    tag6Li.appendChild(tag6A);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    serviceCardDiv.appendChild(descriptionDiv)

    const h1 = document.createElement("h1");
    h1.id = `servName${index}`;
    h1.setAttribute("name", `servName${index}`);
    h1.setAttribute("value", `servName${index}`);
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedorServ${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    h2.setAttribute("value", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcion${index}`;
    p.setAttribute("name", `decripcion${index}`);
    p.setAttribute("value", `decripcion${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);

    const a = document.createElement("a");
    a.id = "verMas";
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Ver más"
    //a.href = "";
    readMoreP.appendChild(a);

}

export function serviciosPaquete(index) {
    // Crear elemento div con clase "serviceBox"
    const contenedor = document.getElementById('servProvided')
    const serviceBox = document.createElement('div');
    serviceBox.classList.add('serviceBox');
    serviceBox.setAttribute('id', `paqueteBox${index}`);
    serviceBox.setAttribute('name', 'serviceBox');
    serviceBox.style.display = 'block';
    contenedor.appendChild(serviceBox)

    const id = document.createElement('h1')
    id.setAttribute('id', `idServicio${index}`)
    id.setAttribute('data-value', "")
    serviceBox.appendChild(id)

    var checkServ = document.createElement('label')
    checkServ.classList.add("checkServ");
    checkServ.id = `checkServ${index}`
    serviceBox.appendChild(checkServ)

    var checkbox = document.createElement('input')

    checkbox.setAttribute('type', 'checkbox');

    // Establecer el título y el identificador del input
    checkbox.setAttribute('title', 'Añadir a paquete');
    checkbox.setAttribute('id', `Paquete${index}`);
    checkbox.setAttribute('name', 'addPaquete');
    checkServ.appendChild(checkbox)
    var checkmark = document.createElement('div')
    checkmark.classList.add('checkmark')
    checkServ.appendChild(checkmark)

    var serviceCardDiv = document.createElement("div");

    serviceCardDiv.classList.add("service-card");
    serviceCardDiv.id = `servicioProv${index}`;

    serviceCardDiv.setAttribute('name', `servicioProv${index}`);
    serviceBox.appendChild(serviceCardDiv)

    var metaDiv = document.createElement("div");
    metaDiv.classList.add("meta");
    serviceCardDiv.appendChild(metaDiv)

    var photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.id = `imgServ${index}`;
    photoDiv.setAttribute("name", "imgServ");
    photoDiv.style.backgroundImage = "url()";
    metaDiv.appendChild(photoDiv)

    var detailsUl = document.createElement("ul");
    detailsUl.classList.add("details");
    metaDiv.appendChild(detailsUl)

    var authorLi = document.createElement("li");
    authorLi.classList.add("author");
    authorLi.id = `proveedor${index}`;
    authorLi.setAttribute("name", `proveedor${index}`);
    authorLi.setAttribute("value", `proveedor${index}`);
    detailsUl.appendChild(authorLi)

    var dateLi = document.createElement("li");
    dateLi.classList.add("date");
    dateLi.id = `precio${index}`;
    dateLi.setAttribute("name", "precio");
    dateLi.setAttribute("value", "precio");
    detailsUl.appendChild(dateLi)

    var tags1Li = document.createElement("li");
    tags1Li.classList.add(`tags${index}`);
    tags1Li.setAttribute("id", "tag")
    detailsUl.appendChild(tags1Li)

    var tags1Ul = document.createElement("ul");
    tags1Li.appendChild(tags1Ul)

    var tag1Li = document.createElement("li");
    tag1Li.id = "tag1";
    tag1Li.setAttribute("name", "tag1");
    tag1Li.setAttribute("value", "tag1");
    tags1Ul.appendChild(tag1Li)
    var tag1A = document.createElement("a");
    tag1A.setAttribute("type", "submit");
    tag1A.setAttribute("href", "");
    tag1Li.appendChild(tag1A);

    var tag2Li = document.createElement("li");
    tag2Li.id = "tag2";
    tag2Li.setAttribute("name", "tag2");
    tag2Li.setAttribute("value", "tag2");
    tags1Ul.appendChild(tag2Li)
    var tag2A = document.createElement("a");
    tag2A.setAttribute("type", "submit");
    tag2A.setAttribute("href", "");
    tag2Li.appendChild(tag2A);


    var tag3Li = document.createElement("li");
    tag3Li.id = "tag3";
    tag3Li.setAttribute("name", "tag3");
    tag3Li.setAttribute("value", "tag3");
    tags1Ul.appendChild(tag3Li)
    var tag3A = document.createElement("a");
    tag3A.setAttribute("type", "submit");
    tag3A.setAttribute("href", "");
    tag3Li.appendChild(tag3A);

    var tag4Li = document.createElement("li");
    tag4Li.id = "tag4";
    tag4Li.setAttribute("name", "tag4");
    tag4Li.setAttribute("value", "tag4");
    tags1Ul.appendChild(tag4Li)

    var tag4A = document.createElement("a");
    tag4A.setAttribute("type", "submit");
    tag4A.setAttribute("href", "");
    tag4Li.appendChild(tag4A);

    var tag5Li = document.createElement("li");
    tag5Li.id = "tag5";
    tag5Li.setAttribute("name", "tag5");
    tag5Li.setAttribute("value", "tag5");
    tags1Ul.appendChild(tag5Li)
    var tag5A = document.createElement("a");
    tag5A.setAttribute("type", "submit");
    tag5A.setAttribute("href", "");
    tag5Li.appendChild(tag5A);

    var tag6Li = document.createElement("li");
    tag6Li.id = "tag6";
    tag6Li.setAttribute("name", "tag6");
    tag6Li.setAttribute("value", "tag6");
    tags1Ul.appendChild(tag6Li)
    var tag6A = document.createElement("a");
    tag6A.setAttribute("type", "submit");
    tag6A.setAttribute("href", "");
    tag6Li.appendChild(tag6A);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    serviceCardDiv.appendChild(descriptionDiv)

    const h1 = document.createElement("h1");
    h1.id = `servName${index}`;
    h1.setAttribute("name", `servName${index}`);
    h1.setAttribute("value", `servName${index}`);
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedorServ${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    h2.setAttribute("value", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcion${index}`;
    p.setAttribute("name", `decripcion${index}`);
    p.setAttribute("value", `decripcion${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);

    const a = document.createElement("a");
    a.id = "verMas";
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Ver más"

    //a.href = "";
    readMoreP.appendChild(a);
}

export function contenedorPaquetes(index) {
    // Crear elemento div con clase "serviceBox"
    const contenedor = document.getElementById('servPaq')
    const serviceBox = document.createElement('div');
    serviceBox.classList.add('serviceBox');
    serviceBox.setAttribute('id', `paqueteBox${index}`);
    serviceBox.setAttribute('name', 'serviceBox');
    serviceBox.style.display = 'block';
    contenedor.appendChild(serviceBox)

    const id = document.createElement('h1')
    id.setAttribute('id', `idPaquete${index}`)
    id.setAttribute('data-value', "")
    serviceBox.appendChild(id)

    const btnServices = document.createElement('div')
    btnServices.setAttribute('class', 'btnServices');
    serviceBox.appendChild(btnServices)

    const editServ = document.createElement('a')
    editServ.setAttribute('href', "#")
    editServ.setAttribute('title', "Editar")
    editServ.setAttribute('class', "servOpc")
    editServ.setAttribute('type', "submit")
    editServ.setAttribute('id', `editPaq${index}`)
    editServ.setAttribute('name', `editServ${index}`)
    btnServices.appendChild(editServ)

    const span = document.createElement('span')
    span.setAttribute('class', "fa-solid fa-pen-to-square")
    editServ.appendChild(span)

    const eliminar = document.createElement('a')
    eliminar.setAttribute('href', "#")
    eliminar.setAttribute('title', "Eliminar")
    eliminar.setAttribute('class', "servOpc")
    eliminar.setAttribute('type', "submit")
    eliminar.setAttribute('id', `deletePaq${index}`)
    eliminar.setAttribute('name', `deleteServ${index}`)
    btnServices.appendChild(eliminar)
    const span2 = document.createElement('span')
    span2.setAttribute('class', "fa-sharp fa-solid fa-trash")
    eliminar.appendChild(span2)

    const estadoServicio = document.createElement('div')
    estadoServicio.setAttribute('id', 'estadoServicio')
    btnServices.appendChild(estadoServicio)

    // Crear el elemento label
    const actServLabel = document.createElement("label");
    actServLabel.id = "actServ";
    actServLabel.textContent = "Activo";
    estadoServicio.appendChild(actServLabel);

    // Crear el elemento de la caja del toggler
    const togglerDiv = document.createElement("div");
    togglerDiv.classList.add("toggler");
    estadoServicio.appendChild(togglerDiv);

    // Crear el elemento input
    const togglerInput = document.createElement("input");
    togglerInput.id = `toggler-${index}`;
    togglerInput.name = `toggler-${index}`;
    togglerInput.type = "checkbox";
    togglerInput.value = index;
    togglerDiv.appendChild(togglerInput);

    // Crear el elemento label del toggler
    const togglerLabel = document.createElement("label");
    togglerLabel.setAttribute("for", `toggler-${index}`);
    togglerDiv.appendChild(togglerLabel);

    // Crear el elemento SVG de la parte 'off' del toggler
    const togglerOffSvg = document.createElement("svg");
    togglerOffSvg.classList.add("toggler-off");
    togglerOffSvg.setAttribute("version", "1.1");
    togglerOffSvg.setAttribute('xmlns', "http://www.w3.org/2000/svg")
    togglerOffSvg.setAttribute("viewBox", "0 0 130.2 130.2");
    togglerLabel.appendChild(togglerOffSvg);

    const togglerOffPolyline = document.createElement("polyline");
    togglerOffPolyline.classList.add("path", "check");
    togglerOffPolyline.setAttribute("points", "100.2,40.2 51.5,88.8 29.8,67.5");
    togglerOffSvg.appendChild(togglerOffPolyline);

    // Crear el elemento SVG de la parte 'on' del toggler
    const togglerOnSvg = document.createElement("svg");
    togglerOnSvg.classList.add("toggler-on");
    togglerOnSvg.setAttribute("version", "1.1");
    togglerOnSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    togglerOnSvg.setAttribute("viewBox", "0 0 130.2 130.2");
    togglerLabel.appendChild(togglerOnSvg);

    const togglerOnLine1 = document.createElement("line");
    togglerOnLine1.classList.add("path", "line");
    togglerOnLine1.setAttribute("x1", "34.4");
    togglerOnLine1.setAttribute("y1", "34.4");
    togglerOnLine1.setAttribute("x2", "95.8");
    togglerOnLine1.setAttribute("y2", "95.8");
    togglerOnSvg.appendChild(togglerOnLine1);

    const togglerOnLine2 = document.createElement("line");
    togglerOnLine2.classList.add("path", "line");
    togglerOnLine2.setAttribute("x1", "95.8");
    togglerOnLine2.setAttribute("y1", "34.4");
    togglerOnLine2.setAttribute("x2", "34.4");
    togglerOnLine2.setAttribute("y2", "95.8");
    togglerOnSvg.appendChild(togglerOnLine2);

    const Suspender = document.createElement('label')
    Suspender.setAttribute('id', 'desactPaq')
    Suspender.textContent = "Suspender";
    estadoServicio.appendChild(Suspender)


    var serviceCardDiv = document.createElement("div");

    serviceCardDiv.classList.add("service-card");
    serviceCardDiv.id = `paqueteProv${index}`;

    serviceCardDiv.setAttribute('name', `servicioProv${index}`);
    serviceBox.appendChild(serviceCardDiv)
    var metaDiv = document.createElement("div");
    metaDiv.classList.add("meta");
    serviceCardDiv.appendChild(metaDiv)

    var photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.id = `imgPaq${index}`;
    photoDiv.setAttribute("name", "imgServ");
    photoDiv.style.backgroundImage = "url()";
    metaDiv.appendChild(photoDiv)

    var detailsUl = document.createElement("ul");
    detailsUl.classList.add("details");
    metaDiv.appendChild(detailsUl)

    var authorLi = document.createElement("li");
    authorLi.classList.add("author");
    authorLi.id = `provPaq${index}`;
    authorLi.setAttribute("name", `proveedor${index}`);
    authorLi.setAttribute("value", `proveedor${index}`);
    detailsUl.appendChild(authorLi)

    var dateLi = document.createElement("li");
    dateLi.classList.add("date");
    dateLi.id = `precioPaq${index}`;
    dateLi.setAttribute("name", "precio");
    dateLi.setAttribute("value", "precio");
    detailsUl.appendChild(dateLi)

    var tags1Li = document.createElement("li");
    tags1Li.classList.add(`tags${index}`);
    tags1Li.setAttribute("id", "tag")
    detailsUl.appendChild(tags1Li)

    var tags1Ul = document.createElement("ul");
    tags1Li.appendChild(tags1Ul)

    var tag1Li = document.createElement("li");
    tag1Li.id = "tag1";
    tag1Li.setAttribute("name", "tag1");
    tag1Li.setAttribute("value", "tag1");
    tags1Ul.appendChild(tag1Li)
    var tag1A = document.createElement("a");
    tag1A.setAttribute("type", "submit");
    tag1A.setAttribute("href", "");
    tag1Li.appendChild(tag1A);

    var tag2Li = document.createElement("li");
    tag2Li.id = "tag2";
    tag2Li.setAttribute("name", "tag2");
    tag2Li.setAttribute("value", "tag2");
    tags1Ul.appendChild(tag2Li)
    var tag2A = document.createElement("a");
    tag2A.setAttribute("type", "submit");
    tag2A.setAttribute("href", "");
    tag2Li.appendChild(tag2A);





    var tag3Li = document.createElement("li");
    tag3Li.id = "tag3";
    tag3Li.setAttribute("name", "tag3");
    tag3Li.setAttribute("value", "tag3");
    tags1Ul.appendChild(tag3Li)
    var tag3A = document.createElement("a");
    tag3A.setAttribute("type", "submit");
    tag3A.setAttribute("href", "");
    tag3Li.appendChild(tag3A);

    var tag4Li = document.createElement("li");
    tag4Li.id = "tag4";
    tag4Li.setAttribute("name", "tag4");
    tag4Li.setAttribute("value", "tag4");
    tags1Ul.appendChild(tag4Li)

    var tag4A = document.createElement("a");
    tag4A.setAttribute("type", "submit");
    tag4A.setAttribute("href", "");
    tag4Li.appendChild(tag4A);

    var tag5Li = document.createElement("li");
    tag5Li.id = "tag5";
    tag5Li.setAttribute("name", "tag5");
    tag5Li.setAttribute("value", "tag5");
    tags1Ul.appendChild(tag5Li)
    var tag5A = document.createElement("a");
    tag5A.setAttribute("type", "submit");
    tag5A.setAttribute("href", "");
    tag5Li.appendChild(tag5A);

    var tag6Li = document.createElement("li");
    tag6Li.id = "tag6";
    tag6Li.setAttribute("name", "tag6");
    tag6Li.setAttribute("value", "tag6");
    tags1Ul.appendChild(tag6Li)
    var tag6A = document.createElement("a");
    tag6A.setAttribute("type", "submit");
    tag6A.setAttribute("href", "");
    tag6Li.appendChild(tag6A);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    serviceCardDiv.appendChild(descriptionDiv)

    const h1 = document.createElement("h1");
    h1.id = `PaqName${index}`;
    h1.setAttribute("name", `servName${index}`);
    h1.setAttribute("value", `servName${index}`);
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedorPaq${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    h2.setAttribute("value", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcionPaq${index}`;
    p.setAttribute("name", `decripcion${index}`);
    p.setAttribute("value", `decripcion${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);

    const a = document.createElement("a");
    a.id = "verMas";
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Ver más"

    //a.href = "";
    readMoreP.appendChild(a);

}
