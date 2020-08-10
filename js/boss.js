import Canhao from "./Canhao.js";

export default class Boss {
    constructor(cena, x, y, img, velocidade, vida, range) {
        this.x = x;
        this.y = y;
        this.h = 28;
        this.w = 16;
        this.vida = vida;
        this.velocidade = velocidade;
        this.cena = cena;
        this.img = img;
        this.range = range;
        this.corpo = true;
        this.sprite = cena.physics.add.sprite(this.x, this.y, this.img);
        this.sprite.body.setSize(this.w, this.h);
        this.sprite.setBounce(5);
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'move',
            frames: cena.anims.generateFrameNumbers(this.img, { start: 4, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'para',
            frames: cena.anims.generateFrameNumbers(this.img, { start: 0, end: 4 }),
            frameRate: 4,
            repeat: -1
        });
    }

    ver(v){
        let a = Math.abs(this.sprite.getCenter().x - v.x);
        let b = Math.abs(this.sprite.getCenter().y - v.y);
        let d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        if(this.vida <= 0){
            this.cena.scene.start('cutIII');
        }

        if(d <= this.range && d >= (this.h/2 + 5) && this.vida != 0){
            this.sprite.anims.play('move', true);
            this.anda(v);
        } else if(d > this.range && this.vida != 0){
            this.sprite.anims.play('para', true);
            this.sprite.setVelocityY(0);    
            this.sprite.setVelocityX(0);    
        }
        return d;
    }

    atualizaVida(inimigos, inimigo, dano){
        this.vida -= dano;
        if(this.vida == 0){
            let index = inimigos.indexOf(inimigo);
            inimigos.slice(index, 1);
            inimigo.sprite.setVisible(false);
            inimigo.sprite.setPosition(0, 0);
            inimigo.sprite.disableBody(true, true);
            inimigo.sprite.destroy(true);
        }else if(this.vida <= 100){
            this.velocidade = 80;
        }
    }

    anda(v){
            if(v.x < this.sprite.getCenter().x){
                if(v.y > this.sprite.getCenter().y){
                    this.sprite.setVelocityX(-this.velocidade);
                    this.sprite.setVelocityY(+this.velocidade);
                }else if(v.y < this.sprite.getCenter().y){
                    this.sprite.setVelocityX(-this.velocidade);
                    this.sprite.setVelocityY(-this.velocidade);
                }
            }else if(v.x > this.sprite.getCenter().x){
                if(v.y > this.sprite.getCenter().y){
                    this.sprite.setVelocityX(+this.velocidade);
                    this.sprite.setVelocityY(+this.velocidade);
                }else if(v.y < this.sprite.getCenter().y){
                    this.sprite.setVelocityX(+this.velocidade);
                    this.sprite.setVelocityY(-this.velocidade);
                }
            }
    }
}