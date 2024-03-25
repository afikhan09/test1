export const parrResponseEntryFields = [
  {
    id: 1,
    label: "station",
    description: "",
    field_type: "multiselect",
    // options: "",
    lookup_field: "station",
    field_name: "station",
    options: {
      searchable: true,
      hidden: false,
    },
    validation: "",
    value: "",
  },
  {
    id: 2,
    label: "Report Month",
    description: "report month in parr response entry",
    field_type: "text",
    placeholder: "MM",
    // options: {
    //   hasLink: false,
    //   link: "series",
    // },
    field_name: "reportingMonth",
    validation: "numeric",
    attrs: {
      numeric: true,
      max: 2,
      commonality: "U",
    },
    value: "",
    cleave: true,
    config: {
      numeral: true,
      numeralThousandsGroupStyle: "none",
      numeralDecimalScale: 0,
    },
  },
  {
    id: 3,
    label: "Report Year",
    description:
      "The unique number used internally by ASCAP within its own systems to identify the audiovisual work (Series)",
    field_type: "text",
    placeholder: "YYYY",
    // options: {
    //   hasLink: false, // denotes this input should have CTA link
    //   link: "series",
    // },
    field_name: "reportingYear",
    validation: "numeric",
    attrs: {
      numeric: true,
      max: 4,
      commonality: "U",
    },
    value: "",
    cleave: true,
    config: {
      numeral: true,
      numeralThousandsGroupStyle: "none",
      numeralDecimalScale: 0,
    },
  },
];
