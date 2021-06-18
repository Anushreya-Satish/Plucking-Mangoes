class launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stifness: 0.004,
      length: 35
    };

    this.pointB = pointB;
    this.launcherObject = Constraint.create(options);
    World.add(world, this.launcherObject);
  }
  attach(body){
    this.launcherObject.bodyA = body;
}
  fly() {
    this.launcherObject.bodyA = null;
  }

  display() {
    if (this.body) {
      var pointA = this.launcherObject.bodyA.position;
      var pointB = this.pointB;
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
