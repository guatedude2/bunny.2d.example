import {Canvas, Stage, Sprite, Loader, Shape} from 'bunny.2d';
import basicAnimations from '../animations/basic.json';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);

    // logo sprite
    this.logo = new Sprite('logo.png');
    this.logo.alpha = 0;
    this.logo.animator.load(basicAnimations);
    this.addChild(this.logo);

    // loading bar outter shape
    this.barOuter = new Shape.Rectangle(404, 24);
    this.barOuter.alpha = 0;
    this.barOuter.color = 0xDDDDDD;
    this.barOuter.position.y = 250;
    this.barOuter.animator.load(basicAnimations);
    this.addChild(this.barOuter);

    // loading bar inner shape
    this.bar = new Shape.Rectangle(0, 20);
    this.bar.alpha = 0;
    this.bar.anchor.x = 0;
    this.bar.position.x = -200;
    this.bar.position.y = 250;
    this.bar.color = 0x333333;
    this.bar.animator.load(basicAnimations);
    this.addChild(this.bar);
  }

  onReady() {
    this.logo.animator.play('slideAndFadeIn', () => {
      this.barOuter.animator.play('fadeIn', () => {
        this.bar.alpha = 1;
        this.startLoading();
      });
    });
  }

  startLoading() {
    const loader = new Loader();
    loader.on('progress', this.loadingProgress.bind(this));
    loader.on('complete', this.loadingComplete.bind(this));

    loader.add('bunny', 'sprites/bunny.png');

    loader.load();
  }

  loadingProgress(loader) {
    this.bar.width = loader.progress / 100 * 400;
  }

  loadingComplete() {
    this.barOuter.animator.play('fadeOut');
    this.bar.animator.play('fadeOut');
    this.logo.animator.play('fadeOut', () => {
      Canvas.setStage('main');
    });
  }

  render() {
    super.render();
  }
};