import menu from './menu.js';
import carrega from './carrega.js';
import cenaI from './cenaI.js';
import cenaII from './cenaII.js';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'cena',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: [
        menu,
        carrega,
        cenaI,
        cenaII
    ]
};

const jogo = new Phaser.Game(config);