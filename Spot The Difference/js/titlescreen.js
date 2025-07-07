var startgame2 = false
var soundstart = 0
var homeclick = 0
var animate = 0
var count = 0
var completelevel = false
var levelarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var titlescreen = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function titlescreen() {
        Phaser.Scene.call(this, {
            key: 'titlescreen'
        });
    },
    preload: function () {
        pageNo = 2
        loadFinish = false
        startgame2 = false
        soundcheck = true
        animate = 0
        count = 0
        completelevel = false
        homeclick = 0
    },
    create: function () {
        titlebackground = this.add.sprite(0, 0, 'titlebackground').setOrigin(0, 0)



        titlebg = this.add.sprite(278, 341, 'titlebg').setOrigin(0.5, 0.5)
        title1 = this.add.sprite(116, 272, 'title1').setOrigin(0.5, 0.5)
        title2 = this.add.sprite(437.5, 273.5, 'title2').setOrigin(0.5, 0.5)
        title3 = this.add.sprite(287, 323.5, 'title3').setOrigin(0.5, 0.5)
        title4 = this.add.sprite(12, 393.5, 'title4').setOrigin(0.5, 0.5)
        title5 = this.add.sprite(459.5, 393.5, 'title5').setOrigin(0.5, 0.5)
        obj1 = this.add.sprite(427.5, 286.5, 'obj1').setOrigin(0.5, 0.5)


        titlegrp = this.add.container()
        titlegrp.add(titlebg)
        titlegrp.add(title1)
        titlegrp.add(title2)
        titlegrp.add(obj1)
        titlegrp.add(title3)
        titlegrp.add(title4)
        titlegrp.add(title5)

        title1.alpha = 0
        title2.alpha = 0
        title3.alpha = 0
        title4.alpha = 0
        title5.alpha = 0
        titlebg.setScale(0)
        obj1.setScale(0)
        title3.setScale(0)



        game.scene.scenes[pageNo].tweens.add({
            targets: titlebg,
            scale: 1,
            ease: 'Linear',
            duration: 300,
            onComplete: titletransition1,
            callbackScope: this
        });

        function titletransition1() {
            game.scene.scenes[pageNo].tweens.add({
                targets: title1,
                x: title1.x + 100,
                alpha: 1,
                ease: 'Linear',
                duration: 300,

            });
            game.scene.scenes[pageNo].tweens.add({
                targets: title2,
                x: title2.x - 100,
                alpha: 1,
                ease: 'Linear',
                duration: 300,
                onComplete: titletransition2,
                callbackScope: this
            });
        }

        function titletransition2() {
            game.scene.scenes[pageNo].tweens.add({
                targets: title3,
                scale: 1,
                alpha: 1,
                ease: 'Linear',
                duration: 300,
                onComplete: titletransition3,
                callbackScope: this
            });
        }

        function titletransition3() {
            game.scene.scenes[pageNo].tweens.add({
                targets: title4,
                x: title4.x + 100,
                alpha: 1,
                ease: 'Back',
                duration: 300,

            });
            game.scene.scenes[pageNo].tweens.add({
                targets: title5,
                x: title5.x - 100,
                alpha: 1,
                ease: 'Back',
                duration: 300,
                onComplete: titletransition4,
                callbackScope: this
            });
        }

        function titletransition4() {

            game.scene.scenes[pageNo].tweens.add({
                targets: obj1,
                scale: 1,
                ease: 'Back',
                duration: 300,
                onComplete: titletransition5,
                callbackScope: this
            });


        }

        function titletransition5() {
            game.scene.scenes[pageNo].tweens.add({
                targets: title1,
                scaleY: 0.95,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: title2,
                scaleY: 0.95,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });

            game.scene.scenes[pageNo].tweens.add({
                targets: title3,
                scale: 1.05,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: title4,
                scaleY: 1.05,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: title5,
                scaleY: 1.05,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: obj1,
                angle: 4,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });


            game.scene.scenes[pageNo].tweens.add({
                targets: play,
                scale: 1,
                ease: 'Back',
                duration: 300,
                delay: 400,
                onComplete: titletransition6,
                callbackScope: this
            });

        }


        function titletransition6() {

            game.scene.scenes[pageNo].tweens.add({
                targets: play,
                angle: 4,
                ease: 'Linear',
                duration: 300,
                yoyo: true,
                repeat: -1
            });

        }






        play = this.add.sprite(220, 510, 'play').setOrigin(0.5, 0.5).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })
        play.x += parseFloat(play.width / 2);
        play.y += parseFloat(play.height / 2);




        play.setScale(0)


        this.load.on('complete', function () {
            loadFinish = true;
        });
        logomutefun()

        this.load.start();
        if (firstTime) {
            firstTime = false;
            music = this.sound.add('boden');
            music.play({
                loop: true
            });

            titlescreenstart()
        } else {
            soundmute.setFrame(0)
            clickmute.setFrame(0)
            if (isMuted) {
                isMuted = false;
                music.resume();
            }
            if (isMuted1) {
                isMuted1 = false;
            }
            transitionOut()
        }
    },
    update: function () {}
});

function titlescreenstart() {



    play.on('pointerover', playoverstart)
    play.on('pointerout', playoutstart)
    play.on('pointerdown', playdownstart)

    function playoverstart() {
        this.setScale(1.05)
    }

    function playoutstart() {
        this.setScale(1)
    }

    function playdownstart() {
        if (!startgame2 && loadFinish) {
            startgame2 = true
            playsoundeffects('itemclick')

            game.scene.scenes[pageNo].tweens.add({
                targets: play,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: playupstart,
                callbackScope: this
            });

        }
    }

    function playupstart() {
        this.setScale(1.05)
        transitionIn()
    }



}



function logomutefun() {



    if (pageNo > 2) {
        music.volume = 0.3
    }

    soundmute = game.scene.scenes[pageNo].add.image(524, 33.5, 'soundmute').setOrigin(0.5, 0.5).setInteractive({
        useHandCursor: true
    })


    if (isMuted) {
        soundmute.setFrame(1)
        music.pause();
        clicksound.pause();
        clocktick.pause();
    }



    function logo2overstart() {
        this.setScale(1.05)
    }

    function logo2outstart() {
        this.setScale(1)
    }

    clocktick = game.scene.scenes[pageNo].sound.add("clocktick");

    soundmute.on('pointerover', logo2overstart)
    soundmute.on('pointerout', logo2outstart)
    soundmute.on('pointerdown', soundmutedownstart)

    function soundmutedownstart() {
        playsoundeffects('clickss')

        //        this.setScale(1)
        if (!isMuted) {
            isMuted = true;
            soundmute.setFrame(1)
            music.pause();
            clicksound.pause();
            clocktick.pause();
        } else {
            isMuted = false;
            soundmute.setFrame(0)
            music.resume();
            clicksound.resume();
            clocktick.resume();
        }




        game.scene.scenes[pageNo].tweens.add({
            targets: soundmute,
            scale: 0.9,
            ease: 'Linear',
            duration: 100,
            yoyo: true,
            onComplete: soundmuteupstart,
            callbackScope: this
        });

    }

    function soundmuteupstart(ev) {
        this.setScale(1)
        if (isMuted) {
            soundmute.setFrame(1)
        } else {
            soundmute.setFrame(0)
        }
    }

}



function playsoundeffects(clkssed) {
    if (soundstart == 0) {
        if (!isMuted) {
            clicksound = game.scene.scenes[pageNo].sound.add(clkssed);
            clicksound.play();

        }

    }

}


function transitionIn() {
    if (pageNo == 2) {
        game.scene.scenes[pageNo].scene.stop('titlescreen')
        game.scene.run('levelselect');
    } else if (pageNo == 3) {
        game.scene.scenes[pageNo].scene.stop('levelselect')
        game.scene.run('level1');
    } else if (pageNo == 4 && homeclick == 0) {
        game.scene.scenes[pageNo].scene.restart();
    } else if (pageNo == 4 && homeclick == 1) {
        game.scene.scenes[pageNo].scene.stop('level1')
        game.scene.run('levelselect');
    }


}

function transitionOut() {
    if (pageNo == 2) {
        titlescreenstart()
    } else if (pageNo == 3) {
        levelselectstart()
    } else if (pageNo == 4) {
        level1start()
    }

}
