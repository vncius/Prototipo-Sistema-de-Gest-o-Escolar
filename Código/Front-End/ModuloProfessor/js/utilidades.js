$(document).ready(function () {
    carregarElemento = function (elemento, pagina) {
        $('#' + elemento + '').css({ display: 'none' });
        $('#' + elemento + '').load(pagina);
        $('#' + elemento + '').fadeIn("slow");
    }
});