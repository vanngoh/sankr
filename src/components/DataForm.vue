<template>
  <div class="row" style="max-width: 500px">
    <div v-for="(datum, index) in data" :key="index" class="row col-12 q-mt-sm">
      <data-input
        class="col-11"
        :from="datum[0]"
        :to="datum[1]"
        :weight="datum[2]"
        @update-val="updateVal(index, $event)"
      />
      <q-btn
        flat
        round
        dense
        class="col-1"
        icon="cancel"
        color="red"
        @click="deleteRow(index)"
      />
    </div>

    <div class="col-12 q-px-xs q-py-sm">
      <q-btn
        no-caps
        flat
        class="full-width"
        icon="add_circle"
        label="Add row"
        @click="addRow"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import DataInput from "./DataInput.vue";
import { useSankeyStore } from "../stores/sankey";

export default {
  components: {
    DataInput,
  },

  setup() {
    const store = useSankeyStore();
    const { data } = storeToRefs(store);

    // Add row
    const addRow = () => {
      data.value.push(["", "", 0]);
    };

    // Delete row
    const deleteRow = (index) => {
      if (data.value.length > 1 && !!data.value[index]) {
        data.value.splice(index, 1);
      }
    };

    // Update changes
    const updateVal = (row, evt) => {
      if (evt.key === 2) {
        evt.val = Number(evt.val);
      }
      data.value[row][evt.key] = evt.val;
    };

    return {
      // Variables
      data,
      // Functions
      addRow,
      deleteRow,
      updateVal,
    };
  },
};
</script>
<style></style>
