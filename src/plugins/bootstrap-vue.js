import Vue from "vue";

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
