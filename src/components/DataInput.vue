<template>
  <div class="row">
    <div class="col-4 q-px-xs">
      <q-input
        outlined
        dense
        placeholder="From"
        :model-value="from"
        @update:model-value="
          (newVal) => {
            tmpFrom = newVal;
          }
        "
        @keyup="$emit('update-val', { key: 0, val: tmpFrom })"
      />
    </div>
    <div class="col-4 q-px-xs">
      <q-input
        outlined
        dense
        placeholder="To"
        :model-value="to"
        @update:model-value="
          (newVal) => {
            tmpTo = newVal;
          }
        "
        @keyup="$emit('update-val', { key: 1, val: tmpTo })"
      />
    </div>
    <div class="col-4 q-px-xs">
      <q-input
        outlined
        dense
        placeholder="Weight"
        :model-value="weight"
        @update:model-value="
          (newVal) => {
            tmpWeight = newVal;
          }
        "
        @keyup="$emit('update-val', { key: 2, val: tmpWeight })"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "DataInput",

  props: {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
      required: true,
    },
  },

  setup(props) {
    const tmpFrom = ref(props.from);
    const tmpTo = ref(props.to);
    const tmpWeight = ref(props.weight);

    return {
      // Variables
      tmpFrom,
      tmpTo,
      tmpWeight,
    };
  },
};
</script>
