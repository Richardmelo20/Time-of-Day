function reloand() {
  let msg = document.querySelector('#msg')
  let img = document.querySelector('#image')
  let data = new Date()
  let hour = data.getHours()
  msg.innerHTML = `Agora são ${hour} horas.`

  if (hour >= 0 && hour < 12) {
    img.src = 'images/morning.png'
    document.body.style.background = '#e2cd9f'
  } else if (hour >= 12 && hour <= 18) {
    img.src = 'images/afternoon.png'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'images/night.png'
    document.body.style.background = '#515154'
  }
}

