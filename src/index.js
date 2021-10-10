import * as PIXI from 'pixi.js';
import { easeIn } from './easing/easingFuncs';
import { globalConfigs } from './configs/global';
import { randomlyPlaceSprites } from './sprites/spirtesLoader';

const { width, height, background } = globalConfigs;

const app = new PIXI.Application(width, height, { backgroundColor: background });
app.ticker.autoStart = false;

const unicornAsset1 = 'assets/unicorn-swag.png';
const unicornAsset2 = 'assets/unicorn-happy.png';
const unicornAsset3 = 'assets/unicorn-fart.png';
const unicornAsset4 = 'assets/unicorn-party.png';
const unicornAsset5 = 'assets/unicorn-sleep.png';

document.getElementById('canvas-wrapper').appendChild(app.view);

let sprites = [];
PIXI.loader.add('uni_swag', unicornAsset1)
PIXI.loader.add('uni_happy', unicornAsset2)
PIXI.loader.add('uni_fart', unicornAsset3)
PIXI.loader.add('uni_party', unicornAsset4)
PIXI.loader.add('uni_sleep', unicornAsset5)
PIXI.loader.load((loader, resources) => {
    const keys = Object.keys(resources);
    for (let i = 0; i < 30; i++) {
        const index = Math.floor(Math.random() * keys.length);
        const key = keys[index];
        sprites.push(new PIXI.Sprite.from(resources[key].texture));
    }
});

setTimeout(() => {
    sprites = randomlyPlaceSprites(app.stage, sprites);
}, 1000);

let isSpinning = false;
let isStopping = false;
window.addEventListener('keyup', ev => {
    if (ev.code.toLowerCase() === 'space') {
        if (isSpinning) {
            isStopping = true;
        }
        if (!isSpinning) {
            isSpinning = true;
        }
    }
})

app.ticker.add(animate);

const shouldColsMove = {
    [1]: false,
    [2]: false,
    [3]: false,
    [4]: false,
    [5]: false
}

let moveUpAllowed = 8;
let moveDownAllowed = 30;
let moveUp = 0;
let moveDown = 0;
function moveCol(num) {
    if (shouldColsMove[num]) {
        const col = sprites.filter(x => x.col === num);
        col.forEach(spec => {
            if (moveUp < moveUpAllowed) {
                spec.ref.y -= moveUp;
            } else {
                spec.ref.y += moveDown;
            }

            if (spec.ref.y > height) {
                spec.ref.y = -600;
            }
        });
    }
}

let secondsPassed = 0;
// 60 frames per second - 180 is 3 seconds
let untilStop = 180;
function animate(delta) {
    if (isStopping) {
        if (moveDown > 0) {
            moveDown -= 0.3;
        }
        if (secondsPassed >= untilStop) {
            shouldColsMove[1] = false;
            shouldColsMove[2] = false;
            shouldColsMove[3] = false;
            shouldColsMove[4] = false;
            shouldColsMove[5] = false;
            isSpinning = false;
            isStopping = false;
            secondsPassed = 0;
        }
        secondsPassed += 1;
    }

    if (isSpinning) {
        if (!shouldColsMove[1]) {
            setTimeout(() => {
                shouldColsMove[1] = true;
            }, 300)
        }
        if (!shouldColsMove[2]) {
            setTimeout(() => {
                shouldColsMove[2] = true;
            }, 600)
        }
        if (!shouldColsMove[3]) {
            setTimeout(() => {
                shouldColsMove[3] = true;
            }, 900)
        }
        if (!shouldColsMove[4]) {
            setTimeout(() => {
                shouldColsMove[4] = true;
            }, 1200)
        }
        if (!shouldColsMove[5]) {
            setTimeout(() => {
                shouldColsMove[5] = true;
            }, 1500)
        }

        moveCol(1);
        moveCol(2);
        moveCol(3);
        moveCol(4);
        moveCol(5);

        if (!isStopping) {
            if (moveUp > moveUpAllowed) {
                if (moveDown < moveDownAllowed) {
                    moveDown += 0.3;
                }
            } else {
                moveUp += 0.3;
            }
        }
    }
}
