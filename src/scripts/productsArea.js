export function createProductsArea(){
    document.querySelector("body").insertAdjacentHTML("beforeend", 
    `
    <div class="products__area">
        <h3 class="finded__albums">Albums Encontrados</h3>
        <div class="products__card__container"></div>
    </div>
    `)
}