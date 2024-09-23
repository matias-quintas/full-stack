function main() 
{
    let verProductos = JSON.parse(jsonProducts);

    let divProductos = document.getElementById('productos');

    for (let i = 0; i < verProductos.length; i++) {
        // Inserto los productos en el elemento id Productos para cargarlos de manera dinamica independientemente del json
        if (verProductos[i].Discount != 0) {
            divProductos.innerHTML += (`
                <div class="producto">
                    <img src="${verProductos[i].Img}">
                    <h3 class="titulo">${verProductos[i].Title}</h3>
                    <p class="descripcion">${verProductos[i].Excerpt}</p>
                    <span class="sale">$${(verProductos[i].Price * (1 - (verProductos[i].Discount / 100))).toFixed(2)} 
                        <span class="pAnterior">${verProductos[i].Price}</span>
                    </span>
                    <p class="sku">SKU: ${verProductos[i].SKU}</p>
                </div>
            `);
        } else {
            divProductos.innerHTML += (`
                <div class="producto">
                    <img src="${verProductos[i].Img}">
                    <h3 class="titulo">${verProductos[i].Title}</h3>
                    <p class="descripcion">${verProductos[i].Excerpt}</p>
                    <span class="precio">$${verProductos[i].Price}</span>
                    <p class="sku">SKU: ${verProductos[i].SKU}</p>
                </div>
            `);
        }
    }
}

main();
