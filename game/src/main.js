import GameScene from "./GameScene.js";

const config = {

    type: Phaser.AUTO,

    width: 800,

    height: 450,

    backgroundColor: "#87CEEB",

    physics: {

        default: "arcade",

        arcade: {

            gravity: {

                y: 900

            },

            debug: false

        }

    },

    scene: [GameScene]

};

new Phaser.Game(config);
