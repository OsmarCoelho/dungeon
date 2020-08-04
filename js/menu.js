/*
function preload ()
{
    this.load.image('buttonBG', 'assets/sprites/button-bg.png');
    this.load.image('buttonText', 'assets/sprites/button-text.png');
}

function create ()
{
    var bg = this.add.image(0, 0, 'buttonBG').setInteractive();
    var text = this.add.image(0, 0, 'buttonText');

    var container = this.add.container(400, 300, [ bg, text ]);

    bg.once('pointerup', loadImage, this);
}

function loadImage ()
{
    this.load.once('complete', addSprites, this);

    this.load.image('pic', 'assets/pics/turkey-1985086.jpg');
    this.load.image('titan', 'assets/pics/titan-mech.png');

    this.load.start();
}

function addSprites ()
{
    this.add.image(400, 300, 'pic');
    this.add.image(400, 300, 'titan');
}
*/
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