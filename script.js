function verificacao() {
    var numero = document.getElementById('numero');
    var res = document.getElementById('res');
  
    if (numero.value == "") {
      window.alert("[ERRO] É permitido apenas números, tente novamente.");
      res.innerHTML = ''
    } else {
      var n = Number(numero.value);
      if (n <= 1) {
        res.innerHTML = `<center>O número ${n} não é primo.</center>`;
      } else {
        let primo = false;
        for (let i = 2 ; i < n ; i++) {
            if ( n % i === 0 ){
                primo = true;
            }
        }
        if(primo == false){
            res.innerHTML = `<center>O número ${n} é primo</center>`;
        }else{
            res.innerHTML = `<center>O número ${n} não é primo.</center>`;
        }
      }
    }
  }
  