class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.health =0;
        this.height = 0;
        this.fall = 0;
        this.image1 = 1;
        this.image2 = 1;
        this.bugX = 200;
        this.bugY = 200;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }
    getBugX() {
        var detector = database.ref("bugX");
        detector.on("value", (data) => {
           // Not updating in database,check first line
           bugXref = data.val();
        })
          bug.x = bugXref; 
        }
        updateBugX(bugXref) {
            database.ref('/').update({
                bugX: bugXref
             });
        }
        getBugY() {
            var detector = database.ref("bugY");
            detector.on("value", (data) => {
               // Not updating in database,check first line
               bugYref = data.val();
            })
              bug.y = bugYref; 
            }
            updateBugY(bugYref) {
                database.ref('/').update({
                    bugY: bugYref
                 });
            }

   
          

    getImage1() {
        var detector = database.ref("image1");
        detector.on("value", (data) => {
           // Not updating in database,check first line
           image1ref = data.val();
        })
           
        }
        updateImage1(image1ref) {
            database.ref('/').update({
                image1: image1ref
             });
        }

        getImage2() {
                        var detector2 = database.ref("image2");
            detector2.on("value", (data) => {
               image2ref = data.val();
            })
               
            }
            updateImage2(image2ref) {
                database.ref('/').update({
                    image2: image2ref
                 });
            }
    

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            health:this.health,
            height:this.height,
        });
        
               // main.x = this.distance;
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
