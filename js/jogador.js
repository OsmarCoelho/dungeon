export default class Jogador {
    constructor(cena) {
        this.x = 64;
        this.y = 64;
        this.h = 16;
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(64, 64, 'slime');
        this.sprite.body.setSize(16, 16);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('slime', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'idle',
            frames: cena.anims.generateFrameNumbers('slime', { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'cima',
            frames: cena.anims.generateFrameNumbers('slime', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'baixo',
            frames: cena.anims.generateFrameNumbers('slime', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('slime', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
    
    }
}