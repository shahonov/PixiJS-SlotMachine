import { globalConfigs } from "../configs/global";

const { width, height, mainSpriteSize } = globalConfigs;

const spritePositions = [
    { col: 1, x: 0, y: -600 },
    { col: 1, x: 0, y: -400 },
    { col: 1, x: 0, y: -200 },
    { col: 1, x: 0, y: 0 },
    { col: 1, x: 0, y: 200 },
    { col: 1, x: 0, y: 400 },

    { col: 2, x: 200, y: -600 },
    { col: 2, x: 200, y: -400 },
    { col: 2, x: 200, y: -200 },
    { col: 2, x: 200, y: 0 },
    { col: 2, x: 200, y: 200 },
    { col: 2, x: 200, y: 400 },

    { col: 3, x: 400, y: -600 },
    { col: 3, x: 400, y: -400 },
    { col: 3, x: 400, y: -200 },
    { col: 3, x: 400, y: 0 },
    { col: 3, x: 400, y: 200 },
    { col: 3, x: 400, y: 400 },

    { col: 4, x: 600, y: -600 },
    { col: 4, x: 600, y: -400 },
    { col: 4, x: 600, y: -200 },
    { col: 4, x: 600, y: 0 },
    { col: 4, x: 600, y: 200 },
    { col: 4, x: 600, y: 400 },

    { col: 5, x: 800, y: -600 },
    { col: 5, x: 800, y: -400 },
    { col: 5, x: 800, y: -200 },
    { col: 5, x: 800, y: 0 },
    { col: 5, x: 800, y: 200 },
    { col: 5, x: 800, y: 400 },
]

export function randomlyPlaceSprites(stage, sprites) {
    let index = 0;
    for (const position of spritePositions) {
        const sprite = sprites[index];
        index++;
        sprite.width = mainSpriteSize;
        sprite.height = mainSpriteSize;
        sprite.position.set(position.x, position.y);
        position.ref = sprite;
        stage.addChild(position.ref);
    }
    return spritePositions;
}

export function addSpriteToStageCenter(stage, assetPath, size) {
    const sprite = PIXI.Sprite.from(assetPath);
    console.log(sprite instanceof PIXI.Sprite);
    sprite.width = size || mainSpriteSize;
    sprite.height = size || mainSpriteSize;
    sprite.x = width / 2;
    sprite.y = height / 2;
    sprite.anchor.set(0.5);

    stage.addChild(sprite);

    return sprite;
}

export function addSpriteToStage(stage, assetPath, x, y, size) {
    const sprite = PIXI.Sprite.from(assetPath);

    sprite.width = size || mainSpriteSize;
    sprite.height = size || mainSpriteSize;
    sprite.x = x;
    sprite.y = y;
    sprite.anchor.set(0.5);

    stage.addChild(sprite);

    return sprite;
}
