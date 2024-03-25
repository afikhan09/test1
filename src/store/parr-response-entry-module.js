import { parrResponseEntryFields } from "@/assets/fixtures/parr_response_entry_data";

const initialStage = {
  fields: parrResponseEntryFields,
};

const parrResponseEntry = {
  namespaced: true,
  state: initialStage,
  actions: {},
  mutations: {},
  getters: {
    parrResponseEntryFields(state) {
      return state.fields;
    },
  },
};

export default parrResponseEntry;
