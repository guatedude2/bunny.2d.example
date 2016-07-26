import {Game, Sprite, Container, Body, Time} from 'bunny.2d';

export default class Obstacle extends Container{
  constructor() {
    super();
    this.initialPosX = Game.viewport.width / 2;
    this.position.x = this.initialPosX;
    this.top = new Sprite('assets/obstacle.png');
    this.top.scale.y = -1;
    this.top.anchor.set(0, 0);
    this.top.position.y = -150;
    this.top.body = Body.createRectangle({
      width: 175,
      height: 942,
      isStatic: true
    });

    this.bottom = new Sprite('assets/obstacle.png');
    this.bottom.anchor.set(0, 0);
    this.bottom.position.y = 150;
    this.bottom.body = Body.createRectangle({
      width: 175,
      height: 942,
      isStatic: true
    });

    this.addChild(this.top);
    this.addChild(this.bottom);
  }

  onOffscreen() {}

  render() {
    this.x -= 160 * Time.deltaTime;

    if (this.x < -(Game.viewport.width / 2) - 175) {
      this.onOffscreen();
    }
  }

}


