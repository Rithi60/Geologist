class Hammer {
    constructor(x, y, width, height) {
        var options = {
            'density': 2,
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

        pos.x = mouseX;
        pos.y = mouseY;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0, 0, 60, 70);
        pop();

    }
} 