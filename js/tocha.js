export default class Tocha{
    constructor(cena, x, y) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(x, y, 'tochas');
        this.sprite.body.setSize(16, 16);

        // cria as animações
        cena.anims.create({
            key: 'queimar',
            frames: cena.anims.generateFrameNumbers('tochas', { start: 0, end: 4}),
            frameRate: 4,
            repeat: -1
        });
    }
}