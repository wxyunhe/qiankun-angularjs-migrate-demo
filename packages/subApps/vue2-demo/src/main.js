import './public-path';
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';

Vue.config.productionTip = false;


let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;

  router = createRouter();

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}