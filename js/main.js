import menu from './menu.js';
import carrega from './carrega.js';
import cenaI from './cenaI.js';

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 360,
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
        cenaI
    ]
};

const jogo = new Phaser.Game(config);