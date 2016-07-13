import {Canvas, Stage, Sprite, Animation} from 'bunny.2d';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);
    this.logo = new Sprite('logo.png');
    this.logo.alpha = 0;
    this.logo.position.x = -50;
    this.addChild(this.logo);

    const temp = new Animation({
      loops: -1

    });
    temp.key({
      alpha: 1,
      position: { x: 0 }
    });
    temp.key({
      position: { x: 200 }
    });
    temp.key({
      alpha: 0.5
    });
    this.logo.animator.add('logo-fade-in', temp);
    // this.logo.animator.add('logo-fade-in', {
    //   loop: true,
    //   steps: [
    //     {
    //       from: { position: { x: 0}},
    //       to: {position: {x: 200 }},
    //       duration: 800,
    //       easing: 'linear'
    //     }
    //   ]
    // });
  }

  onReady() {
    this.logo.animator.play('logo-fade-in');
  }

  startLoader() {
    //LOAD ASSETS
  }

  showMain() {
    Canvas.setStage('main');
  }

  render() {
    super.render();
  }

  onMouseDown() {
  }
};