import Vue from "nativescript-vue";
import Home from "./components/Home";

// eslint-disable-next-line no-undef
Vue.config.silent = (TNS_ENV === "production");
Vue.config.suppressRenderLogs = true;

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
