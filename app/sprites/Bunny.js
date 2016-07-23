import { Store, Sprite, Body, Timer} from 'bunny.2d';

class Bunny extends Sprite{
  constructor() {
    super('assets/bunny2.png');
    const self = this;
    this.body = Body.createRectangle({
      width: 102,
      height: 75,
      restitution: 0.8,
      isSleeping: true,
      onCollided() {
        self.onCollided();
      }
    });

    this.timer = new Timer(() => {
      this.setTexture('assets/bunny2.png');
    }, 100);
  }

  jump() {
    this.body.setVelocity({ y: -13 });
    this.setTexture('assets/bunny1.png');
    this.timer.restart();
  }

}

Bunny = Store.connect(Bunny);

export default Bunny;
