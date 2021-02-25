class Stone {
    constructor(x, y, width, height) {
        var options = {
            'density': 8,
            'friction': 1,
            'restitution': 0.5
        }



        this.body = Bodies.rectangle(x, y, 50, 50, options);
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
        fill("black");
        rectMode(CENTER);
        rect(0, 0, 60, 70);
        pop();

    }
} 