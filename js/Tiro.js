export default class Tiro{
    constructor(cena, x, y, d) {
        this.cena = cena;
        this.x = x;
        this.y = y;
       
        if(d == 'C' || d == 'B'){
            this.sprite = cena.physics.add.sprite(x, y, 'tiroV');
            this.sprite.body.setSize(3, 8);
        }else{
            this.sprite = cena.physics.add.sprite(x, y, 'tiro');
            this.sprite.body.setSize(8, 3);
        }
        this.sprite.setBounce(0.2);
            this.sprite.setCollideWorldBounds(true);
    }
}