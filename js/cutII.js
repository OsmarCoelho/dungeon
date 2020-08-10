export default class cutII extends Phaser.Scene {
    constructor() {
        super({
            key: 'cutII'
        });
    }

    preload() {
        this.texto = ["Perdeste."];
        
        this.textoII = ["Clique para continuar..."];
        this.w = window.innerWidth;
        this.h = window.innerHeight;

    }

    create() {  
       
        this.add.text(this.w/2-100, this.h/2-200, this.texto).setFontSize(30);
        
        this.add.text(this.w - 300, this.h/2 + 200, this.textoII).setFontSize(20);
    }

    

    update() {
        this.input.on('pointerdown', () => {
            this.scene.start('cenaI');
        })
    }
}