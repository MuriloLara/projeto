function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    }
    else{
        img.setAttribute('src', './assets/avatar.png')
    }

    // substituir a imagem
    // se estiver light mode, adicionar a imagem light
    // se estiver dark mode, manter a imagem normal
}