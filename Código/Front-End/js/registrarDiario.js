$(document).ready(function() {
    function alteraDados(idSelecionado) {
        switch (idSelecionado) {
            case 2:
                $('#tipoEnsino').val('Ensino Fundamental');
                $('#descricaoTurno').val('Matutino');
                $('#anoLetivo').val('2020');
                $('#nomeProfessor').val('Luiz Santos');
                break;
            case 3:
                $('#tipoEnsino').val('Ensino Fundamental');
                $('#descricaoTurno').val('Vespertino');
                $('#anoLetivo').val('2020');
                $('#nomeProfessor').val('Luiza Mota');
                break;
            case 4:
                $('#tipoEnsino').val('Ensino Fundamental');
                $('#descricaoTurno').val('Noturno');
                $('#anoLetivo').val('2020');
                $('#nomeProfessor').val('Pedro Henrique');
                break;
            case 5:
                $('#tipoEnsino').val('Ensino Fundamental');
                $('#descricaoTurno').val('Vespertino');
                $('#anoLetivo').val('2020');
                $('#nomeProfessor').val('Leticia Fontinely');
                break;
            default:
                break;
        }
    }
});


