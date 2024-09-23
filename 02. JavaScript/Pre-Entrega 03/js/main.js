let verProductos = JSON.parse(jsonProducts);

let divProductos = document.getElementById('productos');

for (let i = 0; i < verProductos.length;) {
    divProductos.innerHTML += (`<div class="producto"><img src="${verProductos[i].Img}"><h3 class="titulo">${verProductos[i].Title}</h3><p class="descripcion">${verProductos[i].Excerpt}</p><span class="precio">$${verProductos[i].Price}</span></div>`);
    i++;
}