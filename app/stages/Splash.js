import {Canvas, Stage, Sprite, Loader} from 'bunny.2d';
import logoAnimations from '../animations/logo.json';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);

    this.logo = new Sprite('logo.png');
    this.logo.animator.load(logoAnimations);
    this.addChild(this.logo);
  }

  onReady() {
    this.logo.animator.play('fade-in', () => {
      this.startLoading();
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
    console.log('PROGRESS', loader.progress)
  }

  loadingComplete() {
    console.log('DONE')

    this.logo.animator.play('fade-out', () => {
      Canvas.setStage('main');
    });
  }

  render() {
    super.render();
  }
};