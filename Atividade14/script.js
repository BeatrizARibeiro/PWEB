function validarDados() {
            
    // usando a posicao no formulario
    if (document.forms.formulario.elements.nome.value == "" || document.forms.formulario.elements.nome.value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario.elements.nome.focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.formulario.elements.email.value == "" || document.forms.formulario.elements.email.value.indexOf('@') == -1 || document.forms.formulario.elements.email.value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario.elements.email.focus();
       return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.formulario.elements.mensagem.value == "" || document.forms.formulario.elements.mensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com no mínimo 20 caracteres!");
        document.forms.formulario.elements.mensagem.focus();
        return false;
    }

    //radio
    radios = document.getElementsByName("opcao");
    if (!radios[0].checked && !radios[1].checked) {
        alert("Por favor, responda a pesquisa.");
        el.preventDefault();
        return false;
    } else if (radios[0].checked) { // sim
        alert("Volte sempre à está página!");
    } else { // não
        alert("Que bom que você voltou a visitar está página!");
    }

    return true;
}