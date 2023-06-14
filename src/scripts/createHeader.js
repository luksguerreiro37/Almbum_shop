export function createHeader(){
    document.querySelector("body").insertAdjacentHTML("afterbegin", 
    `
    <header>
    <h1 class="logo">Open Music</h1>
    <button class="dark__mode--off" id="themeClick"><i id="icon__theme" class="fas fa-moon fa-lg" style="color: #2b2f33;;"></i></button>
    </header>
    `)
}