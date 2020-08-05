export default class Inimigo {
    constructor(cena, x, y) {
        this.x = x;
        this.y = y;
        this.h = 14;
        this.velocidade = 20;
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(this.x, this.y, 'slimeInimigo');
        this.sprite.body.setSize(14, 14).setOffset(10, 19);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'movendo',
            frames: cena.anims.generateFrameNumbers('slimeInimigo', { start: 20, end: 29 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'parado',
            frames: cena.anims.generateFrameNumbers('slimeInimigo', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    }

    ver(xp, yp){
        let a = Math.abs(this.x - xp);
        let b = Math.abs(this.y - yp);
        let d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        if(d <= 100){
            this.anda(xp, yp);
            return d;
        } else if(d > 100){
            this.sprite.setVelocityX(0);
            this.sprite.setVelocityY(0);
            return d;
        }	
    }

    anda(xp, yp){
        if(xp < this.x){
            if(yp > this.y){
                this.sprite.setVelocityX(-this.velocidade);
                this.sprite.setVelocityY(+this.velocidade);
            }else if(yp < this.y){
                this.sprite.setVelocityX(-this.velocidade);
                this.sprite.setVelocityY(-this.velocidade);
            }
        }else if(xp > this.x){
            if(yp > this.y){
                this.sprite.setVelocityX(+this.velocidade);
                this.sprite.setVelocityY(+this.velocidade);
            }else if(yp < this.y){
                this.sprite.setVelocityX(+this.velocidade);
                this.sprite.setVelocityY(-this.velocidade);
            }
        }
    }
}