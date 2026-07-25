export default class GameScene extends Phaser.Scene {

    constructor(){

        super("GameScene");

    }

    create(){

        this.add.text(

            260,
            40,

            "LEVEL 2",

            {

                fontSize:"40px",

                color:"#ffffff"

            }

        );

    }

}
