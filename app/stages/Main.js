import {Stage, Keys, Point} from 'bunny.2d';

import Bunny from '../sprites/Bunny';

export default class Main extends Stage {
  constructor() {
    super(0x0000FF);
    this.bunny = new Bunny();
    this.goto = new Point(0,0);

    this.addChild(this.bunny);
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
    super.render();
    if (Keys.isPressed(Keys.KEY_LEFT)) {
      this.bunny.position.x -= 5;
    } else if (Keys.isPressed(Keys.KEY_RIGHT)) {
      this.bunny.position.x += 5;
    }

    if (Keys.isPressed(Keys.KEY_UP)) {
      this.bunny.position.y -= 5;
    } else if (Keys.isPressed(Keys.KEY_DOWN)) {
      this.bunny.position.y += 5;
    }
  }

  onMouseDown(e) {
    this.camera.followObject(this.bunny, {
      distance: 100
    });
    // this.camera.followPath(this.path, {
    //   loop: true
    // });
  }
};