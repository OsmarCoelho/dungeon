export default class menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu'
        });
    }

    preload() {
        this.load.image('button', 'imgs/play.png');
        this.load.image('cursorP', 'imgs/cursor.png');
    }

    create() {
        let bg = this.add.image(360, 180, 'button').setInteractive({ cursor: 'url(imgs/cursor.png), pointer' });
        bg.setScale(0.5);
        bg.on('pointerdown', () => {
            this.scene.start('carrega');
        }, this);

        let nome = this.add.text(250, 50, "Ainda não tem nome não.");
    }

    

    update() {

    }
}