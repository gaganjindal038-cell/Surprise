import GameScene from "./GameScene.js";

const config = {

    type: Phaser.AUTO,

    parent: "game",

    width: 390,

    height: 844,

    backgroundColor: "#7ec0ee",

    scale:{

        mode:Phaser.Scale.FIT,

        autoCenter:Phaser.Scale.CENTER_BOTH

    },

    physics:{

        default:"arcade",

        arcade:{

            gravity:{
                y:1200
            },

            debug:false

        }

    },

    scene:[GameScene]

};

new Phaser.Game(config);
