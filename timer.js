function cronometro () {
  let segundos = 60
  let minutos = 9
  let count = setInterval(function() {
  segundos--
  if(segundos == 0 && minutos == 0){
    console.log('se acabo el tiempo')
    clearInterval(count)
  }else{
    if(segundos == -1){
      minutos--
      segundos = 60
    }
    let updateSeconds = (segundos < 10) ? '0' + segundos.toString() : segundos
    console.log(minutos + ':' + updateSeconds)
  }
}, 1000);
}
cronometro()