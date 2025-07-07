var startgame4 = false
var clickstart = 0
var bgcolor = [0X007cfe, 0xee3b94, 0x00e4d5, 0xffba01, 0xffba01, 0x6d00b1, 0xe42ce8]
var level1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function level1() {
        Phaser.Scene.call(this, {
            key: 'level1'
        });
    },
    preload: function () {
        pageNo = 4
        startgame4 = false
        count = 0
        loadFinish = false
        clickstart = 0
    },
    create: function () {
        console.log(level)
        level1background = this.add.image(0, 0, 'level1background').setOrigin(0, 0).setInteractive()
        var value = Phaser.Math.Between(0, 6)
        level1background.setTint(bgcolor[value])
        var value1 = Phaser.Math.Between(1, 13)
        game['apattern' + value1] = this.add.sprite(0, 0, 'pattern' + value1).setOrigin(0, 0)
        game['bpattern' + value1] = this.add.sprite(0, 854, 'pattern' + value1).setOrigin(0, 0)



        patterntween()

        function patterntween() {
            game['bpattern' + value1].y = 854
            game.scene.scenes[pageNo].tweens.add({
                targets: game['apattern' + value1],
                y: -854,
                ease: 'Linear',
                duration: 8000,
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: game['bpattern' + value1],
                y: 0,
                ease: 'Linear',
                duration: 8000,
                onComplete: patterntween1
            });
        }

        function patterntween1() {
            game['apattern' + value1].y = 854
            game.scene.scenes[pageNo].tweens.add({
                targets: game['apattern' + value1],
                y: 0,
                ease: 'Linear',
                duration: 8000,
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: game['bpattern' + value1],
                y: -854,
                ease: 'Linear',
                duration: 8000,
                onComplete: patterntween
            });
        }








        var picaxarr = [, 283, 282, 282.5, 281, 281.5, 282, 281.5, 281, 282.5, 282, 280.5, 281.5, 281, 280.5, 281.5, 280.5, 281.5, 281.5, 281.5, 282.5, 282, 282, 280, 280, 281, 282, 281.5, 280.5, 282, 282, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5]
        var picayarr = [, 364, 364.5, 365, 362.5, 366.5, 364.5, 361.5, 364.5, 364, 363, 364.5, 364, 364.5, 363, 366.5, 362, 363.5, 364, 363, 364.5, 365, 362, 364.5, 364.5, 361.5, 363, 362.5, 363.5, 363.5, 363.5, 365.5, 361.5, 362.5, 362.5, 363.5, 363.5, 363.5, 363.5, 363.5, 363.5]
        game['apicture' + lcount] = this.add.sprite(picaxarr[lcount] + 600, picayarr[lcount], 'apicture' + lcount).setOrigin(0.5, 0.5).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })

        var picbxarr = [, 283, 282, 282.5, 281, 281.5, 282, 281.5, 281, 282.5, 282, 280.5, 281.5, 281, 280.5, 281.5, 280.5, 281.5, 281.5, 281.5, 282.5, 282, 282, 280, 280, 281, 282, 281.5, 280.5, 282, 282, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5, 282.5]
        var picbyarr = [, 676, 675.5, 675, 675.5, 675.5, 676.5, 676.5, 677.5, 675, 675, 672.5, 673, 674.5, 673, 675.5, 675, 673.5, 676, 676, 675.5, 675, 675, 674.5, 675.5, 674.5, 675, 675.5, 676.5, 676.5, 674.5, 672.5, 674.5, 674.5, 673.5, 673.5, 672.5, 672.5, 672.5, 672.5, 674.5]
        game['bpicture' + lcount] = this.add.sprite(picbxarr[lcount] + 600, picbyarr[lcount], 'bpicture' + lcount).setOrigin(0.5, 0.5).setInteractive({
            pixelPerfect: true,
            useHandCursor: true
        })

        game.scene.scenes[pageNo].tweens.add({
            targets: game['apicture' + lcount],
            x: picaxarr[lcount],
            ease: 'Back',
            duration: 400,

        });
        game.scene.scenes[pageNo].tweens.add({
            targets: game['bpicture' + lcount],
            x: picbxarr[lcount],
            ease: 'Back',
            duration: 400,
            delay: 150,
            onComplete: objecttween

        });

        function objecttween() {
            game.scene.scenes[pageNo].tweens.add({
                targets: game['apicture' + lcount],
                angle: 1,
                ease: 'Linear',
                duration: 400,
                repeat: -1,
                yoyo: true
            });
            game.scene.scenes[pageNo].tweens.add({
                targets: game['bpicture' + lcount],
                angle: 1,
                ease: 'Linear',
                duration: 400,
                repeat: -1,
                yoyo: true
            });
        }





        var ahitxarr = [, 243.5, 316.5, 427.5, 202.5, 464.5, 368.5, 228.5, 365.5, 468.5, 118.5, 210.5, 447.5, 134.5, 310.5, 428.5, 105.5, 215.5, 367.5, 130.5, 327.5, 480.5, 164.5, 287.5, 393.5, 133.5, 195.5, 373.5, 119.5, 193.5, 444.5, 126.5, 154.5, 373.5, 229.5, 364.5, 449.5, 99.5, 189.5, 427.5, 83.5, 301.5, 443.5, 121.5, 322.5, 338.5, 202, 353, 353, 218.5, 311.5, 458.5, 128, 266, 447, 177, 357, 402, 125, 300, 303, 171, 356, 337, 278, 291, 395, 145, 224, 397, 145, 260, 450, 197, 201, 411, 158, 369, 373, 178, 285, 474, 209, 420, 405, 269, 370, 404, 227, 357, 459, 159, 445, 283, 149, 318, 458, 135, 360, 253, 120, 116, 414, 162, 393, 283, 158, 292, 454, 148, 309, 387, 210, 261, 475, 122, 417, 269, 204, 336, 475]
        var ahityarr = [, 391, 256, 327, 367, 278, 419, 405, 278, 385, 367, 466, 285, 308, 364, 324, 412, 312, 291, 421, 460, 278, 378, 464, 466, 333, 427, 315, 377, 314, 373, 451, 264, 417, 328, 325, 370, 390, 313, 355, 467, 363, 292, 331, 286, 466, 363, 292, 414, 408.5, 289.5, 370.5, 393, 286, 451, 277, 312, 428, 350, 265, 427, 355, 259, 421, 428, 268, 362, 335, 277, 448, 320, 456, 411, 459.5, 256.5, 285.5, 345.5, 302.5, 424.5, 461.5, 362.5, 368.5, 270.5, 297.5, 425.5, 459.5, 275.5, 370.5, 366.5, 327.5, 442.5, 286.5, 290.5, 402.5, 395.5, 291.5, 382.5, 326.5, 310.5, 386.5, 459.5, 272.5, 310.5, 261.5, 270.5, 433.5, 286.5, 307.5, 307.5, 313.5, 344.5, 410.5, 415.5, 310.5, 377.5, 298.5, 377.5, 385.5, 291.5, 382.5, 363.5]
        for (i = 1; i <= 3; i++) {
            game['ahit' + i] = this.add.sprite(ahitxarr[(lcount - 1) * 3 + i], ahityarr[(lcount - 1) * 3 + i], 'ahit' + i).setOrigin(0.5, 0.5)
            game['ahit' + i].alpha = 0
        }
        var bhitxarr = [, 242.5, 316.5, 427.5, 202.5, 463.5, 368.5, 228.5, 365.5, 468.5, 117.5, 210.5, 447.5, 134.5, 309.5, 428.5, 105.5, 215.5, 367.5, 131.5, 327.5, 480.5, 164.5, 287.5, 393.5, 133.5, 195.5, 373.5, 119.5, 193.5, 444.5, 125.5, 154.5, 373.5, 229.5, 364.5, 450.5, 99.5, 189.5, 427.5, 83.5, 301.5, 444.5, 121.5, 322.5, 338.5, 203, 353, 352, 217.5, 311.5, 458.5, 127, 266, 448, 177, 357, 402, 125, 300, 303, 172, 356, 337, 277, 291, 396, 145, 225, 397, 145, 260, 450, 196, 200, 411, 158, 369, 373, 178, 285, 474, 210, 421, 406, 270, 370, 405, 227, 357, 459, 159, 446, 283, 149, 318, 458, 131, 355, 247, 118, 116, 414, 159, 389, 285, 158, 292, 454, 148, 308, 386, 210, 261, 474, 121, 417, 270, 204, 337, 474]
        var bhityarr = [, 698, 563, 634, 678, 588, 730, 710, 583, 690, 678, 776, 596, 619, 674, 636, 722, 621, 601, 732, 771, 589, 686, 772, 775, 644, 738, 627, 685, 622, 682, 762, 573, 727, 637, 635, 679, 703, 626, 668, 781, 677, 606, 645, 602, 780, 673, 600, 723, 717.5, 597.5, 677.5, 701, 594, 759, 594, 628, 744, 662, 577, 739, 662, 567, 728, 741, 582, 676, 647, 588, 760, 629, 765, 720, 769.5, 564.5, 595.5, 657.5, 614.5, 738.5, 774.5, 674.5, 681.5, 583.5, 608.5, 737.5, 769.5, 588.5, 679.5, 675.5, 636.5, 750.5, 596.5, 599.5, 712.5, 707.5, 604.5, 694.5, 645.5, 628.5, 705.5, 768.5, 581.5, 620.5, 574.5, 581.5, 747.5, 597.5, 618.5, 619.5, 639.5, 669.5, 734.5, 730.5, 625.5, 692.5, 608.5, 687.5, 694.5, 602.5, 693.5, 674.5]
        for (i = 1; i <= 3; i++) {
            game['bhit' + i] = this.add.sprite(bhitxarr[(lcount - 1) * 3 + i], bhityarr[(lcount - 1) * 3 + i], 'bhit' + i).setOrigin(0.5, 0.5)
            game['bhit' + i].alpha = 0

        }


        for (i = 1; i <= 3; i++) {
            game['aempty' + i] = this.add.sprite(ahitxarr[(lcount - 1) * 3 + i], ahityarr[(lcount - 1) * 3 + i], 'aempty' + i).setOrigin(0.5, 0.5).setInteractive({
                useHandCursor: true
            });
        }

        for (i = 1; i <= 3; i++) {
            game['bempty' + i] = this.add.sprite(bhitxarr[(lcount - 1) * 3 + i], bhityarr[(lcount - 1) * 3 + i], 'bempty' + i).setOrigin(0.5, 0.5).setInteractive({
                useHandCursor: true
            });

        }




        gameui()


        logomutefun()
        this.load.on('complete', function () {
            loadFinish = true;
        });

        this.load.start();

        transitionOut()

    },
    update: function () {
        if (levelfill.x > 30 && levelfill.x < 170) {
            levelfill.setFrame(1)
        } else if (levelfill.x < 30) {
            levelfill.setFrame(2)
        }
    }
});

function level1start() {
    if (!isMuted) {
        clocktick.play();
    } else {
        clocktick.play();
        clocktick.pause();
    }

    for (i = 1; i <= 3; i++) {
        game['aempty' + i].on('pointerdown', ahitdown)
        game['bempty' + i].on('pointerdown', ahitdown)
    }

    function ahitdown() {
        playsoundeffects('winclick')

        sno = this.texture.key.substr(6)
        game['ahit' + parseInt(sno)].alpha = 1
        game['aempty' + parseInt(sno)].disableInteractive()
        game['bhit' + parseInt(sno)].alpha = 1
        game['bempty' + parseInt(sno)].disableInteractive()

        if (game['okbtn' + 1].frame.name == 0) {
            game['okbtn' + 1].setFrame(1)
        } else if (game['okbtn' + 2].frame.name == 0) {
            game['okbtn' + 2].setFrame(1)
        } else if (game['okbtn' + 3].frame.name == 0) {
            game['okbtn' + 3].setFrame(1)
            setTimeout(wincheck, 1000)
            hintbtn.disableInteractive()
            timer.remove()
        }


    }

    function wincheck() {

        if (game['ahit' + 1].alpha == 1 && game['ahit' + 2].alpha == 1 && game['ahit' + 3].alpha == 1) {
            game['apicture' + lcount].disableInteractive()
            game['bpicture' + lcount].disableInteractive()
            winpanel()

        }

    }




    game['apicture' + lcount].on('pointerdown', picturedown)
    game['bpicture' + lcount].on('pointerdown', picturedown)

    function picturedown() {

        if (game['lifebtn' + 1].frame.name == 0) {
            playsoundeffects('wrongclick')
            game['lifebtn' + 1].setFrame(1)
        } else if (game['lifebtn' + 2].frame.name == 0) {
            playsoundeffects('wrongclick')
            game['lifebtn' + 2].setFrame(1)
        } else if (game['lifebtn' + 3].frame.name == 0) {
            playsoundeffects('wrongclick')
            game['lifebtn' + 3].setFrame(1)
            timer.remove()
            setTimeout(failedcheck, 1000)

            for (i = 1; i <= 3; i++) {
                game['aempty' + i].disableInteractive()
                game['bempty' + i].disableInteractive()

            }
            hintbtn.disableInteractive()
        }
    }

    function failedcheck() {

        failedpanel()
    }

}

function gameui() {
    var lifexarr = [, 8, 51, 92]
    var lifeyarr = [, 12, 12, 12]
    for (i = 1; i <= 3; i++) {
        game['lifebtn' + i] = game.scene.scenes[pageNo].add.sprite(lifexarr[i], lifeyarr[i], 'lifebtn').setOrigin(0, 0)

    }

    var okxarr = [, 203, 242, 281]
    var okyarr = [, 73, 73, 73]
    for (i = 1; i <= 3; i++) {
        game['okbtn' + i] = game.scene.scenes[pageNo].add.sprite(okxarr[i], okyarr[i], 'okbtn').setOrigin(0, 0)

    }

    leveltext = game.scene.scenes[pageNo].add.text(200, 10, 'Level: ' + lcount, {
        font: '32px Nunito',

    }).setOrigin(0, 0)

    levelloader = game.scene.scenes[pageNo].add.sprite(103, 140, 'levelloader').setOrigin(0, 0)
    levelfill = game.scene.scenes[pageNo].add.sprite(281.5, 156, 'levelfill').setOrigin(0.5, 0.5)
    levelmask = game.scene.scenes[pageNo].add.sprite(281.5, 157, 'levelmask').setOrigin(0.5, 0.5)

    mask = levelmask.createBitmapMask();
    levelfill.setMask(mask);

    timer = game.scene.scenes[pageNo].time.addEvent({
        delay: 1,
        callback: timecheck,
    });

    function timecheck() {

        if (levelfill.x > -70) {
            levelfill.x = levelfill.x - 0.3
            timer = game.scene.scenes[pageNo].time.addEvent({
                delay: 1,
                callback: timecheck,
            });
        } else {
            if (!isMuted) {
                clocktick.stop();
            }
            timer.remove()
            timeuppanel()
        }
    }

    hintgliter = game.scene.scenes[pageNo].add.sprite(-100, -100, 'hintgliter').setOrigin(0.5, 0.5)
    anim = game.scene.scenes[pageNo].anims.create({
        key: 'hintgliter',
        frames: game.scene.scenes[pageNo].anims.generateFrameNumbers('hintgliter', {
            start: 0,
            end: 66
        }),
        frameRate: 24,
    });
    hintgliter.setScale(0.7)
    hintgliter.setTint(0XFFFF00)
    hintgliter.setBlendMode(Phaser.BlendModes.ADD);


    hintbtn = game.scene.scenes[pageNo].add.image(521, 99, 'hintbtn').setOrigin(0.5, 0.5).setInteractive({
        useHandCursor: true
    })

    hintbtn.on('pointerover', hintbtnover)
    hintbtn.on('pointerout', hintbtnout)
    hintbtn.on('pointerdown', hintbtndown)
    //    hintbtn.on('pointerup', hintbtnup)

    function hintbtnover() {
        this.setScale(1.05)
    }

    function hintbtnout() {
        this.setScale(1)
    }

    function hintbtndown() {
        this.setScale(1)
        hintgliter.anims.load('hintgliter')
        hintgliter.anims.play('hintgliter')
        playsoundeffects('hint2')
        if (game['ahit' + 1].alpha != 1) {
            hintgliter.x = game['ahit' + 1].x
            hintgliter.y = game['ahit' + 1].y
        } else if (game['ahit' + 2].alpha != 1) {
            hintgliter.x = game['ahit' + 2].x
            hintgliter.y = game['ahit' + 2].y
        } else if (game['ahit' + 3].alpha != 1) {
            hintgliter.x = game['ahit' + 3].x
            hintgliter.y = game['ahit' + 3].y
        }
        game.scene.scenes[pageNo].tweens.add({
            targets: hintbtn,
            scale: 0.9,
            ease: 'Linear',
            duration: 100,
            yoyo: true,
            onComplete: hintbtndowntween,
            callbackScope: this
        });

    }

    function hintbtndowntween() {
        this.setScale(1.05)
    }

    homebtn = game.scene.scenes[pageNo].add.sprite(419.5, 32.5, 'home').setOrigin(0.5, 0.5).setInteractive({
        useHandCursor: true
    })
    replaybtn = game.scene.scenes[pageNo].add.sprite(470, 32.5, 'reload').setOrigin(0.5, 0.5).setInteractive({
        useHandCursor: true
    })

    homebtn.on('pointerover', replaybtnover)
    homebtn.on('pointerout', replaybtnout)
    homebtn.on('pointerdown', homebtndown)

    function homebtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 1
            playsoundeffects('setclick');
            clocktick.stop()
            game.scene.scenes[pageNo].tweens.add({
                targets: homebtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: homebtndowntween,
                callbackScope: this
            });
        }


    }

    function homebtndowntween() {
        transitionIn()
        saveFile()
        this.setScale(1.05)
    }


    replaybtn.on('pointerover', replaybtnover)
    replaybtn.on('pointerout', replaybtnout)
    replaybtn.on('pointerdown', replaybtndown)

    function replaybtnover() {
        this.setScale(1.05)
    }

    function replaybtnout() {
        this.setScale(1)
    }

    function replaybtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 0
            clocktick.stop()
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: replaybtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: replaybtndowntween,
                callbackScope: this
            });
        }
    }

    function replaybtndowntween() {
        this.setScale(1.05)
        game.scene.scenes[pageNo].scene.restart();

    }




}

function failedpanel() {
    playsoundeffects('levelfail')
    if (!isMuted) {
        clocktick.stop();
    }
    bg = game.scene.scenes[pageNo].add.sprite(0, 0, 'bg').setOrigin(0, 0).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    failedtext = game.scene.scenes[pageNo].add.sprite(279, 301.5, 'failedtext').setOrigin(0.5, 0.5)
    homebtn = game.scene.scenes[pageNo].add.sprite(221, 463, 'homebtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    replaybtn = game.scene.scenes[pageNo].add.sprite(340, 463, 'replaybtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })

    homebtn.on('pointerover', replaybtnover)
    homebtn.on('pointerout', replaybtnout)
    homebtn.on('pointerdown', homebtndown)

    function homebtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 1
            playsoundeffects('setclick');

            game.scene.scenes[pageNo].tweens.add({
                targets: homebtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: homebtndowntween,
                callbackScope: this
            });
        }

    }

    function homebtndowntween() {
//        showNextAd()
        this.setScale(1.05)
        transitionIn()
        saveFile()

    }


    replaybtn.on('pointerover', replaybtnover)
    replaybtn.on('pointerout', replaybtnout)
    replaybtn.on('pointerdown', replaybtndown)

    function replaybtnover() {
        this.setScale(1.05)
    }

    function replaybtnout() {
        this.setScale(1)
    }

    function replaybtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 0
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: replaybtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: replaybtndowntween,
                callbackScope: this
            });

        }
    }

    function replaybtndowntween() {
        this.setScale(1.05)
        game.scene.scenes[pageNo].scene.restart();

    }
}

function timeuppanel() {
    playsoundeffects('timesup')

    bg = game.scene.scenes[pageNo].add.sprite(0, 0, 'bg').setOrigin(0, 0).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    timetext = game.scene.scenes[pageNo].add.sprite(275, 304, 'timetext').setOrigin(0.5, 0.5)
    homebtn = game.scene.scenes[pageNo].add.sprite(221, 463, 'homebtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    replaybtn = game.scene.scenes[pageNo].add.sprite(340, 463, 'replaybtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })

    homebtn.on('pointerover', replaybtnover)
    homebtn.on('pointerout', replaybtnout)
    homebtn.on('pointerdown', homebtndown)

    function homebtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 1
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: homebtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: homebtndowntween,
                callbackScope: this
            });

        }
    }

    function homebtndowntween() {
//        showNextAd()
        this.setScale(1.05)
        transitionIn()
        saveFile()

    }



    replaybtn.on('pointerover', replaybtnover)
    replaybtn.on('pointerout', replaybtnout)
    replaybtn.on('pointerdown', replaybtndown)

    function replaybtnover() {
        this.setScale(1.05)
    }

    function replaybtnout() {
        this.setScale(1)
    }

    function replaybtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 0
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: replaybtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: replaybtndowntween,
                callbackScope: this
            });

        }
    }

    function replaybtndowntween() {
        this.setScale(1.05)
        game.scene.scenes[pageNo].scene.restart();

    }

}


function winpanel() {
    playsoundeffects('levelwin')
    if (!isMuted) {
        clocktick.stop();
    }
    bg = game.scene.scenes[pageNo].add.sprite(0, 0, 'bg').setOrigin(0, 0).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    wintext = game.scene.scenes[pageNo].add.sprite(280, 299.5, 'wintext').setOrigin(0.5, 0.5)
    homebtn = game.scene.scenes[pageNo].add.sprite(172, 462, 'homebtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    replaybtn = game.scene.scenes[pageNo].add.sprite(281, 462, 'replaybtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })
    nextbtn = game.scene.scenes[pageNo].add.sprite(389, 462, 'nextbtn').setOrigin(0.5, 0.5).setInteractive({
        pixelPerfect: true,
        useHandCursor: true
    })

    if (lcount == 40) {
        homebtn.x = 221
        homebtn.y = 463
        replaybtn.x = 340
        replaybtn.y = 463

        nextbtn.visible = false



    }

    homebtn.on('pointerover', replaybtnover)
    homebtn.on('pointerout', replaybtnout)
    homebtn.on('pointerdown', homebtndown)

    function homebtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 1
            if (level <= lcount) {
                level = lcount + 1
            }
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: homebtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: homebtndowntween,
                callbackScope: this
            });

        }
    }

    function homebtndowntween() {
        this.setScale(1.05)
        transitionIn()
        saveFile()

    }



    replaybtn.on('pointerover', replaybtnover)
    replaybtn.on('pointerout', replaybtnout)
    replaybtn.on('pointerdown', replaybtndown)

    function replaybtnover() {
        this.setScale(1.05)
    }

    function replaybtnout() {
        this.setScale(1)
    }

    function replaybtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 0

            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: replaybtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: replaybtndowntween,
                callbackScope: this
            });

        }
    }

    function replaybtndowntween() {
//        showNextAd()
        this.setScale(1.05)
        transitionIn()
        saveFile()

    }
    nextbtn.on('pointerover', replaybtnover)
    nextbtn.on('pointerout', replaybtnout)
    nextbtn.on('pointerdown', nextbtndown)



    function nextbtndown() {
        if (!startgame4) {
            startgame4 = true
            this.setScale(1)
            homeclick = 0
            lcount = lcount + 1
            if (level < lcount) {
                level = lcount
            }
            playsoundeffects('setclick');
            game.scene.scenes[pageNo].tweens.add({
                targets: nextbtn,
                scale: 0.9,
                ease: 'Linear',
                duration: 100,
                yoyo: true,
                onComplete: nextbtndowntween,
                callbackScope: this
            });

        }
    }

    function nextbtndowntween() {
//        showNextAd()
        this.setScale(1.05)
        transitionIn()
        saveFile()

    }
}
