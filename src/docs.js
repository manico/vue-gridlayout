import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
/* eslint-disable import/no-named-as-default */
import VGrid from './components/VGrid';

import './styles/app.styl';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VGrid);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
