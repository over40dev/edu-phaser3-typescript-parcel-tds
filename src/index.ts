import Phaser from 'phaser';
import CreateScene from './createScene';

const engineConfig = {
  type: Phaser.AUTO,
  width: 500,
  height: 400,
  scene: {
    create: CreateScene,
  }
}

const game = new Phaser.Game(engineConfig);

