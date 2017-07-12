
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
Vue.prototype.$http = axios;
/*引入ele样式*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*引入富文本编辑器*/
import VueQuillEditor from 'vue-quill-editor'
Vue.use(ElementUI);
Vue.use(VueQuillEditor);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
