let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#000000',
    audio: {
        disableWebAudio: true
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
