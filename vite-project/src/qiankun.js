
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'vueApp',
    entry: 'http://192.168.0.110:8080/',
    container: '#container',
    activeRule: '/aa',
  },
]);
export default start