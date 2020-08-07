export default class Pao{
    constructor(cena, x, y) {
        this.cena = cena;
        this.x = x;
        this.y = y;
        this.sprite = cena.physics.add.sprite(x, y, 'pao');
        this.sprite.body.setSize(8, 8);
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
    }
}