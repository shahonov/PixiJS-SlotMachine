import * as PIXI from 'pixi.js';

const width = window.innerWidth / 1.5;
const height = window.innerHeight / 1.5;

const app = new PIXI.Application(width, height, { backgroundColor: 0x000000 });

document.getElementById('canvas-wrapper').appendChild(app.view);
