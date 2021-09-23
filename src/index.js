import * as PIXI from 'pixi.js';
import { globalConfigs } from './configs/global';
import { addSpriteToStage, addSpriteToStageCenter } from './sprites/spirtesLoader';

const { width, height, background } = globalConfigs;

const app = new PIXI.Application(width, height, { backgroundColor: background });

const unicornAsset = 'assets/unicorn.png';
const sprite1 = addSpriteToStage(app.stage, unicornAsset, 200, height / 2);
const sprite2 = addSpriteToStageCenter(app.stage, unicornAsset);
const sprite3 = addSpriteToStage(app.stage, unicornAsset, width - 200, height / 2);

document.getElementById('canvas-wrapper').appendChild(app.view);

let elapsed = 0;
app.ticker.add((delta) => {
    sprite1.rotation -= 0.03;
    sprite3.rotation += 0.03;
    elapsed += delta;
    sprite2.y = (height / 2) + Math.sin(elapsed / 25.0) * 100.0;
})
