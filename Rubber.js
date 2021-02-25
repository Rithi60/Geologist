class Rubber {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.3,
            'friction': 5,
            'density': 1
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = 50;
        this.width = 50;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0, 0, 60, 70);
        pop();

    }
} 