import {Stage, Keys, Point, TilingSprite, Time} from 'bunny.2d';

import Bunny from '../sprites/Bunny';

export default class Main extends Stage {
  constructor() {
    super(0xEEEEEE);
    this.bunny = new Bunny();

    this.map = new TilingSprite('logo.png', this.width, this.height);
    this.addChildAt(this.map, 0);

    this.world.addChild(this.bunny);
    this.path = [
      new Point(100, 0),
      new Point(100, 100),
      new Point(-200, 200),
      new Point(-200, -200),
      new Point(100, -300),
      new Point(0, 0)
    ];
  }

  render() {
    this.map.tilePosition.set(-this.camera.position.x, -this.camera.position.y);
    super.render();
    if (Keys.isPressed(Keys.KEY_LEFT)) {
      this.bunny.position.x -= 500 * Time.deltaTime;
    } else if (Keys.isPressed(Keys.KEY_RIGHT)) {
      this.bunny.position.x += 500 * Time.deltaTime;
    }

    if (Keys.isPressed(Keys.KEY_UP)) {
      this.bunny.position.y -= 500 * Time.deltaTime;
    } else if (Keys.isPressed(Keys.KEY_DOWN)) {
      this.bunny.position.y += 500 * Time.deltaTime;
    }
  }

  onMouseDown(e) {
    this.camera.followObject(this.bunny, {
      distance: 200
    });
    // this.camera.followPath(this.path, {
    //   loop: true
    // });
  }
};