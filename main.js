const botoes = document.querySelectorAll( ".botao")

for (lef i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (lef j = 0; i < botoes.length; j++){
            botoes[j].classList.remove(ativo)
        }
        botoes[i].classList.add("ativo")
    }
}