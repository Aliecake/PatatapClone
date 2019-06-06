var text = new PointText({
    point: view.center,
    content: 'Click here and then press some keys.',
    justification: 'center',
    fontSize: 20,
    fillColor: 'grey'
});

function randomColor() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var pickedColor = colors[Math.floor(Math.random() * (colors.length) + 0)];
    return pickedColor;
}
var circles = [];
//key down create new random circle
function onKeyDown(event){
    var radius = Math.random() * 300 + 40;
    var maxPoint = new Point(view.bounds.width, view.bounds.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var color;
    var newCircle = new Path.Circle((point), radius);
    var tapSound = keysData[event.key].sound;
    tapSound.play();

    //if color data does not exist, create key data
    if (!keysData[event.key].color) {
        color = newCircle.fillColor = randomColor();
        keysData[event.key].color = color;
        circles.push(newCircle)
    } else {
        newCircle.fillColor = keysData[event.key].color;
        circles.push(newCircle);
    }
}
//hue change and reduction of size
function onFrame(event) {
    for (var ii = 0; ii < circles.length; ii++){
        circles[ii].fillColor.hue += 1;
        circles[ii].scale(.92);
    }
}
//delete circles from array & canvas
function deleteCircle() {
    for (var jj = 0; jj < circles.length; jj++){
        circles.shift(circles[jj])
        circle[jj].remove();
    }
}
deleteCircle();