export function createValueFilter(){
    document.querySelector("body").insertAdjacentHTML("beforeend", 
    `
    <div class="value__filter">
        <div>
            <h3 class="select__price">Definir preço</h3>
            <span id="value"></span>
        </div>

        <input type="range" min="0" value="0"max="400" step="1" id="range__input" >
    </div>
    `)
}
