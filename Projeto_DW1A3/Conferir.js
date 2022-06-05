function BuscarNota() {
    let matricula = $("#matricula").val()

    let nota = JSON.parse(localStorage.getItem("nota-" + matricula))
    debugger

    if (nota == null) {
        toastr.error("Aluno não encontrado!")
    }
    else {
        document.getElementById("nome").value = nota.nome
        document.getElementById("nota").value = nota.nota
    }
}

function Voltar() {
    window.location.href = "Index.html"
}