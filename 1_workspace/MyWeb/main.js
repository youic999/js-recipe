const pushLike = document.getElementById("like")
const display = document.getElementById("display")
const myName = document.getElementById("name")
const motherName = document.getElementById("mother")

let like = 0
display.textContent = 0

pushLike.onclick = function(){
  like = like+1
  display.textContent = like
  if(like===100){
    motherName.textContent="谷淳子"
  }
  if(like===10){
    myName.textContent="谷陽一朗"
  }  
}

myName.onclick = function(){
  if(like>10){
    myName.textContent="谷陽一朗"
  }
}

motherName.onclick = function(){
  if(like>100){
    motherName.textContent="谷淳子"
  }
}
