var tabela = $('.tables-intencoes');
var linhas = $('tr');

for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i];
    linha.addEventListener("click", function () {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
    });
}

function selLinha(linha, multiplos) {
    if (!multiplos) {
        var linhas = linha.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas.length; i++) {
            linhas[i].classList.remove("selecionado");
            $(linhas[i]).css({'background': 'white'}); 
        }
    }
    linha.classList.toggle("selecionado");
    $('.selecionado').css({'background': '#00FFFF'}); 
}

// $(document).on('click', 'tr', function () {
//     var linhas = $("tr");
//     for (var i = 0; i < linhas.length; i++) {
//         linhas[i].classList.remove("selecionado");
//         $(linhas[i]).css({ 'background': 'white' });
//     }

//     this.classList.toggle("selecionado");
//     $('.selecionado').css({ 'background': 'red' });
// });