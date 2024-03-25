<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <ParrResponseEntryFiltersComponent /> -->

    <!-- <parr-response-entry-filter-component /> -->
    <FiltersPanel />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import ParrResponseEntryFiltersComponent from "./components/ems_dashboard/parrResponseEntry/Filters.vue";
import FiltersPanel from "./components/ems_dashboard/parrResponseEntry/FiltersPanel.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // ParrResponseEntryFiltersComponent,
    FiltersPanel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
