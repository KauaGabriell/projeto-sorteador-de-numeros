const form = document.querySelector("form")
const result = document.getElementById("result")
const rightContent  = document.getElementById("rightContent")

form.onsubmit = function(event){
    event.preventDefault()
    result.classList.remove("hidden")
    rightContent.classList.add("hidden")
}
