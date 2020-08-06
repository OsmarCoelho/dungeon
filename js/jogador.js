import Pao from "./pao.js";

export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.vida = 100;
        this.x = 64;
        this.y = 64;
        this.h = 16; 
        this.tiro = null;
        this.sprite = cena.physics.add.sprite(64, 64, 'idle');
        this.sprite.body.setSize(16, 16);
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);


        // cria as animações
        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('move', { start: 0, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'idle',
            frames: cena.anims.generateFrameNumbers('idle', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
        });

        cena.anims.create({
            key: 'cima',
            frames: cena.anims.generateFrameNumbers('up', { start: 0, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'baixo',
            frames: cena.anims.generateFrameNumbers('move', { start: 0, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('move', { start: 0, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'atira',
            frames: cena.anims.generateFrameNumbers('shoot', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });
    }

    atirar(e){
        console.log(e.x, e.y);
        if(e.x < this.sprite.getCenter().x){
            if(e.y > this.sprite.getCenter().y){
                this.tiro.x = (-30);
                this.tiro.y = (+30);
            }else if(e.y < this.sprite.getCenter().y){
                this.tiro.x = (-30);
                this.tiro.y= (-30);
            }
        }else if(e.x > this.sprite.getCenter().x){
            if(e.y > this.sprite.getCenter().y){
                this.tiro.x = (+30);
                this.tiro.y = (+30);
            }else if(e.y < this.sprite.getCenter().y){
                this.tiro.x = (+30);
                this.tiro.y = (-30);
            }
        }
    }
}