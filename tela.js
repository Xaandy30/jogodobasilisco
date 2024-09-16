const tela={
    largura:800,
    altura:400,
    imagem:"fundo2.jpg",
    desenhar: function(){
        let img = new Image(); 
        img.src = this.imagem;       
        canvasCtx.drawImage(img,0,60,this.largura,this.altura);
    }
};
tela.desenhar();
