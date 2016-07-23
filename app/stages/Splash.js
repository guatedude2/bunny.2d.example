import _ from 'lodash';
import {Game, Stage, Sprite, Loader, Shape} from 'bunny.2d';

import assets from '../assets.json';

export default class Splash extends Stage {
  constructor() {
    super(0xFFFFFF);
    this.alpha = 0;

    // logo sprite
    this.logo = new Sprite('assets/logo.png');
    this.logo.alpha = 0;
    this.logo.position.x = -50;
    this.addChild(this.logo);

    // loading bar outter shape
    this.barOuter = new Shape.Rectangle(404, 24);
    this.barOuter.alpha = 0;
    this.barOuter.color = 0xDDDDDD;
    this.barOuter.position.y = 250;
    this.addChild(this.barOuter);

    // loading bar inner shape
    this.bar = new Shape.Rectangle(0, 20);
    this.bar.alpha = 0;
    this.bar.anchor.x = 0;
    this.bar.position.x = -200;
    this.bar.position.y = 250;
    this.bar.color = 0x333333;
    this.addChild(this.bar);
  }

  onLoad() {
    this.animate({ alpha: 1}, () => {
      this.logo.animate({ alpha: 1, 'position.x': 0 }, 400, 'easeOutQuad', () => {
        this.barOuter.animate({ alpha: 1}, () => {
          this.bar.alpha = 1;
          this.startLoading();
        });
      });
    });
  }

  startLoading() {
    const loader = new Loader();
    loader.on('progress', this.loadingProgress.bind(this));
    loader.on('complete', this.loadingComplete.bind(this));
    _.forEach(assets, (source, id) => {
      loader.add(id, source);
    });

    loader.load();
  }

  loadingProgress(loader) {
    this.bar.animate({
      width: loader.progress / 100 * 400
    }, 400);
  }

  loadingComplete() {
    this.bar.width = 400;
    this.barOuter.animate({ alpha: 0});
    this.bar.animate({ alpha: 0}, () => {
      this.logo.animate({ scale: {x: 0.75, y: 0.75}}, 400, 'easeOutQuad', () => {
        this.logo.animate({ scale: {x: 30, y: 30}}, 600, 'easeInExpo');
        this.animate({ alpha: 0}, 600, 'easeInExpo', () => {
          Game.setStage('main');
        });
      });
    });
  }
};