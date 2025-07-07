var startgame3 = false
var levelselect = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function levelselect() {
        Phaser.Scene.call(this, {
            key: 'levelselect'
        });
    },
    preload: function () {
        startgame3 = false
        pageNo = 3
    },
    create: function () {
        console.log(level)
        levelselectbackground = this.add.sprite(0, 0, 'levelselectbackground').setOrigin(0, 0)
        levelselecttext = this.add.sprite(111, 5, 'levelselecttext').setOrigin(0, 0)
        dots = this.add.sprite(242, 773, 'dots').setOrigin(0, 0)



        var levelaxrr = [, 3, 141, 278, 415, 3, 141, 278, 416, 3, 140, 278, 415, 3, 140, 278, 415, 3, 140, 278, 415, 4, 142, 279, 417, 4, 142, 280, 417, 5, 142, 280, 417, 3, 143, 279, 417, 4, 142, 279, 417]
        var levelayrr = [, 81, 81, 81, 81, 214, 214, 214, 214, 347, 347, 347, 347, 480, 480, 480, 480, 617, 617, 617, 617, 81, 81, 81, 81, 214, 214, 214, 214, 348, 348, 348, 348, 481, 481, 481, 481, 616, 616, 616, 616]
        for (i = 1; i <= 40; i++) {
            game['level' + i] = this.add.sprite(levelaxrr[i], levelayrr[i], 'level' + i).setOrigin(0.5, 0.5)
            game['level' + i].x += parseFloat(game['level' + i].width / 2)
            game['level' + i].y += parseFloat(game['level' + i].height / 2)
        }

        levelcontainer1 = this.add.container()
        for (i = 1; i <= 20; i++) {
            levelcontainer1.add(game['level' + i])
        }

        levelcontainer2 = this.add.container()
        for (i = 21; i <= 40; i++) {
            levelcontainer2.add(game['level' + i])
        }

        levelcontainer2.x = 560



        if (level > 1) {
            for (i = 1; i < level; i++) {
                game['level' + i].setFrame(1)
            }
        }



        larrow = this.add.sprite(394, 792.5, 'larrow').setOrigin(0.5, 0.5).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        larrow.setScale(0.9, 0.9)

        rarrow = this.add.sprite(166, 792.5, 'larrow').setOrigin(0.5, 0.5).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        rarrow.setScale(-0.9, 0.9)

        game.scene.scenes[pageNo].tweens.add({
            targets: larrow,
            x: larrow.x + 4,
            ease: 'Linear',
            duration: 700,
            repeat: -1,
            yoyo: true,
        });
        game.scene.scenes[pageNo].tweens.add({
            targets: rarrow,
            x: rarrow.x - 4,
            ease: 'Linear',
            duration: 700,
            repeat: -1,
            yoyo: true,
        });


        if (level > 20) {
            larrow.visible = false
            rarrow.visible = true
            levelcontainer1.x = -560
            levelcontainer2.x = 0
            dots.setFrame(1)
        } else {
            larrow.visible = true
            rarrow.visible = false
            levelcontainer1.x = 0
            levelcontainer2.x = 560
            dots.setFrame(0)
        }




        stargilter = this.add.sprite(game['level' + 1].x, game['level' + 1].y, 'stargilter').setOrigin(0.5, 0.5)
        stargilter.setScale(1)
        anim = this.anims.create({
            key: 'stargilter',
            frames: this.anims.generateFrameNumbers('stargilter', {
                start: 0,
                end: 44
            }),
            frameRate: 30,
        });
        stargilter.setBlendMode(Phaser.BlendModes.ADD);

        levelcontainer = this.add.container()

        levelcontainer.add(levelcontainer1)
        levelcontainer.add(levelcontainer2)
        levelcontainer.add(stargilter)




        logomutefun()
        transitionOut()
        this.load.on('complete', function () {
            loadFinish = true;
        });


        this.load.start();
    }
});

function loadPicture4() {
    game.load.start();
}

function levelselectstart() {

    larrow.on('pointerdown', larrowdownstart)

    function larrowdownstart() {
        dots.setFrame(1)
        larrow.visible = false
        rarrow.visible = true
        playsoundeffects('clickss')
        larrow.disableInteractive()
        rarrow.disableInteractive()
        console.log(1)
        game.scene.scenes[pageNo].tweens.add({
            targets: levelcontainer1,
            x: -560,
            ease: 'Back',
            duration: 700,
        });
        game.scene.scenes[pageNo].tweens.add({
            targets: levelcontainer2,
            x: 0,
            ease: 'Back',
            duration: 700,
            onComplete: larrowtween
        });

        function larrowtween() {
            rarrow.setInteractive()
        }







    }

    rarrow.on('pointerdown', rarrowdownstart)

    function rarrowdownstart() {
        dots.setFrame(0)
        larrow.visible = true
        rarrow.visible = false
        playsoundeffects('clickss')

        larrow.disableInteractive()
        rarrow.disableInteractive()
        console.log(1)
        game.scene.scenes[pageNo].tweens.add({
            targets: levelcontainer1,
            x: 0,
            ease: 'Back',
            duration: 700,
        });
        game.scene.scenes[pageNo].tweens.add({
            targets: levelcontainer2,
            x: 560,
            ease: 'Back',
            duration: 700,
            onComplete: larrowtween
        });

        function larrowtween() {
            larrow.setInteractive()
        }





    }





    if (level < 41) {
        setTimeout(levestartFun11, 100)

        function levestartFun11() {
            game['level' + level].setFrame(1)
            stargilter.setPosition(game['level' + level].x, game['level' + level].y)
            stargilter.anims.load('stargilter')
            stargilter.anims.play('stargilter')
            stargilter.on('animationcomplete', stargiltercomplete, this);
            //            playsoundeffects('glitter')


            function stargiltercomplete() {
                for (i = 1; i <= level; i++) {
                    game['level' + i].setInteractive({
                        pixelPerfect: true,
                        useHandCursor: true
                    })
                    game['level' + i].on('pointerover', leveloverstart)
                    game['level' + i].on('pointerout', leveloutstart)
                    game['level' + i].on('pointerdown', leveldownstart)
                }


            }
        }
    } else {
        for (i = 1; i <= 40; i++) {
            game['level' + i].setInteractive({
                pixelPerfect: true,
                useHandCursor: true
            })
            game['level' + i].on('pointerover', leveloverstart)
            game['level' + i].on('pointerout', leveloutstart)
            game['level' + i].on('pointerdown', leveldownstart)
        }
    }



    function leveloverstart() {
        this.setScale(1.05)
    }

    function leveloutstart() {
        this.setScale(1)
    }

    function leveldownstart() {
        if (!startgame3) {
            startgame3 = true
            sno = this.texture.key.substr(5)
            lcount = parseInt(sno)

            this.setScale(1)
            playsoundeffects('itemclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: game['level' + lcount],
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: leveldownstarttween,
                callbackScope: this
            });
//            showNextAd()
        }

    }



    function leveldownstarttween() {
        this.setScale(1.05)
        transitionIn()

    }



}
