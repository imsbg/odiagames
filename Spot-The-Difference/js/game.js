var Phaser;
var level = 1;
var pageNo = 0;
var firstTime = true;
var bgmusic;
var isMuted = false;
var isMuted1 = false;
var i = 0;
var sno = 0;
var lcount = 1;
var level;
var loadFinish = false
var soundMuted = false
var gameName = 'spot-the-difference-the-garden';
var domainName = document.referrer;
if (domainName == "") {
    domainName = window.location.href;
}
var soundcheck = false
var soundstart = 0
var soundcheck1 = true

function pauseGame() {
    soundstart = 1
    game.scene.scenes[pageNo].scene.pause()
    if (soundcheck) {
        soundstart = 1
        if (!isMuted) {
            music.pause()
            clicksound.pause()
            soundmute.setFrame(1)
        }
    }
}

function resumeGame() {
    soundstart = 0
    game.scene.scenes[pageNo].scene.resume()
    if (soundcheck) {
        soundstart = 0
        if (!isMuted) {
            music.resume()
            clicksound.resume()
            soundmute.setFrame(0)
        } else {
            music.pause()
            clicksound.pause()
            soundmute.setFrame(1)
        }
    }
}
WebFontConfig = {
    google: {
        families: ["Nunito:ExtraBold"]
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
var bootstate = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function bootstate() {
        Phaser.Scene.call(this, {
            key: 'bootstate'
        });
    },
    preload: function () {
        pageNo = 0
        this.cameras.main.setBackgroundColor('#FFFFFF')
        this.load.image('bgloader', 'assets/loader/loaderbackground.png');
    },
    create: function () {
        loadFile()
        loade = this.add.image(0, 0, 'bgloader').setOrigin(0, 0)
        loade.alpha = 0
        game.scene.scenes[pageNo].tweens.add({
            targets: loade,
            alpha: 1,
            ease: 'Linear',
            duration: 300,
        });
        this.load.on('complete', function () {
            this.scene.scene.stop('bootstate')
            game.scene.start('initialloader');
        });
        this.load.image('lpbar', 'assets/loader/loaderprogress.png');
        this.load.image('bgloader', 'assets/loader/loaderbackground.png');
        this.load.image('loaderbarbg', 'assets/loader/loaderbarbg.png');
        this.load.image('loaderpad', 'assets/loader/loaderpad.png');
        this.load.image('loaderplay', 'assets/loader/play.png');
        this.load.image('loadermask', 'assets/loader/loadermask.png');
        this.load.image('loadlogo', 'assets/loader/loadlogo.png');
        this.load.spritesheet('loadtext', 'assets/loader/loadtext.png', {
            frameWidth: 135,
            frameHeight: 34
        });
        this.load.start();
    }
});
var baseScale = 1;
var speed = 0.01;
var magnitude = 0.05;
var barvalue = [0]

function saveFile() {
    var file = {
        level: level

    };
    localStorage.setItem('spot-the-difference-the-garden', JSON.stringify(file));
};
var file;
var level;

function loadFile() {
    file = JSON.parse(localStorage.getItem('spot-the-difference-the-garden'));
    if (file == null) {
        level = 1;
    } else {
        level = parseInt(file.level);

    }
};
var initialloader = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function initialloader() {
        Phaser.Scene.call(this, {
            key: 'initialloader'
        });
    },
    preload: function () {
        pageNo = 1
    },
    create: function () {
        this.cameras.main.setBackgroundColor('#FFFFFF')
        loade = this.add.image(0, 0, 'bgloader').setOrigin(0, 0)
        loaderbarbg = this.add.image(281, 488.5, 'loaderbarbg').setOrigin(0.5, 0.5)
        Logo_animation = this.add.image(280.5, 357.5, 'loadlogo');
        lpbar1 = this.add.sprite(-55, 488.5, 'lpbar').setOrigin(0.5, 0.5)
        loadermask = this.add.sprite(281.5, 488.5, 'loadermask').setOrigin(0.5, 0.5).setVisible(false);
        mask = loadermask.createBitmapMask();
        mask.alpha = 1
        lpbar1.setMask(mask);
        loadtext = this.add.sprite(281.5, 562, 'loadtext').setOrigin(0.5, 0.5)
        anim = this.anims.create({
            key: 'loadtext',
            frames: this.anims.generateFrameNumbers('loadtext', {
                start: 0,
                end: 3
            }),
            frameRate: 6,
            repeat: -1
        });
        loadtext.anims.load('loadtext')
        this.load.on('progress', function (value) {
            lpbar1.x = -100 + parseInt(parseFloat(value / 1) * 380);
        });
        loaderpad = this.add.image(281, 507, 'loaderpad').setOrigin(0.5, 0.5)
        loaderplay = this.add.image(280, 509, 'loaderplay').setOrigin(0.5, 0.5).setInteractive({
            useHandCursor: true,
            pixelPerfect: true
        })
        loaderpad.visible = false
        loaderplay.visible = false
        this.load.on('complete', function () {
            loaderbarbg.visible = false
            lpbar1.visible = false
            loadtext.visible = false
            if (pageNo == 1) {
                loaderpad.visible = true
                loaderplay.visible = true
                loaderplay.on('pointerover', function () {
                    loaderplay.setScale(1.05)
                }, this);
                loaderplay.on('pointerout', function () {
                    loaderplay.setScale(1)
                }, this);
                loaderplay.once('pointerdown', function () {
                    this.scene.scene.stop('initialloader')
                    game.scene.start('titlescreen')
                }, this);
            } else {
                loadFinish = true;
            }
        });
        //audio
        this.load.audio('boden', ['assets/audio/bmusic.mp3', 'assets/audio/bmusic.ogg']);
        this.load.audio('itemclick', ['assets/audio/itemclick.mp3', 'assets/audio/itemclick.ogg']);
        this.load.audio('clickss', ['assets/audio/click.mp3', 'assets/audio/click.ogg']);
        this.load.audio('complete', ['assets/audio/complete.mp3', 'assets/audio/complete.ogg']);
        this.load.audio('setclick', ['assets/audio/setclick.mp3', 'assets/audio/setclick.ogg']);
        this.load.audio('winclick', ['assets/audio/winclick.mp3', 'assets/audio/winclick.ogg']);
        this.load.audio('wrongclick', ['assets/audio/wrongclick.mp3', 'assets/audio/wrongclick.ogg']);
        this.load.audio('levelwin', ['assets/audio/levelwin.mp3', 'assets/audio/levelwin.ogg']);
        this.load.audio('levelfail', ['assets/audio/levelfail.mp3', 'assets/audio/levelfail.ogg']);
        this.load.audio('timesup', ['assets/audio/timesup.mp3', 'assets/audio/timesup.ogg']);
        this.load.audio('hint1', ['assets/audio/hint1.mp3', 'assets/audio/hint1.ogg']);
        this.load.audio('hint2', ['assets/audio/hint2.mp3', 'assets/audio/hint2.ogg']);
        this.load.audio('hint3', ['assets/audio/hint3.mp3', 'assets/audio/hint3.ogg']);
        this.load.audio('clocktick', ['assets/audio/clocktick.mp3', 'assets/audio/clocktick.ogg']);
        //button
        this.load.image('play', 'assets/buttons/play.png');

        this.load.image('settings', 'assets/buttons/settings.png');
        //settings

        this.load.spritesheet('soundmute', 'assets/buttons/soundmute.png', {
            frameWidth: 58,
            frameHeight: 45
        });

        //titlescreen
        this.load.image('titlebackground', 'assets/titlescreen/background.jpg')
        this.load.image('titlebg', 'assets/titlescreen/titlebg.png')
        this.load.image('title1', 'assets/titlescreen/title1.png')
        this.load.image('title2', 'assets/titlescreen/title2.png')
        this.load.image('title3', 'assets/titlescreen/title3.png')
        this.load.image('title4', 'assets/titlescreen/title4.png')
        this.load.image('title5', 'assets/titlescreen/title5.png')
        this.load.image('obj1', 'assets/titlescreen/obj1.png')

        //levelselect
        this.load.image('levelselectbackground', 'assets/levelselect/background.jpg')
        this.load.image('levelselecttext', 'assets/levelselect/levelselecttext.png')
        this.load.image('larrow', 'assets/levelselect/larrow.png')
        this.load.image('rarrow', 'assets/levelselect/rarrow.png')


        for (i = 1; i <= 20; i++) {
            this.load.spritesheet('level' + i, 'assets/levelselect/level' + i + '.png', {
                frameWidth: 139,
                frameHeight: 132
            });
        }
        for (i = 21; i <= 40; i++) {
            this.load.spritesheet('level' + i, 'assets/levelselect/level' + i + '.png', {
                frameWidth: 137,
                frameHeight: 131
            });
        }
        this.load.spritesheet('stargilter', 'assets/levelselect/stargilter.png', {
            frameWidth: 247,
            frameHeight: 251
        });


        this.load.spritesheet('dots', 'assets/levelselect/dots.png', {
            frameWidth: 76,
            frameHeight: 32
        });









        //level1

        this.load.spritesheet('lifebtn', 'assets/level1/lifebtn.png', {
            frameWidth: 37,
            frameHeight: 37
        });

        this.load.spritesheet('okbtn', 'assets/level1/okbtn.png', {
            frameWidth: 35,
            frameHeight: 35
        });



        this.load.image('bg', 'assets/level1/bg.png')
        this.load.image('failedtext', 'assets/level1/failedtext.png')
        this.load.image('wintext', 'assets/level1/wintext.png')
        this.load.image('timetext', 'assets/level1/timetext.png')
        this.load.image('nextbtn', 'assets/level1/nextbtn.png')
        this.load.image('hintbtn', 'assets/level1/hintbtn.png')

        this.load.image('homebtn', 'assets/level1/homebtn.png')
        this.load.image('replaybtn', 'assets/level1/replaybtn.png')
        this.load.image('home', 'assets/level1/home.png');
        this.load.image('reload', 'assets/level1/reload.png');


        this.load.image('levelloader', 'assets/level1/levelloader.png')
        this.load.spritesheet('levelfill', 'assets/level1/levelfill.png', {
            frameWidth: 349,
            frameHeight: 27
        });
        this.load.image('levelmask', 'assets/level1/levelmask.png')
        this.load.spritesheet('hintgliter', 'assets/level1/hintgliter.png', {
            frameWidth: 234,
            frameHeight: 234
        });









        this.load.image('level1background', 'assets/level1/background.png')

        this.load.image('ahit1', 'assets/level1/hit.png')
        this.load.image('ahit2', 'assets/level1/hit.png')
        this.load.image('ahit3', 'assets/level1/hit.png')

        this.load.image('bhit1', 'assets/level1/hit.png')
        this.load.image('bhit2', 'assets/level1/hit.png')
        this.load.image('bhit3', 'assets/level1/hit.png')

        this.load.image('aempty1', 'assets/level1/empty.png')
        this.load.image('aempty2', 'assets/level1/empty.png')
        this.load.image('aempty3', 'assets/level1/empty.png')

        this.load.image('bempty1', 'assets/level1/empty.png')
        this.load.image('bempty2', 'assets/level1/empty.png')
        this.load.image('bempty3', 'assets/level1/empty.png')

        for (i = 1; i <= 40; i++) {
            this.load.image('apicture' + i, 'assets/level1/apicture' + i + '.png');
            this.load.image('bpicture' + i, 'assets/level1/bpicture' + i + '.png');
        }

        for (i = 1; i <= 13; i++) {
            this.load.image('pattern' + i, 'assets/level1/pattern' + i + '.png');
        }




        this.load.start();
    },
    update: function () {
        loaderplay.setScale(
            baseScale + magnitude * Math.sin(this.time.now * speed),
            baseScale + magnitude * Math.cos(this.time.now * speed)
        );
    }
});









var config = {
    type: Phaser.AUTO,
    width: 560,
    height: 854,
    backgroundColor: '#000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 560,
        height: 854,
    },
    parent: 'theGame',
    scene: [bootstate, initialloader, titlescreen, levelselect, level1],
}
var game = new Phaser.Game(config)
//, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, level13, level14, level15, level16, level17, level18, level19, level20, level21, level22, level23, level24, level25, level26, level27, level28, level29, level30, level31, level32, level33, level34, level35, level36, level37, level38, level39, level40
