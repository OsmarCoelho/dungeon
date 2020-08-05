import Jogador from "./jogador.js";
import Inimigo from "./inimigo.js";
import Tocha from "./tocha.js";

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
        let auy = 0;
        let aux = 0;
        let tamX = 10;
        let tamY = 5;
        

        //Inicio cenario
        const background = this.add.graphics();
        background.fillStyle(0x000000, 1);
        background.fillRect(0, 0, 720, 360);


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
            //corredor
            if(i == 3){
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 0);
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 26);
                for(let c = 0; c <= 5; c++){
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 6, false).setOffset(0, 26);
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 4, false).setOffset(0, 0);
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
        //fim cenario

        //Jogador
        let jogador = new Jogador(this);
        this.Jogador = jogador;
        this.physics.add.collider(jogador.sprite, plataformas);

        this.barraDeVida = this.add.graphics();
        this.barraDeVida.fillStyle(0xff0000, 1);
        this.barraDeVida.fillRect(10, 340, jogador.vida, 10);
        this.barraDeVida.lineStyle(4, 0xffffff, 1);
        this.barraDeVida.strokeRect(10, 340, 100, 10);
        //fim Jogador

        //inimigos
        let inimigos = [];
        for(let i = 0; i < 5; i ++){
            let inimigo = new Inimigo(this, (300 - (32*i)), (200 - (5*i)));
            inimigos.push(inimigo);
            
            this.physics.add.collider(inimigos[i].sprite, plataformas);
            this.physics.add.collider(inimigos[i].sprite, jogador.sprite);
        }
        for(let i = 0; i < 5; i ++){
            for(let g = 0; g < 5; g ++){
                this.physics.add.collider(inimigos[i].sprite, inimigos[g].sprite);
            }
        }


        this.inimigos = inimigos;
        //fim inimigos
        
       

        //Tochas
        let tochas = [];

        for(let t = 0; t < 12; t++){
            let tocha = new Tocha(this, (50 + (t * 32)), 25);
            tochas.push(tocha);
        }
        
        this.tochas = tochas;
        // Fim tochas

        this.teclas = this.input.keyboard.addKeys({
            up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D
        }); 
        this.cameras.main.setBounds(0, 0, 1000, 360);
        this.cameras.main.startFollow(jogador, true, 0.08, 0.08);

        
    }
    update() {
        const jogador = this.Jogador.sprite;
        const inimigos = this.inimigos;
        const tochas = this.tochas;
        let bx = 10;
        let by = 340;

        //Assets
        for(let t = 0; t < 12; t++){
            tochas[t].sprite.anims.play('queimar', true);
        }
        //fim assets

        if(this.teclas.left.isDown && this.Jogador.x > 0){
            this.Jogador.x -= 2.5;
            bx+=2.5;
        }else if(this.teclas.right.isDown && this.Jogador.x < 1000){
            this.Jogador.x += 2.5;
            bx+=2.5;
        }if(this.teclas.up.isDown && this.Jogador.y > 0){
            this.Jogador.y -= 2.5;
            by+=2.5;
        }else if (this.teclas.down.isDown && this.Jogador.y < 360){
            this.Jogador.y += 2.5;
            by+=2.5;
        }
        
        //movimentação do inimigo
        for(let i = 0; i < inimigos.length; i++){
            if(inimigos[i].ver(jogador.getCenter()) <= 75){
                if(inimigos[i].ver(jogador.getCenter()) <= 15){
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
        //fim movimentação do inimigo

        
        
        //movimentação do personagem
        if (this.teclas.left.isDown) {
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
        }else {
            jogador.setVelocityX(0);
            jogador.setVelocityY(0);
            jogador.anims.play('idle');
        }
        //fim movimentação do personagem
        
    }
    atualizaVida(){
        this.Jogador.vida = this.Jogador.vida - 10;
        console.log(this.Jogador.vida);
            if(this.Jogador.vida <= 0){
                this.barraDeVida.clear()
                this.barraDeVida.fillStyle(0xff0000, 1);
                this.barraDeVida.fillRect(10, 340, 0, 10);
                this.barraDeVida.lineStyle(4, 0xffffff, 1);
                this.barraDeVida.strokeRect(10, 340, 100, 10);
                location.reload();
            }else{
                this.barraDeVida.clear()
                this.barraDeVida.fillStyle(0xff0000, 1);
                this.barraDeVida.fillRect(10, 340, this.Jogador.vida, 10);
                this.barraDeVida.lineStyle(4, 0xffffff, 1);
                this.barraDeVida.strokeRect(10, 340, 100, 10);
            }
        }
}