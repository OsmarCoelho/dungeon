export default class cutIII extends Phaser.Scene {
    constructor() {
        super({
            key: 'cutIII'
        });
    }

    preload() {
        this.textoI = ["Parabéns, você se vingou do seu ex-chefe e destruiu a firma."];
        this.textoII = ["Agora todos os outros funcionários estão sem emprego e não podem sustentar suas famílias."];
        this.textoIII = ["Porquê você fez isso mesmo ?"];
        this.textoV = ["Clique para continuar..."];
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    create() {
        
    }

    

    update() {
        this.add.text(this.w - 1100, this.h/2 - 250, this.textoI).setFontSize(20);
        this.add.text(this.w - 1200, this.h/2 - 200, this.textoII).setFontSize(20);
        this.add.text(this.w - 900, this.h/2 - 150, this.textoIII).setFontSize(20);
        this.add.text(this.w - 300, this.h/2 + 200, this.textoV).setFontSize(20);
        this.input.on('pointerdown', () => {
            location.reload();
        })
    }
}