

class Tableau1 extends Phaser.Scene {

    preload(){
        this.load.image('pad','assets/carre.png')
        this.load.image('ball','assets/cercle.png')
        this.load.image('bricks','assets/bricks.png')

    }
    create(){
        this.detect=0
        this.ballT=new Ball(this);
        this.player=new Joueur(this,'score');
        this.wall=new Walls(this);
        this.keyboard=new Keyboard(this);
        this.brick=new Bricks(this);
    }

    update(){

        this.player.bord();
        if(this.ballT.ballC.y>gameConfig.height){
            console.log('oui')
        this.ballT.Reset();
        this.player.Reset();
        this.player.vie-=1
        }
        if(this.player.vie==0){
                alert("Perdue Looser !")
            this.totalReset()
        }
        if(this.player.score==54){
            alert('Gagné Sacrebleu!')
            this.totalReset()
        }
        if(this.ballT.state==0){
            this.ballT.ballC.x=this.player.player.x+110
        }
    }
    win(){
        this.player.score+=1;
    }
    totalReset(){
        this.player.vie=3
        this.player.score=0
        this.ballT.Reset();
        this.player.Reset();
        document.location.reload(true)

    }
}
