function Cadastrar() {
    let Cadastro = {
        user: $("#user").val(),
        password: $("#password").val(),
        password_c: $("#password_c").val(),
    }
    var valido = true;

    if (Cadastro.user == "") {
        valido = false;
        $("#user").addClass("fielderror")
    }

    if (Cadastro.password == "") {
        valido = false;
        $("#password").addClass("fielderror")
    }

    if (Cadastro.password_c == "") {
        valido = false;
        $("#password_c").addClass("fielderror")
    }

    if (valido) {
        if (Cadastro.password === Cadastro.password_c) {
            toastr.success("Cadastro realizado com sucesso!")
            localStorage.setItem(("usr-" + Cadastro.user), JSON.stringify(Cadastro))
            setTimeout(() => { window.location.href = "../Teste/Login.html"; }, 2500);
        }
        else {
            toastr.error("As senhas devem ser idênticas")
            $("#password").addClass("fielderror")
            $("#password_c").addClass("fielderror")
        }
    }
    else {
        toastr.error("Há campos vazios!")
    }

    console.log(Cadastro)
}
$("#user").focusout(() => {
    $("#user").addClass("field")
    $("#user").removeClass("fielderror")
})

$("#password").focusout(() => {
    $("#password").addClass("field")
    $("#password").removeClass("fielderror")
})

$("#password_c").focusout(() => {
    $("#password_c").addClass("field")
    $("#password_c").removeClass("fielderror")
})