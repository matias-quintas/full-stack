function cl(algo) {
    console.log(algo);
}

async function cargarJSON() {
    try {
        const response = await fetch('./json/products.json');
        if (!response.ok) throw new Error('Error al cargar los datos');
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

function renderizarTarjetaProducto(elemento, producto) {
    let productoHtml = `
        <div class="card">
            <a href="${producto.refer_link}" target="_blank">
                <div class="productImgBox">
                    <img src="${producto.img}" alt="${producto.title}">
                </div>
                <div class="productContent">
                    <div class="productTitle">
                        <p>${producto.title}</p>
                    </div>
                    <div class="productDesc">
                        <p>${producto.description}</p>
                    </div>
                    <div class="price">`;

    if (producto.off > 0) {
        productoHtml += `<p><span class="final-price">${producto.price} €</span> <span class="discount">${producto.off}% OFF</span></p>`;
    } else {
        productoHtml += `<p>${producto.price} €</p>`;
    }

    productoHtml += `</div></div></a>
            <p class="add-to-cart" 
                style="border:1px solid lightgray; padding:16px; text-align: center; font-size: 14px; cursor: pointer;"
                onclick="agregarAlCarrito(${JSON.stringify(producto).replace(/"/g, '&quot;')})">
                Añadir al carrito
            </p>
        </div>`;

    if (elemento.lastElementChild) {
        elemento.lastElementChild.innerHTML += productoHtml;
    } else {
        console.error(`No se encontró lastElementChild para la sección: ${elemento.id}`);
    }
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');

function actualizarContador() {
    cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}

function renderizarCarrito() {
    cartItems.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.style.display = 'flex';
        li.style.flexDirection = 'column';
        li.style.marginBottom = '10px';
        li.style.padding = '10px';
        li.style.border = '1px solid #e0e0e0';
        li.style.borderRadius = '5px';
        li.style.backgroundColor = '#f9f9f9';
        li.innerHTML = `
            <span>${item.title}</span>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span>Uni.: </span>
                <input type="number" min="1" max="10" value="${item.cantidad}" onchange="cambiarCantidadManual(${index}, this.value)" style="width: 50px; margin: 0 10px;"/>
                <button onclick="cambiarCantidad(${index}, 1)" style="padding: 5px 10px;">+</button>
                <button onclick="cambiarCantidad(${index}, -1)" style="padding: 5px 10px;">-</button>
                <button onclick="eliminarDelCarrito(${index})" style="padding: 5px 10px; margin-left: 10px;">❌</button> <!-- Añadido padding -->
            </div>
        `;

        cartItems.appendChild(li);
    });
}

function agregarAlCarrito(producto) {
    const existente = carrito.find(item => item.title === producto.title);
    if (existente) {
        existente.cantidad += 1;
    } else {
        if (carrito.length < 10) {
            carrito.push({ ...producto, cantidad: 1 });
        } else {
            alert("No puedes agregar más de 10 productos diferentes al carrito.");
            return;
        }
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

function cambiarCantidad(index, cambio) {
    const item = carrito[index];
    item.cantidad = Math.max(1, Math.min(item.cantidad + cambio, 10));
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

function cambiarCantidadManual(index, cantidad) {
    const item = carrito[index];
    const nuevaCantidad = Math.max(1, Math.min(parseInt(cantidad), 10));
    item.cantidad = nuevaCantidad;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

document.getElementById('cart-icon').addEventListener('click', () => {
    cartSidebar.classList.toggle('active');
    renderizarCarrito();
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

actualizarContador();

async function main() {
    let productos;
    try {
        productos = await cargarJSON();
    } catch (error) {
        console.error(error.message);
        return;
    }
    const secciones = document.getElementsByClassName('section');
    const mapaCategorias = {
        teclados: "electric-keyboards",
        pianos: "electric-pianos",
        synthes: "synths",
        amplis: "amplis",
        extras: "accessories"
    };

    for (const elemento of secciones) {
        const categoria = mapaCategorias[elemento.id];
        if (!categoria) {
            console.error(`ID de sección desconocido: ${elemento.id}`);
            continue;
        }
        for (const producto of productos) {
            if (producto.category === categoria) {
                renderizarTarjetaProducto(elemento, producto);
            }
        }
    }
}

main();
