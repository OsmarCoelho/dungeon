import Tiro from "./Tiro.js";

export default class Jogador {
    constructor(cena, x, y) {
        this.cena = cena;
        this.vida = 100;
        this.x = 64;
        this.y = 64;
        this.h = 11; 
        this.velocidadedopao = 150;
        this.podeAtirar = true;
        this.lado = 'D';
        this.tiro = [];
        this.sprite = cena.physics.add.sprite(x, y, 'dem');
        this.sprite.body.setSize(11, 11);
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);


        // cria as animações
        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('dem', { start: 4, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'idle',
            frames: cena.anims.generateFrameNumbers('dem', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
        });

        cena.anims.create({
            key: 'cima',
            frames: cena.anims.generateFrameNumbers('dem', { start: 4, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'baixo',
            frames: cena.anims.generateFrameNumbers('dem', { start: 4, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('dem', { start: 4, end: 7 }),
            frameRate: 7,
            repeat: -1
        });

        cena.anims.create({
            key: 'atira',
            frames: cena.anims.generateFrameNumbers('dem', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });
    }

    atirar(px, py){
        this.podeAtirar = false;
        if(this.lado == 'D'){
            let tiroAtual = new Tiro(this.cena, this.sprite.getCenter().x + 5, this.sprite.getCenter().y, 'D');
            this.tiro.push(tiroAtual);
            tiroAtual.sprite.setVelocityX(+this.velocidadedopao);
            tiroAtual.sprite.setVelocityY(0);
        }else if(this.lado == 'E'){
            let tiroAtual = new Tiro(this.cena, this.sprite.getCenter().x - 5, this.sprite.getCenter().y, 'E');
            this.tiro.push(tiroAtual);
            tiroAtual.sprite.setVelocityX(-this.velocidadedopao);
            tiroAtual.sprite.setVelocityY(0);
        }else if(this.lado == 'C'){
            let tiroAtual = new Tiro(this.cena, this.sprite.getCenter().x, this.sprite.getCenter().y - 5, 'C');
            this.tiro.push(tiroAtual);
            tiroAtual.sprite.setVelocityX(0);
            tiroAtual.sprite.setVelocityY(-this.velocidadedopao);
        }else if(this.lado == 'B'){
            let tiroAtual = new Tiro(this.cena, this.sprite.getCenter().x, this.sprite.getCenter().y + 5, 'B');
            this.tiro.push(tiroAtual);
            tiroAtual.sprite.setVelocityX(0);
            tiroAtual.sprite.setVelocityY(+this.velocidadedopao);
        }
        setTimeout(() => {
            this.podeAtirar = true;
        }, 500);
    }

    destroi(tiroEl){
        let index = this.tiro.indexOf(tiroEl);
        this.tiro.slice(index, 1);
        tiroEl.sprite.destroy(true);
    }
}