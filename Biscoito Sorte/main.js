const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
    handleClick()
  }
})


btnReset.addEventListener('click', function(){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  randomNumber = Math.round(Math.random() *10)
})


function handleClick(){
  screen1.classList.add("hide")
  screen2.classList.remove("hide")


  switch(randomNumber) {
    case 0: screen2.querySelector("h3").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
    case 1: screen2.querySelector("h3").innerText = "É em meio a dificuldade que se encontra a oportunidade."
    break
    case 2: screen2.querySelector("h3").innerText = "O êxito é ir de frustração a frustração sem perder a animação"
    break
    case 3: screen2.querySelector("h3").innerText = "Da mesma forma que a felicidade não dura para sempre, a tristeza também não"
    break
    case 4: screen2.querySelector("h3").innerText = "As dores não são eternas, se permita, o seu melhor é o suficiente" 
    break
    case 5: screen2.querySelector("h3").innerText = "Se nada der certo hoje, acorde mais cedo amanhã e tente novamente"
    break
    case 6: screen2.querySelector("h3").innerText = "Está na hora de deixar o passado no lugar dele e seguir em frente"
    break
    case 7: screen2.querySelector("h3").innerText = "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo"
    break
    case 8: screen2.querySelector("h3").innerText = "Você só vai vencer amanhã, se não desistir hoje"
    break   
    case 9: screen2.querySelector("h3").innerText = "Você se aproxima cada vez mais do seu objetivo, a cada passo que você dá"
    break
    case 10: screen2.querySelector("h3").innerText = "Confie no seu potencial, encare os seus medos e faça da bravura o seu mantra diário"
    break
  }
}

btnReset.addEventListener('click', function(){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  randomNumber = Math.round(Math.random() *10)
})

