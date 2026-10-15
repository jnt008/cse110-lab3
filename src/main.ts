
import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create a group for the lemon
const lemon = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
  draggable: true
});

// main oval body
const body = new Konva.Ellipse({
  x: 0,
  y: 0,
  radiusX: 120,
  radiusY: 60,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

// left bump
const leftBump = new Konva.Circle({
  x: -117,
  y: 0,
  radius: 12,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

// left bump no line
const leftLine = new Konva.Circle({
  x: -113,
  y: 0,
  radius: 13,
  fill: 'yellow',
});

// right bump
const rightBump = new Konva.Circle({
  x: 117,
  y: 0,
  radius: 12,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

// right bump no line
const rightLine = new Konva.Circle({
  x: 113,
  y: 0,
  radius: 13,
  fill: 'yellow',
});

//left eye
const leftEye = new Konva.Circle({
  x: -20,
  y: -20,
  radius: 2,
  fill: 'black',
});

//right eye
const rightEye = new Konva.Circle({
  x: 20,
  y: -20,
  radius: 2,
  fill: 'black',
});

// create smile
const smile = new Konva.Arc({
  x: 0,
  y: 0,
  innerRadius: 15,
  outerRadius: 17,
  angle: 180,
  rotation: 0,
  fill: 'black'
});

// add shapes to the group
lemon.add(body);
lemon.add(leftBump);
lemon.add(rightBump);
lemon.add(rightLine);
lemon.add(leftLine);
lemon.add(leftEye);
lemon.add(rightEye);
lemon.add(smile);

// change cursor to pointer when hovering over lemon
lemon.on('mouseenter', () => {
  stage.container().style.cursor = 'pointer';
});

// change cursor back to default when leaving lemon
lemon.on('mouseleave', () => {
  stage.container().style.cursor = 'default';
});

// start shaking when mouse is pressed
lemon.on('mousedown', () => {
  lemon.to({
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 0.1
  });

  wiggle.start();
});

// stop shaking when mouse is released
lemon.on('mouseup dragend', () => {
  wiggle.stop();

  lemon.to({
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    duration: 0.1
  });
});

// create wiggle animation
const wiggle = new Konva.Animation((frame) => {
  if (!frame) return;

  // rotate lemon back and forth
  lemon.rotation(Math.sin(frame.time / 50) * 5);
}, layer);

// add lemon to layer
layer.add(lemon);