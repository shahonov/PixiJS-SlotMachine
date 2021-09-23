import { globalConfigs } from "../configs/global";

const { width, height, mainSpriteSize } = globalConfigs;

export function addSpriteToStageCenter(stage, assetPath, size) {
    const sprite = PIXI.Sprite.from(assetPath);

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
