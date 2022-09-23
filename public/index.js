const socketClient = io()

const formulario = document.getElementById("formulario")
const inputInfo = document.getElementById("info")
const lista = document.getElementById("lista")

formulario.onsubmit = (e) => {
    e.preventDefault()
    const msn = inputInfo.value
    socketClient.emit("mensaje", msn)
}

socketClient.on("mensajesArray", mensajesArray=>{
    const inner = mensajesArray.map(mensaje => {
        return(`<li>${mensaje}</li><br>`)
    }).join(' ')
    lista.innerHTML = inner
})