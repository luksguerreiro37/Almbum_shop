export function createCategoryFilters(){
    document.querySelector("body").insertAdjacentHTML("beforeend", 
    `
    <div class="category__filter">
        <h2 class="music__gender">Gênero Musical</h2>

        <div>
        <button class="filter__button" id="Todos">Todos</button>
        <button class="filter__button" id="pop">Pop</button>
        <button class="filter__button" id="MPB">MPB</button>
        <button class="filter__button" id="forro">Forró</button>
        <button class="filter__button" id="samba">Samba</button>
        <button class="filter__button" id="baiao">Baião</button>
        <button class="filter__button" id="rap">Rap</button>
        <button class="filter__button" id="hip-hop">Hip-Hop</button>
        <button class="filter__button" id="rock">Rock</button>
        <button class="filter__button" id="reggae">Reggae</button>
        <button class="filter__button" id="country">Country</button>
        <button class="filter__button" id="gospel">Gospel</button>
        </div>
    </div>
    `)
}