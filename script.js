function toggleMode() {
  const html = document.documentElement
  //troca de class
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //se tiver light mode, add a img light
  if (html.classList.contains("light")) {
    img.setAttribute("src" , "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Bruno Souza com Óculos")
  } else {
    //se tiver a sem light, manter a img normal
    img.setAttribute("src" , "./assets/avatar.png")
  }
}
