const stock = [
    {
        id: 1,
        art: "Playera Furia Rock", 
        precio: "$550.00",
        img: "https://png.pngtree.com/png-clipart/20230825/original/pngtree-white-t-shirt-template-front-picture-image_8483336.png"
    },
    {
        id: 2,
        art: "Gorra Furia",
         precio: "$250.00",
         img: "https://img.pikbest.com/origin/10/52/11/48IpIkbEsThqg.png!w700wp"
    },    ];

const divLista = document.getElementById("lista-merch");

function renderShop(){
    divLista.innerHTML = "";
    stock.forEach(producto => {
        const card = document.createElement("div");
        card.className = document.createElement("div");
        card.innerHTML = `
        <img src="${producto.img}" alt="${producto.art}" class="img-producto">
        <div class="info-compra">
            <p class="nombre-art">${producto.art}</p>
            <p class="precio-art">${producto.precio}</p>
            <button class"btn-comprar" onclick="procesarCompra('${producto.art}')">Comprar Ahora</button>
            </div>
        `;
        divLista.appendChild(card);   
     });
}

function procesarCompra(nombre){
    alert(`Has comprado: ${nombre}\n¡Gracias por tu compra!`);

}

renderShop();