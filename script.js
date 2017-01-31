function pomodoro() {
    var minutos = 25,
        segundos = 0,
        state = false,
        timer = document.getElementById('timer'), //si deja de funcionar el timer cambiar timer en la funcion por esto
        elMinutos = document.getElementById('minutos'),
        elMenos = document.getElementById('menos'),
        elMas = document.getElementById('mas'),
        timeoutID = 1
    timer.innerHTML = minutos
    elMinutos.innerHTML = minutos;

    elMenos.addEventListener("click", function() {
        if (!state) {
          minutos--
          elMinutos.innerHTML = minutos + " ";
          timer.innerHTML = minutos
          segundos = 0
        }

    })
    elMas.addEventListener("click", function() {
        if (!state) {
          minutos++
          elMinutos.innerHTML = minutos + " ";
          timer.innerHTML = minutos
          segundos = 0
        }

    })

    function startInterval() {

        var interval = setInterval(function() {
            timer.innerHTML = minutos + ':' + segundos;
            if (segundos < 10) {
                timer.innerHTML = minutos + ':' + '0' + segundos;
            }
            if (segundos === 0) {
                minutos--
                segundos = 60
            }

            --segundos
            if (minutos === 0 && segundos === 0) {
                clearInterval(interval)
                timer.innerHTML = '00' + ':' + '00';
            }


        }, 1000)
        console.log(interval);
    }
    timer.addEventListener("click", function() { // Evento para pausar el reloj

      if (!state) {
          startInterval()
          state = true
          console.log(state)
      } else {
          clearInterval(timeoutID)
          state = false
          console.log(state);
          timeoutID++
      }
    })



}
pomodoro()
