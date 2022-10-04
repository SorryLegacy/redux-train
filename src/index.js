import { createStore, bindActionCreators } from 'redux';
import * as action from './actions';
import reducer from './reducer';


const store = createStore(reducer)
const { dispatch } = store;

const  {inc, dec, rnd } = bindActionCreators(action, dispatch);

document.getElementById('inc')
    .addEventListener('click', inc)

document.getElementById('dec')
    .addEventListener('click', dec)

document.getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*10);
       rnd(payload);
})
const update = () => {
  document.getElementById('counter')
      .innerHTML = store.getState()
};

store.subscribe(update);