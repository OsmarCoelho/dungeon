import Jogador from "./jogador.js";
import Inimigo from "./inimigo.js";
import Tocha from "./tocha.js";
import Pao from "./pao.js";


export default class cenaI extends Phaser.Scene {
    constructor() {
        super({
            key: 'cenaI'
        });
    }

    preload() {

    }

    create() {
        let i = 0;
        let c = 0;
        let auy = 0;
        let aux = 0;
        let tamX = 10;
        let tamY = 5;
        this.tiros = [];
        

        //Inicio cenario
        const background = this.add.graphics();
        background.fillStyle(0x000000, 1);
        background.fillRect(0, 0, 1080, 480);


        const plataformas = this.physics.add.staticGroup();

        
        plataformas.create(32, 20, 'bse').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
        plataformas.create(32, 20, 'bse').setOrigin(0, 0).refreshBody().setSize(8, 32, false);

        //for para a parede superior
        for(i = 0; i < tamX; i++){
            plataformas.create((64+(32*i)), 20, 'ms').setOrigin(0, 0).refreshBody().setSize(32, 11, false);;
        }

        aux = (64+(32*i));

        plataformas.create(aux, 20, 'bsd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
        plataformas.create(aux, 20, 'bsd').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
        
        //for para a parede da esquerda
        for(i = 0; i < tamY; i++){
            plataformas.create(32, (52+(32*i)), 'pm').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
        }

        auy = (52+(32*i));

        plataformas.create(32, auy, 'bie').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
        plataformas.create(32, auy, 'bie').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);

        //for para a parede inferior
        for(i = 0; i < tamX; i++){
            plataformas.create((64+(32*i)), auy, 'mi').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
        }

        plataformas.create(aux, auy, 'bid').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
        plataformas.create(aux, auy, 'bid').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);

        auy = auy - 32;

        //for para a parede da direita
        for(i = 0; i < tamY; i++){
            let a = 0;
            //corredor
            if(i == 3){
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 0);
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 26);
                for(c = 0; c <= 5; c++){
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 6, false).setOffset(0, 26);
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 4, false).setOffset(0, 0);
                }
                plataformas.create((aux+32) + (32*c), (auy-(32*c))+64, 'bse').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
                plataformas.create((aux+32) + (32*c), (auy-(32*c))+64, 'bse').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
                plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch2').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(0, 0);
                plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch2').setOrigin(0, 0).refreshBody().setSize(8, 6, false).setOffset(0, 26);
                for(a = 0; a < 3; a++){
                    plataformas.create((aux+32) + (32*c), (116+(32*a)), 'pm').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
                }
                plataformas.create((aux+32) + (32*c), (116+(32*a)), 'bie').setOrigin(0, 0).refreshBody().setSize(8, 32, false);    
                plataformas.create((aux+32) + (32*c), (116+(32*a)), 'bie').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                for(a = 0; a < 8; a++){
                    if(a == 4){
                        let c = 0
                        plataformas.create((aux+256) + (32*a), (116+(32*3)), 'cvb0').setOrigin(0, 0).refreshBody().setSize(4, 8, false).setOffset(0, 24);
                        plataformas.create((aux+256) + (32*a), (116+(32*3)), 'cvb0').setOrigin(0, 0).refreshBody().setSize(4, 8, false).setOffset(26, 24);
                        plataformas.create((aux+256) + (32*a), (116+(32*4)), 'cvb1').setOrigin(0, 0).refreshBody().setSize(6, 32, false).setOffset(0, 0);
                        plataformas.create((aux+256) + (32*a), (116+(32*4)), 'cvb1').setOrigin(0, 0).refreshBody().setSize(6, 32, false).setOffset(26, 0);
                        plataformas.create((aux+256) + (32*a), (116+(32*5)), 'cvb2').setOrigin(0, 0).refreshBody().setSize(6, 8, false).setOffset(0, 0);
                        plataformas.create((aux+256) + (32*a), (116+(32*5)), 'cvb2').setOrigin(0, 0).refreshBody().setSize(6, 8, false).setOffset(26, 0);
                        for(c = 0; c < 3; c++){
                            plataformas.create((aux+256) + (32*c)+32, (116+(32*5)), 'ms').setOrigin(0, 0).refreshBody().setSize(32, 11, false);;
                        }
                        plataformas.create((aux+256), (116+(32*5)), 'bse').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(0, 0);
                        plataformas.create((aux+256), (116+(32*5)), 'bse').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
                        for(c = 0; c < 2; c++){
                            plataformas.create((aux+256) + (32*c)+160, (116+(32*5)), 'ms').setOrigin(0, 0).refreshBody().setSize(32, 11, false);;
                        }
                        plataformas.create((aux+256) + (32*c)+160, (116+(32*5)), 'bsd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                        plataformas.create((aux+256) + (32*c)+160, (116+(32*5)), 'bsd').setOrigin(0, 0).refreshBody().setSize(32, 11, false);   
                        for(c = 1; c < 5; c++){
                            plataformas.create((aux+256) + (32*2)+160, (116+(32*(5+c))), 'pmd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                        }
                        plataformas.create((aux+256) + (32*2)+160, (116+(32*(5+c))), 'bid').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                        plataformas.create((aux+256) + (32*2)+160, (116+(32*(5+c))), 'bid').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                        for(c = 1; c < 7; c++){
                            plataformas.create((aux+256) + (32*c), (116+(320)), 'mi').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                        }
                        plataformas.create((aux+256), (116+(320)), 'bie').setOrigin(0, 0).refreshBody().setSize(8, 32, false);    
                        plataformas.create((aux+256), (116+(320)), 'bie').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                        for(c = 1; c < 5; c++){
                            plataformas.create((aux+256), (116+(320)-(32*c)), 'pm').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
                        }
                    }else{
                        plataformas.create((aux+256) + (32*a), (116+(32*3)), 'mi').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                    }
                }
                plataformas.create((aux+256) + (32*a), auy+32, 'bid').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
                plataformas.create((aux+256) + (32*a), auy+32, 'bid').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                for(a = 0; a < 4; a++){
                    plataformas.create(aux+512, (auy-(32*a)), 'pmd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                }
                plataformas.create(aux+512, (auy-(32*a)), 'bsd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
                plataformas.create(aux+512, (auy-(32*a)), 'bsd').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
                for(a = 1; a < 9; a++){
                    plataformas.create((aux+512-(32*a)), (auy-(128)), 'ms').setOrigin(0, 0).refreshBody().setSize(32, 11, false);;
                }
            }else{
                plataformas.create(aux, (auy-(32*i)), 'pmd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
            }
        }

        //for para preencher o chão
        for(i = 0; i < tamY; i++){
            for(let c = 0; c < tamX; c++){
                this.add.image((64+(32*c)), (52+(32*i)), 'm').setDisplayOrigin(0, 0);
            }
        }
        for(let a = 0; a < 4; a++){
            for(let c = 0; c < 8; c++){
                this.add.image((aux+512-(32*c)-32), (84+(32*a)), 'm').setDisplayOrigin(0, 0);
            }
        }
        for(let a = 0; a < 4; a++){
            for(let c = 0; c < 6; c++){
                this.add.image((aux +288 ) + (32*c), (auy+128 +(32*a)), 'm').setDisplayOrigin(0, 0);
            }
        }
        //fim cenario

        //Jogador
        let jogador = new Jogador(this);
        this.Jogador = jogador;
        this.physics.add.collider(jogador.sprite, plataformas);

        this.barraDeVida = this.add.graphics();
        this.barraDeVida.fillStyle(0xff0000, 1);
        this.barraDeVida.fillRect(212, 350, jogador.vida, 10);
        this.barraDeVida.lineStyle(4, 0xffffff, 1);
        this.barraDeVida.strokeRect(212, 350, 100, 10);
        this.barraDeVida.setScrollFactor(0);
        
        //fim Jogador

        //inimigos
        let inimigos = [];

        inimigos.push(new Inimigo(this, 800, 400));
        inimigos.push(new Inimigo(this, 750, 300));

        inimigos.push(new Inimigo(this, 800, 200));
        inimigos.push(new Inimigo(this, 700, 70));
        inimigos.push(new Inimigo(this, 650, 100));

        inimigos.push(new Inimigo(this, 450, 90));
        inimigos.push(new Inimigo(this, 350, 150));
        inimigos.push(new Inimigo(this, 200, 50));

        for(let i = 0; i < inimigos.length; i ++){
            this.physics.add.collider(inimigos[i].sprite, plataformas);
            this.physics.add.collider(inimigos[i].sprite, jogador.sprite);
        }
        for(let i = 0; i < inimigos.length; i ++){
            for(let g = 0; g < inimigos.length; g ++){
                this.physics.add.collider(inimigos[i].sprite, inimigos[g].sprite);
            }
        }


        this.inimigos = inimigos;
        //fim inimigos
        
        this.plataformas = plataformas;

        //Tochas
        let tochas = [];

        tochas.push(new Tocha(this, 50, 25));
        tochas.push(new Tocha(this, 150, 25));
        tochas.push(new Tocha(this, 400, 25));

        tochas.push(new Tocha(this, 800, 56));
        tochas.push(new Tocha(this, 650, 56));

        tochas.push(new Tocha(this, 700, 285));
        
        
        this.tochas = tochas;
        // Fim tochas

        this.teclas = this.input.keyboard.addKeys({
            up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D,
            shoot:Phaser.Input.Keyboard.KeyCodes.T,
        }); 
        this.cameras.main.setBounds(0, 0, 950, 480);
        this.cameras.main.startFollow(jogador, false, 1, 1);
        this.cameras.main.setZoom(1.5);

        
    }
    update() {
        const jogador = this.Jogador.sprite;
        const inimigos = this.inimigos;
        const tochas = this.tochas;
        this.estado = 1;

        //Assets
        for(let t = 0; t < tochas.length; t++){
            tochas[t].sprite.anims.play('queimar', true);
        }
        //fim assets

        //controle de camera
        if(this.teclas.left.isDown && this.Jogador.x > 0){
            this.Jogador.x -= 2;
        }else if(this.teclas.right.isDown && this.Jogador.x < 950){
            this.Jogador.x += 2;
        }if(this.teclas.up.isDown && this.Jogador.y > 0){
            this.Jogador.y -= 2;
        }else if (this.teclas.down.isDown && this.Jogador.y < 480){
            this.Jogador.y += 2;
        }
        //fim controle de camera
        
        //movimentação do inimigo
        for(let i = 0; i < inimigos.length; i++){
            if(inimigos[i].ver(jogador.getCenter()) <= 75){
                if(inimigos[i].ver(jogador.getCenter()) <= 16){
                    this.atualizaVida();
                    inimigos[i].sprite.destroy(true);
                    inimigos.pop(inimigos[i]);    
                }else{
                    inimigos[i].sprite.anims.play('movendo', true); 
                    inimigos[i].anda(jogador.getCenter()); 
                }           
            }else if(inimigos[i].ver(jogador.getCenter()) > 75){
                inimigos[i].sprite.setVelocityX(0);
                inimigos[i].sprite.setVelocityY(0);    
                inimigos[i].sprite.anims.play('parado', true);
            }
        }

        if(this.tiros.length != 0){
            for(let i = 0; i < inimigos.length; i++){
                for(let c = 0; c < this.tiros.length; c++){
                    if(inimigos[i].ver(this.tiros[c].sprite.getCenter()) <= 16){ 
                        this.tiros[c].sprite.destroy(true);
                        this.tiros.pop(this.tiros[c]); 
                    }
                }
            }
        }
        
        //fim movimentação do inimigo

        
        
        //movimentação do personagem
        if(this.teclas.left.isDown) {
            jogador.setVelocityX(-100);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }else if (this.teclas.right.isDown) {
            jogador.setVelocityX(100);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } else if(this.teclas.up.isDown){
            jogador.setVelocityY(-100);
            jogador.setFlip(false, false)
            jogador.anims.play('cima', true);
        }else if(this.teclas.down.isDown){
            jogador.setVelocityY(100);
            jogador.setFlip(false, false)
            jogador.anims.play('baixo', true);
        }else if(this.teclas.shoot.isDown){
            jogador.anims.play('atira', true);
            this.estado = 0;
            this.atualizaTiro(); 
        }else {
            jogador.setVelocityX(0);
            jogador.setVelocityY(0);
            jogador.anims.play('idle', true);
        }

        
        //fim movimentação do personagem
        
    }
    atualizaTiro(){
        this.Jogador.tiro = new Pao(this, this.Jogador.sprite.getCenter().x, this.Jogador.sprite.getCenter().y);
        this.tiros.push(this.Jogador.tiro);
        for(let i = 0; i < this.inimigos.length; i ++){
            this.physics.add.collider(this.inimigos[i].sprite, this.Jogador.tiro.sprite);
        }
        this.physics.add.collider(this.Jogador.sprite, this.Jogador.tiro.sprite);
        this.physics.add.collider(this.plataformas, this.Jogador.tiro.sprite);


        
    }
    atualizaVida(){
        this.Jogador.vida = this.Jogador.vida - 15;
        console.log(this.Jogador.vida);
            if(this.Jogador.vida <= 0){
                this.barraDeVida.clear()
                this.barraDeVida.fillStyle(0xff0000, 1);
                this.barraDeVida.fillRect(212, 350, 0, 10);
                this.barraDeVida.lineStyle(4, 0xffffff, 1);
                this.barraDeVida.strokeRect(212, 350, 100, 10);
                location.reload();
            }else{
                this.barraDeVida.clear()
                this.barraDeVida.fillStyle(0xff0000, 1);
                this.barraDeVida.fillRect(212, 350, this.Jogador.vida, 10);
                this.barraDeVida.lineStyle(4, 0xffffff, 1);
                this.barraDeVida.strokeRect(212, 350, 100, 10);
            }
        }
}