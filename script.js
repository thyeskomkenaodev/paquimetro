class Estacionamento {
    constructor(valor) {
        this.valor = valor;
        this.tabela = [
            { valor: 1.0, tempo: 30 }, // 30 minutos
            { valor: 1.75, tempo: 60 }, // 60 minutos
            { valor: 2.0, tempo: 60, troco: 0.25 }, // 60 minutos com troco de R$ 0,25
            { valor: 3.0, tempo: 120 }, // 120 minutos (tempo máximo permitido)
        ];
    }

    calcularTempo() {
        const entrada = this.tabela.find((item) => this.valor === item.valor);

        if (!entrada) {
            return { mensagem: "Valor insuficiente ou inválido", tempo: 0, troco: 0 };
        }

        const troco = entrada.troco !== undefined ? entrada.troco : this.valor - entrada.valor;
        return { mensagem: "", tempo: entrada.tempo, troco };
    }
}

document.getElementById("calcular").addEventListener("click", () => {
    const valorInput = parseFloat(document.getElementById("valor").value);
    const estacionamento = new Estacionamento(valorInput);
    const resultado = estacionamento.calcularTempo();

    const resultadoDiv = document.getElementById("resultado");
    if (resultado.mensagem) {
        resultadoDiv.textContent = resultado.mensagem;
    } else {
        resultadoDiv.textContent = `Tempo: ${resultado.tempo} minutos. Troco: R$${resultado.troco.toFixed(2)}`;
    }
});