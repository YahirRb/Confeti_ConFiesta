export function crearContenedor(index) {
    var x;
    if (index % 2 == 0) {
        x = 'contenidoDer'
    } else {
        x = 'contenidoIzq'
    }

    const content = document.getElementById(x)
    var serviceCardDiv = document.createElement("div");
    if (index % 2 == 0) {
        serviceCardDiv.classList.add("service-card", "alt");
    } else {
        serviceCardDiv.classList.add("service-card");
    }


    serviceCardDiv.id = `servicio0${index}`;
    serviceCardDiv.style.display = "none";
    content.appendChild(serviceCardDiv)
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
    h1.setAttribute("name", "servName3");
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedor${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcion${index}`;
    p.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);
    const a = document.createElement("a");
    a.setAttribute("class", "verMasBtn");
    a.id = `${index - 1}`;
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Ver más"
    const idServicio = document.createElement('h1');
    idServicio.id = `idServicio${index - 1}`
    idServicio.setAttribute("data-value", "")
    //a.href = "";
    readMoreP.appendChild(a);
    readMoreP.appendChild(idServicio)





}


export function contenedorPendientes(index) {


    const content = document.getElementById('contenidoIzq')
    var serviceCardDiv = document.createElement("div");


    serviceCardDiv.classList.add("service-card");



    serviceCardDiv.id = `servicio0${index}`;
    serviceCardDiv.style.display = "none";
    content.appendChild(serviceCardDiv)
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
    h1.setAttribute("name", "servName3");
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedor${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcion${index}`;
    p.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);
    const a = document.createElement("a");
    a.setAttribute("class", "verMasBtn");
    a.id = `${index - 1}`;
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Detalle contrato"
    const idServicio = document.createElement('h1');
    idServicio.id = `idServicio${index - 1}`
    idServicio.setAttribute("data-value", "")
    //a.href = "";
    readMoreP.appendChild(a);
    readMoreP.appendChild(idServicio)

}


export function contenedorRealizados(index) {


    const content = document.getElementById('contenidoDer')
    var serviceCardDiv = document.createElement("div");


    serviceCardDiv.classList.add("service-card");



    serviceCardDiv.id = `servicio0${index}`;
    serviceCardDiv.style.display = "none";
    content.appendChild(serviceCardDiv)
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
    h1.setAttribute("name", "servName3");
    descriptionDiv.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.id = `proveedor${index}`;
    h2.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(h2)

    const p = document.createElement("p");
    p.id = `decripcion${index}`;
    p.setAttribute("name", `proveedor${index}`);
    descriptionDiv.appendChild(p)

    const readMoreP = document.createElement("p");
    readMoreP.classList.add("read-more");
    descriptionDiv.appendChild(readMoreP);
    const a = document.createElement("a");
    a.setAttribute("class", "verMasBtn");
    a.id = `${index - 1}`;
    a.setAttribute("name", `verMas${index}`);
    a.setAttribute("type", "submit");
    a.setAttribute("value", `verMas${index}`)
    a.textContent = "Detalle contrato"
    const idServicio = document.createElement('h1');
    idServicio.id = `idServicio${index - 1}`
    idServicio.setAttribute("data-value", "")
    //a.href = "";
    readMoreP.appendChild(a);
    readMoreP.appendChild(idServicio)

}