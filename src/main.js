import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./sass/style.sass"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faCoffee, faCut, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { hooks } from "vue-hooks";
library.add(faCoffee, faHandPointRight, faCut, faAt )

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  hooks,
  render: h => h(App)
}).$mount("#app");
