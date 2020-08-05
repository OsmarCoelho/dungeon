import menu from './menu.js';
import carrega from './carrega.js';
import cenaI from './cenaI.js';

const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 480,
    parent: 'cena',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [
        menu,
        carrega,
        cenaI
    ]
};

const jogo = new Phaser.Game(config);