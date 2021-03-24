
function validar(){
   var nome = document.getElementById("idNome");

    if (nome.value == ""){
        alert("Preencha o campo Nome");
        nome.focus();
        return false;
    }


    if (document.getElementById("idPontos").value == ""){
        alert("Preencha o campo Pontos");
        formuser.pontos.focus();
        return false;
    }


    if (document.getElementById("idNota").value == ""){
        alert("Preencha o campo Nota");
        formuser.nota.focus();
        return false;
    }


    
    if (document.getElementById("idUni") == ""){
        alert("Preencha o campo Universidade");
        formuser.universidade.focus();
    }

    return false;
    
}
