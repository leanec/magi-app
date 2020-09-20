import Vue from "nativescript-vue";
import Home from "./components/Home";

// eslint-disable-next-line no-undef
Vue.config.silent = (TNS_ENV === "production");
Vue.config.suppressRenderLogs = true;

// eslint-disable-next-line global-require
Vue.registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh);

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
