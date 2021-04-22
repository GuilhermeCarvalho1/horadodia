function carregar(){ 
  var msg = window.document.getElementById('msg')
  var data = new Date()
  //var hora = data.getHours()
  var hora = 10
  var img = window.document.getElementById('img')
  var footer = window.document.getElementById('rodape')
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 0 && hora <12){
      img.src = "/imagens/manhã.png"
      document.body.style.backgroundImage = "url('/imagens/bgmanha.jpg')"
      footer.innerHTML = '<p><strong>Tenha um bom dia!</strong></p>'
  }else if (hora >=12 && hora < 18){
      img.src = "/imagens/tarde.png"
      document.body.style.backgroundImage = "url('/imagens/bgtarde.jpg')"
      footer.innerHTML = '<p><strong>Tenha uma boa tarde!</strong></p>'
  }else{
      img.src = "/imagens/noite.png"
      document.body.style.backgroundImage = "url('/imagens/bgnoite.jpg')"
      footer.innerHTML = '<p><strong>Tenha uma boa noite!</strong></p>'
  }
}
