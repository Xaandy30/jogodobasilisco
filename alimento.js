class Alimento extends ObjetoJogo {
    arqImagem = ['alimento.png', 'rato.png', 'pera1.png'];
    cont;
    #imagem;
    constructor(valor, ...args) {
        super(args);
        this.#imagem = new Image();
        this.cont = Math.round(Math.random() * 2);
        if (this.cont == 0) {
            this.valor = valor[this.cont]
        } else if (this.cont == 1) {
            this.valor = valor[this.cont]

        } else {
            this.valor = valor[this.cont]
        }
        this.#imagem.src = this.arqImagem[this.cont];
    }
    desenhar() {

        canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}




