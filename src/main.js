import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import ParrResponseEntryFiltersComponent from "./components/ems_dashboard/parrResponseEntry/FiltersPanel.vue";

Vue.config.productionTip = false;

// export const ParrResponseEntryFilter =
// Vue.component(
//   "parr-response-entry-filter-component",
//   ParrResponseEntryFiltersComponent
// );
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
