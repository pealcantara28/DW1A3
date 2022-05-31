let carro = {
    marca: "Fiat",
    modelo: "500",
    anoFabricacao: Date.now(),
    precoVenda: 15000.00
}

function CalculaPrecoVista(carro) {
    return carro.precoVenda * 0.95;
}

function CalculaPrecoPrazo(carro) {
    let precoPrazo = {
        entrada: carro.precoVenda/2,
        parcela: carro.precoVenda/24, //24 porque é metade (2) divido em 12 parcelas, logo, 2x12 = 24
        quantidadeParcela: 12
    }
    return JSON.stringify(precoPrazo)
}
