const button = document.getElementById("button")
const input = document.getElementById("input")
const display = document.getElementById("display")

localStorage.name = "[]"
list = JSON.parse("")

button.onclick = function(){
  list.push(input.value)
  const card = document.createElement("div")
  card.textContent = input.value
  display.append(card)
}