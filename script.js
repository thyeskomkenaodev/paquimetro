class Estacionamento {
    constructor(valor) {
        this.valor = valor;
        this.tempoPorReal = 30; // 30 minutos por R$1,00
    }

    calcularTempo() {
        if (this.valor < 1) {
            return { mensagem: "Valor insuficiente", tempo: 0, troco: 0 };
        }
        const tempo = Math.floor(this.valor) * this.tempoPorReal;
        const troco = this.valor % 1;
        return { mensagem: "", tempo, troco };
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