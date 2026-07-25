export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    preload() {
        // Nothing to load yet
    }

    create() {

        // ---------- WORLD ----------

        this.physics.world.setBounds(0, 0, 2500, 844);

        // Sky
        this.cameras.main.setBackgroundColor("#7ec0ee");

        // ---------- GROUND ----------

        this.ground = this.physics.add.staticGroup();

        for (let x = 0; x < 2500; x += 64) {

            const block = this.add.rectangle(x + 32, 812, 64, 64, 0x4caf50);

            this.physics.add.existing(block, true);

            this.ground.add(block);

        }

        // ---------- PLAYER ----------

        this.player = this.add.rectangle(120, 500, 40, 60, 0x2196f3);

        this.physics.add.existing(this.player);

        this.player.body.setCollideWorldBounds(true);

        this.player.body.setSize(40, 60);

        this.physics.add.collider(this.player, this.ground);

        // ---------- CAMERA ----------

        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

        this.cameras.main.setBounds(0, 0, 2500, 844);

        // ---------- CONTROLS ----------

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(
            20,
            20,
            "← → Move   ↑ Jump",
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        ).setScrollFactor(0);

    }

    update() {

        const speed = 250;

        if (this.cursors.left.isDown) {

            this.player.body.setVelocityX(-speed);

        }
        else if (this.cursors.right.isDown) {

            this.player.body.setVelocityX(speed);

        }
        else {

            this.player.body.setVelocityX(0);

        }

        if (
            this.cursors.up.isDown &&
            this.player.body.blocked.down
        ) {

            this.player.body.setVelocityY(-600);

        }

    }

}
