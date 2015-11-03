var pixelRatio = window.devicePixelRatio;
var wWidth;
var wHeight;
var wArea;

var nodes = new Array(Math.sqrt(wArea) / 10 | 0);

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var $container = document.getElementById('container');

if (pixelRatio !== 1) {
  // if retina screen, scale canvas
  canvas.style.transform = 'scale(' + 1 / pixelRatio + ')';
  canvas.style.transformOrigin = '0 0';
}
canvas.id = 'nodegarden';

$container.appendChild(canvas);

init();
render();

window.addEventListener('resize', init);

function init(){
    wWidth = window.innerWidth * pixelRatio;
    wHeight = window.innerHeight * pixelRatio;
    wArea = wWidth * wHeight;

    // calculate nodes needed
    nodes.length = Math.sqrt(wArea) / 5 | 0;

    // set canvas size
    canvas.width = wWidth;
    canvas.height = wHeight;
    // create nodes
    var i, len;
    for (i = 0, len = nodes.length; i < len; i++) {
        if (nodes[i])
            continue;
        nodes[i] = {
            x: Math.random() * wWidth,
            y: Math.random() * wHeight,
            //vx: Math.random() * 1 - 0.5,
            //vy: Math.random() * 1 - 0.5,
            m: Math.random() * 1.5 + 1,
            link: null,
            pos: false
        }
    }
}
function render(){
    //ctx.clearRect(0, 0, wWidth, wHeight);
    //requestAnimationFrame(render);
    
    var distance;
    var direction;
    var force;
    var xForce, yForce;
    var xDistance, yDistance;
    var i, j, nodeA, nodeB, len;

    // request new animationFrame
    //requestAnimationFrame(render);
    for (i = 0, len = nodes.length - 1; i < len; i++) {
        for (j = i + 1; j < len + 1; j++){
            nodeA = nodes[i];
            nodeB = nodes[j];
            xDistance = nodeB.x - nodeA.x;
            yDistance = nodeB.y - nodeA.y;

            distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
            
            force = (10 * nodeA.m * nodeB.m) / Math.pow(distance, 2);

            if (force > 0.025) {
                // cap force to a maximum value of 0.025
                force = 0.025;
            }

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(225,225,225,' + force * 40 + ')';
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
            xForce = force * direction.x;
            yForce = force * direction.y;
        }
    }
    for (i = 0, len = nodes.length; i < len; i++) {
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].m, 0, 2 * Math.PI);
        ctx.fillStyle="#EFEFEF";
        ctx.fill();
    }
}