class Circle {
    color : string;
    radius : number
    constructor(color : string, radius : number) {
        this.color = color;
        this.radius = radius;
    }
}
let circleList : Circle[] = [];
circleList.push(new Circle('black',8));
circleList.push(new Circle('white',10));
function showCircle(circle : Circle){
    console.log(`hinh tron mau ${circle.color} va ban kinh la ${circle.radius}`)
}
circleList.forEach(showCircle)