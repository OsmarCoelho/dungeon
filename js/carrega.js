export default class carrega extends Phaser.Scene {
    constructor() {
        super({
            key: 'carrega'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const barraDeProgresso = this.add.graphics();

        // registra evento de progresso para atualizar a barra de progresso
        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            // barra branca preenchida
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            // contorno amarelo
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });

        this.load.on('complete', () => {
            this.scene.start('cenaI');
        });

        //tiles base do chão
        this.load.image('bid', 'imgs/tiles/bid.png');
        this.load.image('bie', 'imgs/tiles/bie.png');
        this.load.image('bsd', 'imgs/tiles/bsd.png');
        this.load.image('bse', 'imgs/tiles/bse.png');
        this.load.image('m', 'imgs/tiles/m.png');
        this.load.image('mi', 'imgs/tiles/mi.png');
        this.load.image('ms', 'imgs/tiles/ms.png');
        this.load.image('pm', 'imgs/tiles/pm.png');
        this.load.image('pmd', 'imgs/tiles/pmd.png');
        this.load.image('pmdp', 'imgs/tiles/pmdp.png');

            //tiles base porta
            this.load.image('mip', 'imgs/tiles/mip.png');
            this.load.image('pedp', 'imgs/tiles/pedp.png');

        //tiles do corredor
        //horizontal
        this.load.image('ch0', 'imgs/tiles/corredor/horizontal/00.png');
        this.load.image('ch1', 'imgs/tiles/corredor/horizontal/01.png');
        this.load.image('ch2', 'imgs/tiles/corredor/horizontal/02.png');

        //vertical baixo
        this.load.image('cvb0', 'imgs/tiles/corredor/vertical/baixo/00.png');
        this.load.image('cvb1', 'imgs/tiles/corredor/vertical/baixo/01.png');
        this.load.image('cvb2', 'imgs/tiles/corredor/vertical/baixo/02.png');

        //assets
        this.load.spritesheet('tochas', 'imgs/tochas.png', { frameWidth: 16, frameHeight: 16 });
        this.load.image('tiro', 'imgs/tiro.png');
        this.load.image('tiroV', 'imgs/tiroV.png');
        this.load.image('canhao', 'imgs/canhao.png');

        //personagens
        this.load.spritesheet('dem', 'imgs/dem.png', {frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('cav', 'imgs/cav.png', {frameWidth: 16, frameHeight: 28 });
        this.load.spritesheet('bigdem', 'imgs/bigdem.png', {frameWidth: 32, frameHeight: 36 });
    }

    create() {

    }

    update() {

    }
}