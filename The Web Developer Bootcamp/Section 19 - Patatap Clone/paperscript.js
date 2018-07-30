/*
var myCircle = new Path.Circle(new Point(0, 0), 10);

myCircle.fillColor = 'red';


for (var x = 0; x < 1000; x += 100) {
    for(var y = 0; y < 1000; y += 100) {
        new Path.Circle(new Point(x, y), 10).fillColor = '#67ffff';
    }
}
*/
var circles = [];

var keyData = {
    a: {
        color: "red",
        sound: new Howl({
            src: ['lib/sounds/bubbles.mp3']
        })
    },
    s: {
        color: "orange",
        sound: new Howl({
            src: ['lib/sounds/clay.mp3']
        })
    },
    d: {
        color: "yellow",
        sound: new Howl({
            src: ['lib/sounds/confetti.mp3']
        })
    },
    f: {
        color: "green",
        sound: new Howl({
            src: ['lib/sounds/corona.mp3']
        })
    },
    g: {
        color: "blue",
        sound: new Howl({
            src: ['lib/sounds/dotted-spiral.mp3']
        })
    },
    h: {
        color: "indigo",
        sound: new Howl({
            src: ['lib/sounds/flash-1.mp3']
        })
    },
    j: {
        color: "violet",
        sound: new Howl({
            src: ['lib/sounds/flash-2.mp3']
        })
    },
    k: {
        color: "#980698",
        sound: new Howl({
            src: ['lib/sounds/flash-3.mp3']
        })
    },
    l: {
        color: "#440896",
        sound: new Howl({
            src: ['lib/sounds/glimmer.mp3']
        })
    },
    q: {
        color: "#ffffff",
        sound: new Howl({
            src: ['lib/sounds/moon.mp3']
        })
    },
    w: {
        color: "#b16161",
        sound: new Howl({
            src: ['lib/sounds/pinwheel.mp3']
        })
    },
    e: {
        color: "#42a391",
        sound: new Howl({
            src: ['lib/sounds/piston-1.mp3']
        })
    },
    r: {
        color: "#31ff79",
        sound: new Howl({
            src: ['lib/sounds/piston-2.mp3']
        })
    },
    t: {
        color: "#98f476",
        sound: new Howl({
            src: ['lib/sounds/piston-3.mp3']
        })
    },
    y: {
        color: "#d73jf8",
        sound: new Howl({
            src: ['lib/sounds/prism-1.mp3']
        })
    },
    u: {
        color: "#dj3kf9",
        sound: new Howl({
            src: ['lib/sounds/prism-2.mp3']
        })
    },
    i: {
        color: "#893if9",
        sound: new Howl({
            src: ['lib/sounds/prism-3.mp3']
        })
    },
    o: {
        color: "#2kf92j",
        sound: new Howl({
            src: ['lib/sounds/splits.mp3']
        })
    },
    p: {
        color: "#aa9062",
        sound: new Howl({
            src: ['lib/sounds/squiggle.mp3']
        })
    },
    z: {
        color: "#d92l8d",
        sound: new Howl({
            src: ['lib/sounds/strike.mp3']
        })
    },
    x: {
        color: "#00dd99",
        sound: new Howl({
            src: ['lib/sounds/suspension.mp3']
        })
    },
    c: {
        color: "#432a60",
        sound: new Howl({
            src: ['lib/sounds/timer.mp3']
        })
    },
    v: {
        color: "#c73030",
        sound: new Howl({
            src: ['lib/sounds/ufo.mp3']
        })
    },
    b: {
        color: "#d01947",
        sound: new Howl({
            src: ['lib/sounds/veil.mp3']
        })
    },
    n: {
        color: "#fcea1a",
        sound: new Howl({
            src: ['lib/sounds/wipe.mp3']
        })
    },
    m: {
        color: "#4baf43",
        sound: new Howl({
            src: ['lib/sounds/zig-zag.mp3']
        })
    }
}



function onKeyDown(event) {
    if(keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);

        
    } 
}     



function onFrame(event) {
    for (var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue +=  1;
        circles[i].scale(0.93); 
        if(circles[i].area < 1){
            circles[i].remove();
            circles.splice(i, 1);
            i--;
        }
        console.log(circles);
    }
}

