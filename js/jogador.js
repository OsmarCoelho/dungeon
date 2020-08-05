export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.vida = 100;
        this.x = 64;
        this.y = 64;
        this.h = 16; 
        this.sprite = cena.physics.add.sprite(64, 64, 'slime');
        this.sprite.body.setSize(16, 16);
        this.sprite.setBounce(0.2);
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

    atualizaVida(vida, barra){
        console.log(vida);
        vida = vida - 5;
        if(vida <= 0){
            alert("Você morreu...");
        }else{
            barra.fillStyle(0xff0000, 1);
            barra.fillRect(10, 340, vida, 10);
            barra.lineStyle(4, 0xffffff, 1);
            barra.strokeRect(10, 340, 100, 10);
        }
    }
}