import { Sprite, Body, Time} from 'bunny.2d';

export default class Obstacle extends Sprite{
  constructor() {
    super('assets/obstacle.png');
    // const self = this;
    // this.body = Body.createRectangle({
    //   width: 102,
    //   height: 75,
    //   restitution: 1,
    //   isSleeping: true,
    //   onCollided() {
    //     self.onCollided();
    //   }
    // });
  }

  render() {
    this.position.x -= 320 * Time.deltaTime;
  }

}


