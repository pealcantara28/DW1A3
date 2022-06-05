$(document).ready(()=>{
    let tableData = JSON.parse(localStorage.getItem("notas"))

    var table = new Tabulator("#tableRelatorio", {
        data:tableData,
        layout:"fitColumns",
        columns:[
        {title:"Nome", field:"nome",widthGrow:3},
        {title:"Prontuário", field:"matricula",widthGrow:1.2},
        {title:"Nota", field:"nota", sorter:"number",widthGrow:0.7},
        ],
    });
})

function Voltar(){
    window.location.href = "Index.html"
}