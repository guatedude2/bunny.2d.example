import {
  Stage,
  PoolContainer,
  Store,
  TilingSprite,
  Time,
  Body,
  Input
} from 'bunny.2d';

import Bunny from '../sprites/Bunny';
import Obstacle from '../sprites/Obstacle';
import * as gameActions from '../actions/game';

class Main extends Stage {
  constructor() {
    super(0x7acde6);

    this.spawnTime = false;

    this.bunny = new Bunny();
    this.bunny.onCollided = () => {
      this.actions.gameOver();
      this.obstaclePool.enabled = false;
    };

    this.clouds = new TilingSprite('assets/clouds.png', this.width, 380);
    this.clouds.anchor.set(0.5, 1);
    this.clouds.position.y = this.height / 2 - 230;

    this.mountains1 = new TilingSprite('assets/mountains1.png', this.width, 335);
    this.mountains1.anchor.set(0.5, 1);
    this.mountains1.position.y = this.height / 2 - 230;

    this.mountains2 = new TilingSprite('assets/mountains2.png', this.width, 175);
    this.mountains2.anchor.set(0.5, 1);
    this.mountains2.position.y = this.height / 2 - 230;

    this.ground = new TilingSprite('assets/ground.png', this.width, 230);
    this.ground.anchor.set(0.5, 1);
    this.ground.position.y = this.height / 2;

    this.world.addBody(Body.createRectangle({
      y: this.height / 2 - 115,
      width: this.width,
      height: 230,
      isStatic: true
    }));

    this.obstaclePool = new PoolContainer(Obstacle, 5);
    this.obstaclePool.onSpawn = (obstacle) => {
      obstacle.onOffscreen = () => {
        this.obstaclePool.release(obstacle);
      };
    };
    this.obstaclePool.onRelease = (obstacle) => {
      obstacle.position.x = obstacle.initialPosX;
    };

    this.world.addChild(this.clouds);
    this.world.addChild(this.mountains1);
    this.world.addChild(this.mountains2);
    this.world.addChild(this.ground);
    this.world.addChild(this.bunny);
    this.world.addChild(this.obstaclePool);
    this.interactive = true;
  }

  render() {
    if (!this.state.gameOver) {
      if (Input.isPressed('jump')) {
        if (!this.jumped) {
          this.bunny.jump();
          this.jumped = true;
          if (!this.spawnTime) {
            this.spawnTime = 1;
          }
        }
      } else {
        this.jumped = false;
      }
      this.clouds.tilePosition.x -= 80 * Time.deltaTime;
      this.mountains1.tilePosition.x -= 160 * Time.deltaTime;
      this.mountains2.tilePosition.x -= 240 * Time.deltaTime;
      this.ground.tilePosition.x -= 320 * Time.deltaTime;
      if (this.spawnTime % 90  === 1) {
        this.obstaclePool.spawn();
      }
      this.spawnTime++;
    } else {
      this.clouds.tilePosition.x -= 10 * Time.deltaTime;
    }
  }
};

const mapStageState = ({game}) => ({
  gameOver: game.gameOver
});

Main = Store.connect(Main, mapStageState, gameActions);

export default Main;