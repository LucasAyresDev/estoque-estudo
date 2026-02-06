function addProduct(dados) {
    const {id, nome, pesoUnit, quantidade, qntdCaixa, validade, descricao} = dados;
    if (!nome) {
        throw new Error("Por favor, coloque o nome do produto");
    }

    if (quantidade <= 0 || quantidade === undefined) {
        throw new Error("A quantidade deve ser maior que zero");
    }

    if (pesoUnit <= 0 || pesoUnit === undefined) {
        throw new Error("O peso unitário deve ser maior que zero");
    }

    if (typeof quantidade !== 'number'  || isNaN(quantidade)) {
        throw new Error("A quantidade deve ser um número válido");
    }

    if  (typeof pesoUnit !== 'number'  || isNaN(pesoUnit)) {
        throw new Error("O peso unitário deve ser um número válido");
    }

    const produto = {
        id,
        nome,
        pesoUnit,
        quantidade,
        qntdCaixa,
        validade,
        descricao,
        criadoEm: new Date()
    };
    return produto;
}