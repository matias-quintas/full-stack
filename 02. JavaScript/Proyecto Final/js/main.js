function cl(something) {
    console.log(something);
}

function main() {
    for (const element of document.getElementsByClassName('section')) {
        switch (element.id) {
            case "teclados": 
                for (let i = 0; i < chargeJSON().length; i++) {
                    if (chargeJSON()[i].category == "electric-keyboards") {
                        if (chargeJSON()[i].off > 0) {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p><span class="discount">${chargeJSON()[i].off}% OFF</span> ${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        } else {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p>${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        }
                    }
                }
                break;
            case "pianos":
                for (let i = 0; i < chargeJSON().length; i++) {
                    if (chargeJSON()[i].category == "electric-pianos") {
                        if (chargeJSON()[i].off > 0) {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p><span class="discount">${chargeJSON()[i].off}% OFF</span> ${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        } else {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p>${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        }
                    }
                }
                break;
            case "synthes":
                for (let i = 0; i < chargeJSON().length; i++) {
                    if (chargeJSON()[i].category == "synths") {
                        if (chargeJSON()[i].off > 0) {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p><span class="discount">${chargeJSON()[i].off}% OFF</span> ${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        } else {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p>${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        }
                    }
                }
                break;
            case "amplis":
                for (let i = 0; i < chargeJSON().length; i++) {
                    if (chargeJSON()[i].category == "amplis") {
                        if (chargeJSON()[i].off > 0) {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p><span class="discount">${chargeJSON()[i].off}% OFF</span> ${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        } else {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p>${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        }
                    }
                }
                break;
            case "extras":
                for (let i = 0; i < chargeJSON().length; i++) {
                    if (chargeJSON()[i].category == "accesories") {
                        if (chargeJSON()[i].off > 0) {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p><span class="discount">${chargeJSON()[i].off}% OFF</span> ${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        } else {
                            element.lastElementChild.innerHTML += `
                            <div class="card">
                                <a href="${chargeJSON()[i].refer_link}" target="_blank">
                                    <div class="productImgBox">
                                    <img src="${chargeJSON()[i].img}"
                                        alt="${chargeJSON()[i].title}">
                                    </div>
                                    <div class="productContent">
                                    <div class="productTitle">
                                        <p>${chargeJSON()[i].title}</p>
                                    </div>
                                    <div class="productDesc">
                                        <p>${chargeJSON()[i].description}</p>
                                    </div>
                                    <div class="price">
                                        <p>${chargeJSON()[i].price} €</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        `
                        }
                    }
                }
                break;
            default: cl("error");
                break;
        }
    }
    
}

function chargeJSON(products) {
    products = JSON.parse(jsonProducts);
    return products
}

main();

