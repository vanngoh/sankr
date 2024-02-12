<template>
  <div>
    <g-chart
      :settings="{ packages: ['sankey'] }"
      :type="type"
      :options="options"
      :data="data"
    />
  </div>
</template>
<script>
import { Screen } from "quasar";
import { ref } from "vue";
import { useSankeyStore } from "../stores/sankey";
import { GChart } from "vue-google-charts";

const type = "Sankey";

const sankeyStore = useSankeyStore();

const colors = [
  "#a6cee3",
  "#b2df8a",
  "#fb9a99",
  "#fdbf6f",
  "#cab2d6",
  "#ffff99",
  "#1f78b4",
  "#33a02c",
];

const options = {
  width: Screen.width < 600 ? Screen.width * 0.8 : 600,
  sankey: {
    node: {
      colorMode: "unique",
      colors: colors,
    },
    link: {
      colorMode: "gradient", // gradient, source, target
      colors: colors,
    },
  },
};

export default {
  name: "GoogleChart",
  components: {
    GChart,
  },

  setup() {
    const data = ref(sankeyStore.fetchData);

    const refresh = () => {
      console.log("Refreshing...");
      data.value = sankeyStore.fetchData;
    };

    return {
      // Variables
      data,
      options,
      type,
      // Functions
      refresh,
    };
  },
};
</script>
<style></style>
