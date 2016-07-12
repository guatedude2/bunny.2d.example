import {Canvas, Stage, Sprite} from 'bunny.2d';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);
    this.logo = new Sprite('logo.png');
    this.logo.alpha = 0;
    this.logo.position.x = -50;
    this.addChild(this.logo);
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

    this.logo.alpha = 0;
    this.logo.position.x = -50;
    this.logo.animate({
      alpha: [0, 1, 0 ,1],
      position: { x: 0 }
    }, 400);
  }
};