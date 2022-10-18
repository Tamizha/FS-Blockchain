class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }

    getVolume(){
        return Math.PI*this.radius*this.radius*this.height;
    }
  }

  class Sphere {
    constructor(radius) {
      this.radius = radius;
    }

    getVolume(){
        return (4*Math.PI*this.radius*this.radius*this.radius)/3;
    }
  }

  class Cone {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }

    getVolume(){
        return (Math.PI*this.radius*this.radius*this.height)/3;
    }
  }

  let cylinderObj= new Cylinder(14,20);
  console.log(cylinderObj.getVolume().toFixed(4));

  let sphereObj= new Sphere(3);
  console.log(sphereObj.getVolume().toFixed(4));

  let coneObj= new Cone(4,9);
  console.log(coneObj.getVolume().toFixed(4));