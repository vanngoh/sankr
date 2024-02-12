<template>
  <q-page class="flex flex-center">
    <div class="column">
      <data-form class="q-mt-md" />

      <div class="col-12 q-px-xs q-my-sm">
        <q-btn
          no-caps
          class="bg-secondary text-white full-width"
          icon="auto_awesome"
          icon-right="auto_awesome"
          label="Generate"
          @click="generateDiagram()"
        />
      </div>
    </div>
    <sankey-diagram ref="sankeyRef" class="q-ma-md" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import DataForm from "../components/DataForm.vue";
import SankeyDiagram from "../components/SankeyDiagram.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    DataForm,
    SankeyDiagram,
  },

  setup() {
    const sankeyRef = ref(1);

    const generateDiagram = () => {
      sankeyRef.value.refresh();
    };

    return {
      // Variables
      sankeyRef,
      // Functions
      generateDiagram,
    };
  },
});
</script>
