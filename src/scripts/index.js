import { createHeader } from "./createHeader.js";
import { createCategoryFilters } from "./categoryFilter.js";
import { createValueFilter } from "./valueFilter.js";
import { createProductsArea } from "./productsArea.js";
import { products } from "./productsData.js";

createValueFilter();

document.getElementById("range__input").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #9747ff 0%, #9747ff ' + value + '%, #ced4da ' + value + '%, #ced4da 100%)'
  };
function valueFilter(){
    
    const valorInput = document.querySelector("#range__input");
    document.getElementById("value").innerHTML = `Até R$ ${valorInput.value}`;

    valorInput.addEventListener("input", () =>{
        document.getElementById("value").textContent = `Até R$ ${valorInput.value}`;
        valueToCreate = Number(valorInput.value);
        createProductsCards(filterType, valueToCreate);
        changeTheme()
    })
}

createHeader();
createCategoryFilters();
valueFilter()
createProductsArea();

let valueToCreate;
let filterType = "Todos";
function categoryFilterButtons(){
    const all = document.querySelector("#Todos")
    const pop = document.querySelector("#pop")
    const MPB = document.querySelector("#MPB")
    const rock = document.querySelector("#rock")

    all.addEventListener("click", () => {
        filterType = "Todos"
        createProductsCards(filterType, valueToCreate);
        changeTheme()
    })
    pop.addEventListener("click", () => {
        filterType = "pop"
        createProductsCards(filterType, valueToCreate);
        changeTheme()
    })
    MPB.addEventListener("click", () => {
        filterType = "MPB"
        createProductsCards(filterType, valueToCreate);
        changeTheme()
    })
    rock.addEventListener("click", () => {
        filterType = "rock"
        createProductsCards(filterType, valueToCreate);
        changeTheme()
    })
}
categoryFilterButtons()

function createProductsCards(category, value){
    const cardsContainer = document.querySelector(".products__card__container")
    let cards = products;
    if(category === "Todos"){
        cards = products;
    } else if(category === "pop"){
        cards = products.filter(array => array.category === 1);
    } else if(category === "MPB"){
        cards = products.filter(array => array.category === 2);
    } else if(category === "rock"){
        cards = products.filter(array => array.category === 8);
    } else{
        cards = {};
    }


    const filteredCards = cards.filter(array => array.price < value)

    cardsContainer.innerHTML = "";
    filteredCards.forEach(element => {
        cardsContainer.insertAdjacentHTML("beforeend", 
        `
        <div class="product__card">
            <img class="product__img" src="${element.img}" alt="">
            
            <div class="card__text">
                <div class="product__author">
                    <p class="band">${element.band}</p>
                    <p class="year">${element.year}</p>
                </div>

                <h3 class="product__title">${element.title}</h3>

                <div class="product__value">
                    <p class="product__price">R$ ${element.price.toFixed(2)}</p>
                    <button class="buy__button">Comprar</button>
                </div>
            </div>
        </div>
        `)
    });
}
createProductsCards("Todos", 200);

let darkMode = false;
darkMode = localStorage.getItem("darkMode") === "true";

changeTheme()
console.log(darkMode)

function buttonTheme() {
    const buttonDark = document.querySelector("#themeClick");
    const iconTheme = document.querySelector("#icon__theme");

    buttonDark.addEventListener("click", () => {
        if (darkMode === false) {
            buttonDark.setAttribute("class", "dark__mode--on");
            iconTheme.setAttribute("class", "fas fa-sun fa-lg");
            iconTheme.setAttribute("style", "color: #868e96;");
            darkMode = true;
        } else {
            buttonDark.setAttribute("class", "dark__mode--off");
            iconTheme.setAttribute("class", "fas fa-moon fa-lg");
            iconTheme.setAttribute("style", "color: #2b2f33;");
            darkMode = false;
        }
        changeTheme();
         localStorage.setItem("darkMode", darkMode);
    });
}
buttonTheme();

function changeTheme(){
    if (darkMode === true) {
    const body = document.querySelector("body")
    const logo = document.querySelector(".logo")
    const musicGender = document.querySelector(".music__gender")
    const selectPrice = document.querySelector(".select__price")
    const valueFilter = document.querySelector("#value")
    const findedAlbuns = document.querySelector(".finded__albums")
    const cardText = document.querySelectorAll(".card__text")
    const band = document.querySelectorAll(".band")
    const year = document.querySelectorAll(".year")
    const albumTitle = document.querySelectorAll(".product__title")
    const productPrice = document.querySelectorAll(".product__price")
    const buy = document.querySelectorAll(".buy__button")
    const categoryButtons = document.querySelectorAll(".filter__button")
    const buttonDark = document.querySelector("#themeClick")
    const iconTheme = document.querySelector("#icon__theme")

    body.style.backgroundColor = "#000000"
    logo.style.color = "var(--color-grey-8)"
    musicGender.style.color = "var(--color-grey-4)"
    selectPrice.style.color = "var(--color-grey-4)"
    valueFilter.style.color = "var(--color-grey-3)"
    findedAlbuns.style.color = "var(--color-grey-4)"
    cardText.forEach(array => {
        array.style.background = "var(--color-grey-1)"
    })
    band.forEach(array => {
        array.style.color = "var(--color-grey-3)"
    })
    year.forEach(array => {
        array.style.color = "var(--color-grey-3)"
    })
    albumTitle.forEach(array => {
        array.style.color = "var(--color-grey-8)"
    })
    productPrice.forEach(array => {
        array.style.color = "var(--color-grey-8)"
    })
    buy.forEach(array => {
        array.setAttribute("class", "buy__button__dark")
    })
    categoryButtons.forEach(button => {
        button.classList.remove("filter__button")
        button.classList.add("filter__button__dark")
      });
      console.log(buttonDark)
    buttonDark.setAttribute("class", "dark__mode--on")
    iconTheme.setAttribute("class", "fas fa-sun fa-lg")
    iconTheme.setAttribute("style", "color: #868e96;")
}else if (darkMode === false) {
    const body = document.querySelector("body")
    const logo = document.querySelector(".logo")
    const musicGender = document.querySelector(".music__gender")
    const selectPrice = document.querySelector(".select__price")
    const valueFilter = document.querySelector("#value")
    const findedAlbuns = document.querySelector(".finded__albums")
    const cardText = document.querySelectorAll(".card__text")
    const band = document.querySelectorAll(".band")
    const year = document.querySelectorAll(".year")
    const albumTitle = document.querySelectorAll(".product__title")
    const productPrice = document.querySelectorAll(".product__price")
    const buy = document.querySelectorAll(".buy__button__dark")
    const categoryButtons = document.querySelectorAll(".filter__button__dark")
    const buttonLight = document.querySelector("#themeClick")
    const iconTheme = document.querySelector("#icon__theme")


    body.style.backgroundColor = "var(--color-white-fixed)"
    logo.style.color = "var(--color-grey-1)"
    musicGender.style.color = "var(--color-grey-2)"
    selectPrice.style.color = "var(--color-grey-1)"
    valueFilter.style.color = "var(--color-grey2)"
    findedAlbuns.style.color = "var(--color-grey-1)"
    cardText.forEach(array => {
        array.style.background = "var(--color-grey-8)"
    })
    band.forEach(array => {
        array.style.color = "var(--color-grey-2)"
    })
    year.forEach(array => {
        array.style.color = "var(--color-grey-2)"
    })
    albumTitle.forEach(array => {
        array.style.color = "var(--color-grey-1)"
    })
    productPrice.forEach(array => {
        array.style.color = "var(--color-grey-1)"
    })
    buy.forEach(array => {
        array.setAttribute("class", "buy__button")
    })
    categoryButtons.forEach(button => {
        button.classList.remove("filter__button__dark")
        button.classList.add("filter__button")
    });
    if (buttonLight) {
        buttonLight.setAttribute("class", "dark__mode--off");
    }else{
        
    }
    buttonLight.setAttribute("class", "dark__mode--off")
    iconTheme.setAttribute("class", "fas fa-moon fa-lg")
    iconTheme.setAttribute("style", "color: #2b2f33;")
}
}

