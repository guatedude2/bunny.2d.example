import {Canvas, Stage, Sprite} from 'bunny.2d';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);
    this.logo = new Sprite('logo.png');
    this.addChild(this.logo);

    this.logo.animator.add('logo-fade-in', {
      keys: [
        {
          key: {
            alpha: 0,
            position: { x: -50}
          }
        }, {
          key: {
            alpha: 1,
            position: { x: 0 }
          },
          easing: 'easeOutQuad',
          duration: 800
        }
      ]
    });
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