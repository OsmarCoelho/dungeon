export default class Inimigo {
    constructor(cena, x, y) {
        this.x = x;
        this.y = y;
        this.h = 14;
        this.vida = 10;
        this.velocidade = 15;
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

    ver(v){
        let a = Math.abs(this.sprite.getCenter().x - v.x);
        let b = Math.abs(this.sprite.getCenter().y - v.y);
        let d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        if(d <= 15){
            this.vida = 0;
            this.morreu();
        }else if(d <= 75 && d > 15 && this.vida != 0){
            this.sprite.anims.play('movendo', true);
            this.anda(v);
        } else if(d > 75 && this.vida != 0){
            this.sprite.anims.play('parado', true);
            this.sprite.setVelocityY(0);    
            this.sprite.setVelocityX(0);    
        }
        return d;
    }

    atualizaVida(){
        this.vida -= 10;
        if(this.vida == 0){
            this.morreu();
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

    morreu(){
        this.sprite.destroy(true);
    }
}