<template>
  <div>
    <h1 class="text-left">Parr response Entry</h1>
    <!-- <template v-for="(field, index) in parrResponseEntryFields">
      <div :key="index">
        <h1>{{ field.label }}</h1>
      </div>
    </template> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FiltersPanel",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      parrResponseEntryFields: "parrResponseEntry/parrResponseEntryFields",
    }),

    // Log parrResponseEntryFields for debugging
    // parrResponseEntryFieldsDebug() {
    //   console.log(this.parrResponseEntryFields + "parrresponse");
    //   return this.parrResponseEntryFields; // Ensure to return the data
    // },
  },

  mounted() {
    console.log("parrResponseEntryFields:", this);
  },
};
</script>

<style></style>
