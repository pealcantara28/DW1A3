function SalvarNota() {
    const notaTemp = localStorage.getItem("notas")
    let notas = JSON.parse(notaTemp)
    debugger

    if (notas == null) {
        notas = []
    }

    let nota = {
        nome: $("#nome").val(),
        matricula: $("#matricula").val(),
        nota: $("#nota").val(),
    }

    var valido = true;

    if (nota.nome == "") {
        valido = false;
        $("#nome").addClass("fielderror")
    }

    if (nota.matricula == "") {
        valido = false;
        $("#matricula").addClass("fielderror")
    }

    if (nota.nota == "") {
        valido = false;
        $("#nota").addClass("fielderror")
    }

    if (valido) {
        notas.push(nota)
        toastr.success("Nota registrada com Sucesso!")
        localStorage.setItem(("nota-" + nota.matricula), JSON.stringify(nota))
        localStorage.setItem("notas", JSON.stringify(notas))
        document.getElementById("nome").value = ""
        document.getElementById("matricula").value = ""
        document.getElementById("nota").value = ""
    }
    else {
        toastr.error("Há campos vazios!")
    }
}

function Voltar()
{
    window.location.href = "Index.html"
}

$("#nome").focusout(() => {
    $("#nome").addClass("field")
    $("#nome").removeClass("fielderror")
})

$("#matricula").focusout(() => {
    $("#matricula").addClass("field")
    $("#matricula").removeClass("fielderror")
})

$("#nota").focusout(() => {
    $("#nota").addClass("field")
    $("#nota").removeClass("fielderror")
})