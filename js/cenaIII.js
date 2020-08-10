import Jogador from "./jogador.js";
import Boss from "./boss.js";
import Tocha from "./tocha.js";
import Tiro from "./Tiro.js";


export default class cenaIII extends Phaser.Scene {
    constructor() {
        super({
            key: 'cenaIII'
        });
    }

    preload() {

    }

    create() {
        //Inicio cenario
        const background = this.add.graphics();
        background.fillStyle(0x000000, 1);
        background.fillRect(0, 0, 1080, 480);

        this.criaCenario();
        //fim cenario

        //Jogador
        let jogador = new Jogador(this, 50, 130);
        this.Jogador = jogador;
        this.physics.add.collider(jogador.sprite, this.plataformas);

        this.barraDeVida = this.add.graphics();
        this.barraDeVida.fillStyle(0xff0000, 1);
        this.barraDeVida.fillRect(247, 530, jogador.vida, 10);
        this.barraDeVida.lineStyle(4, 0xffffff, 1);
        this.barraDeVida.strokeRect(247, 530, 100, 10);
        this.barraDeVida.setScrollFactor(0);
        //fim Jogador

        //boss
        let inimigos = [];

        inimigos.push(new Boss(this, 550, 200, 'bigdem', 60, 350, 480));


        for(let i = 0; i < inimigos.length; i ++){
            this.physics.add.collider(inimigos[i].sprite, this.plataformas);
            this.physics.add.collider(inimigos[i].sprite, jogador.sprite);
        }
        for(let i = 0; i < inimigos.length; i ++){
            for(let g = 0; g < inimigos.length; g ++){
                this.physics.add.collider(inimigos[i].sprite, inimigos[g].sprite);
            }
        }

        this.vidaBoss = this.add.graphics();
        this.vidaBoss.fillStyle(0xff0000, 1);
        this.vidaBoss.fillRect(440, 530, inimigos[0].vida, 10);
        this.vidaBoss.lineStyle(4, 0xffffff, 1);
        this.vidaBoss.strokeRect(440, 530, inimigos[0].vida, 10);
        this.vidaBoss.setScrollFactor(0);

        this.inimigos = inimigos;
        //fim boss
    

        //Tochas
        let tochas = [];

        for(let t = 0; t < 11; t++){
            tochas.push(new Tocha(this, (50 + (50*t)), 25));
        }

        this.tochas = tochas;
        // Fim tochas

        //Configurações adicionais
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
        //fim configurações
        
    }
    update() {
        const jogador = this.Jogador.sprite;
        const boss = this.boss;
        const tochas = this.tochas;

        //Assets
            //Tochas
        for(let t = 0; t < tochas.length; t++){
            tochas[t].sprite.anims.play('queimar', true);
        }
        //fim Assets
        
        //Movimentação e colisão do inimigo
        
      
            this.inimigos[0].ver(jogador.getCenter());
            if(this.inimigos[0].ver(jogador.getCenter()) <= (this.inimigos[0].h/2 + 5)){
                if(this.inimigos[0].corpo == true){
                    this.inimigos[0].corpo = false;
                    this.atualizaVidaBoss(1);    
                    this.atualizaVida();
                    setTimeout(this.inimigos[0].corpo = true, 3000);
                }
            }     
        
        //fim movimentação e colisão
        
        

        
        
        //movimentação do personagem
        if(this.teclas.left.isDown) {
            jogador.setVelocityX(-100);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
            this.Jogador.lado = 'E';
        }else if (this.teclas.right.isDown) {
            jogador.setVelocityX(100);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
            this.Jogador.lado = 'D';
        } else if(this.teclas.up.isDown){
            jogador.setVelocityY(-100);
            jogador.setFlip(false, false)
            jogador.anims.play('cima', true);
            this.Jogador.lado = 'C';
        }else if(this.teclas.down.isDown){
            jogador.setVelocityY(100);
            jogador.setFlip(false, false)
            jogador.anims.play('baixo', true);
            this.Jogador.lado = 'B';
        }else {
            jogador.setVelocityX(0);
            jogador.setVelocityY(0);
            jogador.anims.play('idle', true);
        }

        this.input.on('pointermove', (e) => {
            this.pointerX = e.x;
            this.pointerY = e.y;
        });
        this.input.on('pointerdown', () => {
            jogador.anims.play('atira', true);
            this.atualizaTiro(); 
        })

        
        //fim movimentação do personagem
        
    }


    atualizaTiro(){
        if(this.Jogador.podeAtirar == true){
            this.Jogador.atirar(this.pointerX, this.pointerY);
            for(let j = 0; j < this.Jogador.tiro.length; j++){
                console.log(this.pointerX, this.pointerY);
                
                
                for(let i = 0; i < this.inimigos.length; i ++){
                    let aux;
                    this.physics.add.collider(this.inimigos[i].sprite, this.Jogador.tiro[j].sprite, () => {
                        this.Jogador.destroi(this.Jogador.tiro[j]);
                        this.atualizaVidaBoss(10);
                    });
                }
                this.physics.add.collider(this.plataformas, this.Jogador.tiro[j].sprite, () => {
                    this.Jogador.destroi(this.Jogador.tiro[j]);
                });
                this.physics.add.collider(this.Jogador.sprite, this.Jogador.tiro[j].sprite);
            }
        }     
    }

    atualizaVidaBoss(dano){
        this.inimigos[0].atualizaVida(this.inimigos, this.inimigos[0], dano);
        if(this.vida <= 0){
            this.vidaBoss.clear()
            this.vidaBoss.fillStyle(0xff0000, 1);
            this.vidaBoss.fillRect(440, 530, 0, 10);
            this.vidaBoss.lineStyle(4, 0xffffff, 1);
            this.vidaBoss.strokeRect(440, 530, 350, 10);
        }else{
            this.vidaBoss.clear()
            this.vidaBoss.fillStyle(0xff0000, 1);
            this.vidaBoss.fillRect(440, 530, this.inimigos[0].vida, 10);
            this.vidaBoss.lineStyle(4, 0xffffff, 1);
            this.vidaBoss.strokeRect(440, 530, 350, 10);
        }
    }
    atualizaVida(){
        this.Jogador.vida = this.Jogador.vida - 2;
        if(this.Jogador.vida <= 0){
            this.barraDeVida.clear();
            this.barraDeVida.fillStyle(0xff0000, 1);
            this.barraDeVida.fillRect(247, 530, 0, 10);
            this.barraDeVida.lineStyle(4, 0xffffff, 1);
            this.barraDeVida.strokeRect(247, 530, 100, 10);
            this.scene.start('cutII');
        }else{
            this.barraDeVida.clear()
            this.barraDeVida.fillStyle(0xff0000, 1);
            this.barraDeVida.fillRect(247, 530, this.Jogador.vida, 10);
            this.barraDeVida.lineStyle(4, 0xffffff, 1);
            this.barraDeVida.strokeRect(247, 530, 100, 10);
        }
    }

    criaCenario(){
        let i = 0;
        let auy = 0;
        let aux = 0;
        let tamX = 15;
        let tamY = 10;
        this.plataformas = this.physics.add.staticGroup();

        
        this.plataformas.create(32, 20, 'bse').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
        this.plataformas.create(32, 20, 'bse').setOrigin(0, 0).refreshBody().setSize(8, 32, false);

        //for para a parede superior
        for(i = 0; i < tamX; i++){
            this.plataformas.create((64+(32*i)), 20, 'ms').setOrigin(0, 0).refreshBody().setSize(32, 11, false);;
        }

        aux = (64+(32*i));

        this.plataformas.create(aux, 20, 'bsd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
        this.plataformas.create(aux, 20, 'bsd').setOrigin(0, 0).refreshBody().setSize(32, 11, false);
        
        //for para a parede da esquerda
        for(i = 0; i < tamY; i++){
            if(i == 2){
                this.plataformas.create(32, (52+(32*i)), 'pedp').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(0, 0);
            }else{
                this.plataformas.create(32, (52+(32*i)), 'pm').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
            }
        }

        auy = (52+(32*i));

        this.plataformas.create(32, auy, 'bie').setOrigin(0, 0).refreshBody().setSize(8, 32, false);
        this.plataformas.create(32, auy, 'bie').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);

        //for para a parede inferior
        for(i = 0; i < tamX; i++){
            this.plataformas.create((64+(32*i)), auy, 'mi').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
        }

        this.plataformas.create(aux, auy, 'bid').setOrigin(0, 0).refreshBody().setSize(32, 11, false).setOffset(0, 21);
        this.plataformas.create(aux, auy, 'bid').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);

        auy = auy - 32;

        //for para a parede da direita
        for(let i = 0; i < tamY; i++){
                this.plataformas.create(aux, (auy-(32*i)), 'pmd').setOrigin(0, 0).refreshBody().setSize(8, 32, false).setOffset(24, 0);
        }

        //for para preencher o chão
        for(let i = 0; i < tamY; i++){
            for(let c = 0; c < tamX; c++){
                this.add.image((64+(32*c)), (52+(32*i)), 'm').setDisplayOrigin(0, 0);
            }
        }
    }
}