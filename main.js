
import { registerMicroApps, runAfterFirstMounted, start, initGlobalState } from 'qiankun';

/**
 * Step1 初始化应用
 */

function loader(loading) {
  console.log(`loading:${loading}`);
}

function genActiveRule(urlList) {
  return (location) => {
    for (let url of urlList) {
      if (location.hash === url) {
        return true;
      }
    }
    return false;
  };
}

function navigateTo(hash) {
  window.location.hash = hash;
}

/**
* Step2 注册子应用
*/

registerMicroApps(
  [
    {
      name: 'angularjs',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: genActiveRule(['#/angularjs']),
    },
    {
      name: 'vue2',
      entry: '//localhost:7102',
      container: '#subapp-viewport',
      loader,
      activeRule: genActiveRule(['#/vue2']),
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        return Promise.resolve();
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
navigateTo('#/vue2');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
