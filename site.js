



let sobremim = document.querySelector(".sobremim")
let body = document.querySelector("body")
let geral = document.querySelector(".geral")
let planetas = document.querySelector(".planetas")
let button = document.querySelector("button")
let github = document.querySelector(".github")



function light()
{

    if (button.innerHTML == "Light Mode") {
        button.innerHTML = "Dark Mode";
      } else {
        button.innerHTML = "Light Mode";
      }
      button.classList.toggle("buttonnovo")
planetas.classList.toggle("planetas2")
body.classList.toggle("lightmode")
sobremim.classList.toggle("sobre")
geral.classList.toggle("geralnovo")
geral.classList.toggle("novafonte")




}

//github
fetch("https://api.github.com/users/EduFreitas2").then((response) => {
console.log(response)
return response.json()
}).then((data) => {

github.innerHTML = "<a href='https://github.com/EduFreitas2'><img src='"+ data.avatar_url+"'> <h3>" + data.login + " </a></h3>"
github.classList.add("gitshubs")
});








