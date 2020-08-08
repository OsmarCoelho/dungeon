export default class menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu'
        });
    }

    preload() {
        this.load.image('cursorP', 'imgs/cursor.png');
        this.load.image('nome', 'imgs/nome.png');
        this.load.image('tijolo', 'imgs/tijolo.png');
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    }

    create() {
        for(let i = 0; i < this.w/150; i++){
            for(let c = 0; c < this.h/75; c++){
                this.add.image((163*i), (85*c), 'tijolo').setScale(0.5).setOrigin(0,0);
            }
        }
        
        let txt = this.add.text(this.w/2 - 100, this.h/2 + 100, 'JOGAR', {fontFamily: 'Rowdies'});
        txt.setFontSize(40);
        txt.setInteractive({ cursor: 'url(imgs/cursor.png), pointer' });
        txt.on('pointerdown', () => {
            this.scene.start('carrega');
        }, this);

        let nome = this.add.image(this.w/2 - 270, this.h/4, 'nome').setOrigin(0,0);
    }

    

    update() {

    }
}