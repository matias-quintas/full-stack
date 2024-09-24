function main() 
{
    const verProductos = JSON.parse(jsonProducts);

    let divProductos = document.getElementById('productos');

    let verCarrito = JSON.parse(localStorage.getItem('verCarrito')) || [];

    verProductos.forEach((producto, i) => {
        if (producto.Discount != 0) {
            divProductos.innerHTML += (`
                <div class="producto">
                    <img src="${producto.Img}">
                    <h3 class="titulo">${producto.Title}</h3>
                    <p class="descripcion">${producto.Excerpt}</p>
                    <span class="sale">$${(producto.Price * (1 - (producto.Discount / 100))).toFixed(2)} 
                        <span class="pAnterior">$${producto.Price}</span>
                    </span>
                    <span class="sku">SKU: ${producto.SKU}</span>
                    <button id="btn0${i}" class="addToCart" type="button">Añadir al carrito</button>
                </div>
            `);
        } else {
            divProductos.innerHTML += (`
                <div class="producto">
                    <img src="${producto.Img}">
                    <h3 class="titulo">${producto.Title}</h3>
                    <p class="descripcion">${producto.Excerpt}</p>
                    <span class="precio">$${producto.Price}</span>
                    <span class="sku">SKU: ${producto.SKU}</span>
                    <button id="btn${i}" class="addToCart" type="button">Añadir al carrito</button>
                </div>
            `);
        }
    });

    const botonesCart = document.getElementsByClassName("addToCart");

    Array.from(botonesCart).forEach((button, i) => {
        button.addEventListener("click", function () {
            const productoSeleccionado = verProductos[i];

            verCarrito.push(productoSeleccionado);

            localStorage.setItem('verCarrito', JSON.stringify(verCarrito));

            console.log("Producto añadido:", productoSeleccionado);
            console.log("Carrito actual:", verCarrito);
        });
    });
    console.log(Array.from(botonesCart))
}

main();
