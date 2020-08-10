import menu from './menu.js';
import carrega from './carrega.js';
import cenaI from './cenaI.js';
import cenaII from './cenaII.js';
import cenaIII from './cenaIII.js';

import cutI from './cutI.js';
import cutII from './cutII.js';
import cutIII from './cutIII.js';

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
            debug: false
        }
    },
    scene: [
        menu,
        carrega,
        cenaI,
        cenaII,
        cenaIII,
        cutI,
        cutII,
        cutIII
    ]
};

const jogo = new Phaser.Game(config);