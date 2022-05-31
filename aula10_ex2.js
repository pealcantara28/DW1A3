let infracao = {
    data: new Date(),
    valor: 2000
}

function infoInfracao(infracao) {
    let infoInfracao = {
        dataPagamento: addDays(infracao.data,90),
        valorDesconto: infracao.valor * 0.8
    }

    return JSON.stringify(infoInfracao)
}

function addDays(data, dias) {
    const dataFinal = new Date(Number(data))
    dataFinal.setDate(date.getDate() + dias)
    return dataFinal
  }