function carregar(){
    var msg = document.getElementById("msg")
    var photo = document.getElementsById("foto")
    var date = new Date()
    var hora = date.getHours()
    var minuto = date.getMinutes()
    var horaMin = `${hora}:${minuto}`
    msg.innerHTML = `Agora são ${horaMin}`
}