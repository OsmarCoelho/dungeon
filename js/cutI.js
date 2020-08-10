export default class cutI extends Phaser.Scene {
    constructor() {
        super({
            key: 'cutI'
        });
    }

    preload() {
        this.textoI = ["Você, um demônio conservador, não entende porque seu chefe decidiu contratar"];
        this.textoII = ["uma companhia de cavaleiros para trabalhar na masmorra e demitir parte dos demônios."];
        this.textoIII = ["Se vingue do cavaleiros terceirizados e de"];
        this.textoIV = ["seu chefe usando WASD para se mover e o clique esquerdo do mouse para atirar."];
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
        this.add.text(this.w - 1100, this.h/2 - 100, this.textoIV).setFontSize(20);
        this.add.text(this.w - 300, this.h/2 + 200, this.textoV).setFontSize(20);
        this.input.on('pointerdown', () => {
            this.scene.start('cenaI');
        })
    }
}