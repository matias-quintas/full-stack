function cl(something) {
    console.log(something);
}

function chargeJSON() {
    if (typeof jsonProducts !== 'undefined') {
        return JSON.parse(jsonProducts);
    }
    throw new Error('jsonProducts is not defined');
}

function renderProductCard(element, product) {
    let productHtml = `
    <div class="card">
        <a href="${product.refer_link}" target="_blank">
            <div class="productImgBox">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="productContent">
                <div class="productTitle">
                    <p>${product.title}</p>
                </div>
                <div class="productDesc">
                    <p>${product.description}</p>
                </div>
                <div class="price">`; // Cierre de comillas corregido

    if (product.off > 0) {
        productHtml += `
                    <p><span class="final-price">${parseFloat(product.price).toFixed(2)} €</span> <span class="discount">${product.off}% OFF</span></p>`; // Formateo del precio
    } else {
        productHtml += `
                    <p>${parseFloat(product.price).toFixed(2)} €</p>`; // Formateo del precio
    }

    productHtml += `
                </div>
            </div>
        </a>
    </div>`;

    if (element.lastElementChild) {
        element.lastElementChild.innerHTML += productHtml;
    } else {
        console.error(`No lastElementChild found for section: ${element.id}`);
    }
}


function setupHamburgerMenu() {
    const actionMenuButton = document.querySelector(".hbImg");
    const navSection = document.querySelector(".menuMobile");
    const actionExitButton = document.querySelector(".menuMobileContainer");

    function mostrarNav() {
        navSection.style.display = "block";
    }

    function closeNavBar() {
        navSection.style.display = "none";
    }

    actionMenuButton.onclick = mostrarNav;
    actionExitButton.onclick = closeNavBar;
}

function main() {
    let products;
    try {
        products = chargeJSON();
    } catch (error) {
        console.error(error.message);
        return;
    }
    const sections = document.getElementsByClassName('section');
    const categoryMap = {
        teclados: "electric-keyboards",
        pianos: "electric-pianos",
        synthes: "synths",
        amplis: "amplis",
        extras: "accessories"
    };
    for (const element of sections) {
        const category = categoryMap[element.id];
        if (!category) {
            console.error(`Unknown section ID: ${element.id}`);
            continue;
        }
        for (const product of products) {
            if (product.category === category) {
                renderProductCard(element, product);
            }
        }
    }
    setupHamburgerMenu();
}

main();