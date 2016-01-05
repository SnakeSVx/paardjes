///<reference path="phaser.comments.d.ts" />
/*
    Posities: (x, y, width, height)
        Rood:
            Start zone: 0, 0, 360, 360
            Cirkel 1: 10, 430, 50, 50
            Cirkel 2: 10, 370, 50, 50
            Cirkel 3: 70, 370, 50, 50
            Cirkel 4: 130, 370, 50, 50
            Cirkel 5: 190, 370, 50, 50
            Cirkel 6: 250, 370, 50, 50
            Cirkel 7: 310, 370, 50, 50
            Cirkel 8: 370, 370, 50, 50
            Cirkel 9: 370, 310, 50, 50
            Cirkel 10: 370, 250, 50, 50
            Cirkel 11: 370, 190, 50, 50
            Cirkel 12: 370, 130, 50, 50
            Cirkel 13: 370, 70, 50, 50
            Cirkel 14: 370, 10, 50, 50
            Stop 1: 70, 430, 50, 50
            Stop 2: 130, 430, 50, 50
            Stop 3: 190, 430, 50, 50
            Stop 4: 250, 430, 50, 50
            Stop 5: 310, 430, 50, 50
            Stop 6: 370, 430, 50, 50
            
            



*/
var SpotCircle = (function () {
    function SpotCircle(graphics, xPos, yPos) {
        this.circle = new Phaser.Circle(xPos, yPos, 50);
        //graphics.drawCircle(this.circle.x, this.circle.y, this.circle.diameter);
    }
    SpotCircle.prototype.update = function () {
    };
    return SpotCircle;
})();
var StartArea = (function () {
    function StartArea(graphics, player, xPos, yPos) {
        this.player = player;
        this.rectangle = new Phaser.Rectangle(xPos, yPos, 100, 100);
        graphics.drawRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
    }
    return StartArea;
})();
var Player = (function () {
    function Player() {
    }
    return Player;
})();
var Horse = (function () {
    function Horse() {
    }
    return Horse;
})();
var Terain = (function () {
    function Terain(graphics) {
        //14 * 4 circles
        var i = 0;
        this.circles = [];
        //RED
        this.circles[i++] = new SpotCircle(graphics, 10, 430); //RED 1: end
        this.circles[i++] = new SpotCircle(graphics, 10, 370); //RED 2: start
        this.circles[i++] = new SpotCircle(graphics, 70, 370); //RED 3
        this.circles[i++] = new SpotCircle(graphics, 130, 370); //RED 4
        this.circles[i++] = new SpotCircle(graphics, 190, 370); //RED 5
        this.circles[i++] = new SpotCircle(graphics, 250, 370); //RED 6
        this.circles[i++] = new SpotCircle(graphics, 310, 370); //RED 7
        this.circles[i++] = new SpotCircle(graphics, 370, 370); //RED 8
        this.circles[i++] = new SpotCircle(graphics, 370, 310); //RED 9
        this.circles[i++] = new SpotCircle(graphics, 370, 250); //RED 10
        this.circles[i++] = new SpotCircle(graphics, 370, 190); //RED 11
        this.circles[i++] = new SpotCircle(graphics, 370, 130); //RED 12
        this.circles[i++] = new SpotCircle(graphics, 370, 70); //RED 13
        this.circles[i++] = new SpotCircle(graphics, 370, 10); //RED 14
        //GREEN
        this.circles[i++] = new SpotCircle(graphics, 430, 10); //GREEN 1: end
        this.circles[i++] = new SpotCircle(graphics, 490, 10); //GREEN 2: start
        this.circles[i++] = new SpotCircle(graphics, 490, 70); //GREEN 3
        this.circles[i++] = new SpotCircle(graphics, 490, 130); //GREEN 4
        this.circles[i++] = new SpotCircle(graphics, 490, 190); //GREEN 5
        this.circles[i++] = new SpotCircle(graphics, 490, 250); //GREEN 6
        this.circles[i++] = new SpotCircle(graphics, 490, 310); //GREEN 7
        this.circles[i++] = new SpotCircle(graphics, 490, 370); //GREEN 8
        this.circles[i++] = new SpotCircle(graphics, 550, 370); //GREENRed 9
        this.circles[i++] = new SpotCircle(graphics, 610, 370); //GREEN 10
        this.circles[i++] = new SpotCircle(graphics, 670, 370); //GREEN 11
        this.circles[i++] = new SpotCircle(graphics, 730, 370); //GREEN 12
        this.circles[i++] = new SpotCircle(graphics, 785, 370); //GREEN 13
        this.circles[i++] = new SpotCircle(graphics, 845, 370); //GREEN 2
        //YELLOW
        this.circles[i++] = new SpotCircle(graphics, 845, 430); //YELLOW 1: end
        this.circles[i++] = new SpotCircle(graphics, 845, 490); //YELLOW 2: start
        this.circles[i++] = new SpotCircle(graphics, 785, 490); //YELLOW 3
        this.circles[i++] = new SpotCircle(graphics, 730, 490); //YELLOW 4
        this.circles[i++] = new SpotCircle(graphics, 670, 490); //YELLOW 5
        this.circles[i++] = new SpotCircle(graphics, 610, 490); //YELLOW 6
        this.circles[i++] = new SpotCircle(graphics, 550, 490); //YELLOW 7
        this.circles[i++] = new SpotCircle(graphics, 490, 490); //YELLOW 8
        this.circles[i++] = new SpotCircle(graphics, 490, 550); //YELLOW 9
        this.circles[i++] = new SpotCircle(graphics, 490, 610); //YELLOW 10
        this.circles[i++] = new SpotCircle(graphics, 490, 670); //YELLOW 11
        this.circles[i++] = new SpotCircle(graphics, 490, 730); //YELLOW 12
        this.circles[i++] = new SpotCircle(graphics, 490, 790); //YELLOW 13
        this.circles[i++] = new SpotCircle(graphics, 490, 850); //YELLOW 14
        //BLUE
        this.circles[i++] = new SpotCircle(graphics, 430, 850); //BLUE 1: end
        this.circles[i++] = new SpotCircle(graphics, 370, 850); //BLUE 2: start
        this.circles[i++] = new SpotCircle(graphics, 370, 790); //BLUE 3
        this.circles[i++] = new SpotCircle(graphics, 370, 730); //BLUE 4
        this.circles[i++] = new SpotCircle(graphics, 370, 670); //BLUE 5
        this.circles[i++] = new SpotCircle(graphics, 370, 610); //BLUE 6
        this.circles[i++] = new SpotCircle(graphics, 370, 550); //BLUE 7
        this.circles[i++] = new SpotCircle(graphics, 370, 490); //BLUE 8
        this.circles[i++] = new SpotCircle(graphics, 310, 490); //BLUE 9
        this.circles[i++] = new SpotCircle(graphics, 250, 490); //BLUE 10
        this.circles[i++] = new SpotCircle(graphics, 190, 490); //BLUE 11
        this.circles[i++] = new SpotCircle(graphics, 130, 490); //BLUE 12
        this.circles[i++] = new SpotCircle(graphics, 70, 490); //BLUE 13
        this.circles[i++] = new SpotCircle(graphics, 10, 490); //BLUE 14
    }
    Terain.prototype.update = function () {
    };
    return Terain;
})();
var PhaserDemo = (function () {
    function PhaserDemo() {
        //DEBUG line
        this.formerMouse = -1; // Phaser.Mouse.NO_BUTTON
        this.game = new Phaser.Game(910, 910, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    PhaserDemo.prototype.preload = function () {
        this.game.load.image('board', 'board.png');
        this.game.load.spritesheet('item', 'circle_transparent.png', 50, 50);
    };
    PhaserDemo.prototype.create = function () {
        //this.game.add.tileSprite(0, 0, 910, 910, 'background');
        var _this = this;
        this.game.add.sprite(0, 0, 'board');
        this.item = this.game.add.sprite(10, 430, 'item', 1);
        this.item.inputEnabled = true;
        // Make this item draggable.
        this.item.input.enableDrag();
        // Then we make it snap to left and right side,
        // also we make it only snap when released.
        //item.input.enableSnap(50, 50, false, true);
        // Limit drop location to only the 2 columns.
        this.item.events.onDragStop.add(function (item, pointer) {
            var toMoveTo = null;
            for (var i = 0; i < _this.terrain.circles.length; i++) {
                var spot = _this.terrain.circles[i];
                if (Phaser.Math.distance(item.x, item.y, spot.circle.x, spot.circle.y) < 50) {
                    item.x = spot.circle.x;
                    item.y = spot.circle.y;
                    console.log("Moved to spot");
                    console.log(spot);
                    break;
                }
            }
        }, this.item);
        //  And display our circle on the top
        this.graphics = this.game.add.graphics(0, 0);
        this.graphics.lineStyle(1, 0x00ff00, 1);
        this.terrain = new Terain(this.graphics);
    };
    //next: number = 0;
    //counter: number = 0;
    PhaserDemo.prototype.update = function () {
        /*this.counter = this.counter || 0;
        this.next = this.next || 0;
        this.counter = this.counter + 1;
        if (this.counter === 40) {
            this.counter = 0;
            this.next = this.next + 1;
            if (this.next === this.terrain.circles.length ) {
                this.next = 0;
            }
            var spot: SpotCircle = this.terrain.circles[this.next];
            this.item.x = spot.circle.x;
            this.item.y = spot.circle.y;
        }*/
        console.log('update();');
        /*console.log(this.game.input.activePointer.isDown);
        if (this.game.input.activePointer.isDown) {
            console.log("clicking");
            console.log(this.game.input.mousePointer.x);
            console.log(this.game.input.mousePointer.y);
        }*/
    };
    return PhaserDemo;
})();
window.onload = function () {
    var game = new PhaserDemo();
};
//# sourceMappingURL=app.js.map