
function Entrar()
{
    const cadastros = localStorage.getItem("usr-"+$("#user").val())
    let dadosUser = JSON.parse(cadastros)
    let passwordTela = $("#password").val()
    if(dadosUser != null)
    {
        if(dadosUser.password === passwordTela)
        {
            toastr.success("Usuário Logado")
            window.location.href = "../Teste/Index.html"
        }
        else
        {
            toastr.error("Usuário ou senha incorretos")
            $("#user").addClass("fielderror")
            $("#password").addClass("fielderror")
            $("#user").removeClass("field")
            $("#password").removeClass("field")
        }
    }
    else
    {
        toastr.error("Usuário não encontrado!")
    }
};

$("#user").focusout(()=>{
    $("#user").addClass("field")
    $("#user").removeClass("fielderror")
})

$("#password").focusout(()=>{
    $("#password").addClass("field")
    $("#password").removeClass("fielderror")
})
