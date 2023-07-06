


function hora(){
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if(hora > 18 ){
        var informa_hora = document.getElementsByTagName('h3')[0]
        informa_hora.innerHTML = `${hora}:${minuto}`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("noite.jpg")'
        var fundo = document.getElementsByTagName('body')[0]
        fundo.style.backgroundColor = '#070a2b'
        fundo.style.color = '#fff'
       
    } else if(hora >= 6 && hora < 13){
        var informa_hora = document.getElementsByTagName('h3')[0]
        informa_hora.innerHTML = `${hora}:${minuto}`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("manha.jpg")'
        var fundo = document.getElementsByTagName('body')[0]
        fundo.style.backgroundColor = '#e4e4e4'
        fundo.style.color = '#000'
    }
    else{
        var informa_hora = document.getElementsByTagName('h3')[0]
        informa_hora.innerHTML = `${hora}:${minuto}`
        var imagem = document.getElementsByClassName('circulo')[0]
        imagem.style.backgroundImage = 'url("tarde.jpg")'
        var fundo = document.getElementsByTagName('body')[0]
        fundo.style.backgroundColor = '#efa886'
        fundo.style.color = '#000'
    }
        
    
}