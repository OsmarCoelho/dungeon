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
            if(i == 3){
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 0);
                plataformas.create(aux, (auy-(32*i)), 'ch0').setOrigin(0, 0).refreshBody().setSize(8, 4, false).setOffset(24, 26);
                for(let c = 0; c <= 5; c++){
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 7, false).setOffset(0, 26);
                    plataformas.create((aux+32) + (32*c), (auy-(32*i)), 'ch1').setOrigin(0, 0).refreshBody().setSize(32, 6, false).setOffset(0, 0);
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
        //fim Jogador

        //inimigos
        let inimigo = new Inimigo(this, 300, 200);
        this.Inimigo = inimigo;

        this.physics.add.collider(inimigo.sprite, plataformas);
        //fim inimigos
        
       

        //Tochas
        let tochas = [];

        for(let t = 0; t < 12; t++){
            let tocha = new Tocha(this, (50 + (t * 32)), 25);
            tochas.push(tocha);
        }
        
        this.tochas = tochas;
        // Fim tochas

        this.teclas = this.input.keyboard.createCursorKeys();      
    }

    update() {
        const jogador = this.Jogador.sprite;
        const inimigo = this.Inimigo;
        const tochas = this.tochas;

        //Assets
        for(let t = 0; t < 12; t++){
            tochas[t].sprite.anims.play('queimar', true);
        }
        //fim assets

        
        //movimentação do inimigo
        if(inimigo.ver(jogador.x, jogador.y) == true){
			inimigo.sprite.anims.play('movendo', true);
            inimigo.anda(jogador.x, jogador.y);
		} else{
			inimigo.sprite.anims.play('parado', true);
        }
        //fim movimentação do inimigo
        
        
        //movimentação do personagem
        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-160);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }else if (this.teclas.right.isDown) {
            jogador.setVelocityX(160);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } else if(this.teclas.up.isDown){
            jogador.setVelocityY(-160);
            jogador.setFlip(false, false)
            jogador.anims.play('cima', true);
        }else if(this.teclas.down.isDown){
            jogador.setVelocityY(160);
            jogador.setFlip(false, false)
            jogador.anims.play('baixo', true);
        }else {
            jogador.setVelocityX(0);
            jogador.setVelocityY(0);
            jogador.anims.play('idle');
        }
        //fim movimentação do personagem
        
    }
}