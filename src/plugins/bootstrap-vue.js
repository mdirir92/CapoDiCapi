import Vue from "vue";
// (vue-cli-plugin-bootstrap-vue, 2020)
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.use(BootstrapVue);
import VueDisqus from "vue-disqus";
import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
Vue.use(Toaster, { timeout: 3000 });
Vue.use(VueDisqus);

// reference 
// npm. 2020. Vue-Cli-Plugin-Bootstrap-Vue. [online] Available at: <https://www.npmjs.com/package/vue-cli-plugin-bootstrap-vue> [Accessed 14 May 2020].
