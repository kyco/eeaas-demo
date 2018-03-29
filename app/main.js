import Eeaas from 'eeaas';
import Snake from 'eeaas-snake';
import Nyancat from 'eeaas-nyancat';

const snake1 = Object.assign({}, Snake);
const snake2 = Object.assign({}, Snake);

snake1.name = 'Snake1';
snake2.name = 'Snake2';

Object.assign(snake2, {
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

Eeaas.register(snake1);
Eeaas.register(snake2);
Eeaas.register(Nyancat);
Eeaas.enable();
