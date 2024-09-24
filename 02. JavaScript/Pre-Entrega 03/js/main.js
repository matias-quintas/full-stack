function main() {
    const verProductos = JSON.parse(jsonProducts);
    let divProductos = document.getElementById('productos');
    let secCarrito = document.getElementById('secCarrito');
    let verCarrito = JSON.parse(localStorage.getItem('verCarrito')) || [];

    function actualizarCarrito() {
        if (verCarrito.length === 0) {
            secCarrito.innerHTML += '<p>El carrito está vacío</p>';
            return;
        }

        verCarrito.forEach((producto, i) => {
            secCarrito.innerHTML += (`
                <div class="producto-carrito">
                    <img src="${producto.Img}">
                    <h3 class="titulo">${producto.Title}</h3>
                    <span class="precio">$${producto.Price}</span>
                    <span class="sku">SKU: ${producto.SKU}</span>
                    <button id="remove${i}" class="removeFromCart" type="button">X</button>
                </div>
            `);
        });

        const botonesRemove = document.getElementsByClassName("removeFromCart");
        Array.from(botonesRemove).forEach((button, i) => {
            button.addEventListener("click", function () {
                verCarrito.splice(i, 1);
                localStorage.setItem('verCarrito', JSON.stringify(verCarrito));
                actualizarCarrito();
                location.reload();
            });
        });
    }

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
            actualizarCarrito();
            location.reload();
        });
    });

    actualizarCarrito();
}

main();