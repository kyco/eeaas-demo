import Eeaas from 'eeaas';
import Snake from 'eeaas-snake';
import Nyancat from 'eeaas-nyancat';

Object.assign(Snake, {
  enable() {
    this.startTrigger();
  },

  disable() {
    document.getElementById('snake-trigger-button').removeEventListener('click', this.start);
    this.stop();
  },

  startTrigger() {
    document.getElementById('snake-trigger-button').addEventListener('click', this.start);
  }
});

Eeaas.register(Snake);
Eeaas.register(Nyancat);
Eeaas.enable();
