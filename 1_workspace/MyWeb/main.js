const pushLike = document.getElementById("like")
const display = document.getElementById("display")
const myName = document.getElementById("name")
const univ = document.getElementById("univ")
const circle = document.getElementById("circle")
const hob = document.getElementById("hob")
const nameButton = document.getElementById("name-button")
const univButton = document.getElementById("univ-button")
const circleButton = document.getElementById("circle-button")
const hobButton = document.getElementById("hob-button")

let like = 0
display.textContent = 0

pushLike.onclick = function(){
  like = like+1
  display.textContent = like
}

nameButton.onclick = function(){
  if(like>9){
    myName.textContent="名前：谷陽一朗"
    like -= 10
    display.textContent = like
  }
}

univButton.onclick = function(){
  if(like>14){
    univ.textContent="大学・学部：京都大学総合人間学部"
    like -= 15
    display.textContent = like
  }
}
circleButton.onclick = function(){
  if(like>14){
    circle.textContent="サークル：アカペラ"
    like -= 15
    display.textContent = like
  }
}
hobButton.onclick = function(){
  if(like>19){
    hob.textContent="趣味：ギター・読書"
    like -= 20
    display.textContent = like
  }
}
