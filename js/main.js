const form = document.querySelector("#form")
const noteInput = document.querySelector("#noteInput")
const addTask = document.querySelector("#addTask")
const reset = document.querySelector("#reset")
const taskList = document.querySelector("#taskList")
const doneList = document.querySelector("#doneList")

const taskArr = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []

form.addEventListener("submit", e => {
    e.preventDefault()
    taskArr.push(noteInput.value)
    localStorage.setItem("notes", JSON.stringify(taskArr))
    // funcion de crear
    noteInput.value = ""
})








