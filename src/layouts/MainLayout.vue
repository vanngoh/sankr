<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flex bg-white">
      <!-- <q-img src="" /> -->
      <q-toolbar>
        <q-icon class="text-black" size="md" name="insights" />
        <q-toolbar-title class="text-black"> Sankr </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar class="bg-white text-center">
        <div class="full-width text-black">
          Made with <span style="color: #e25555">&hearts;</span> by Vann ©
          {{ new Date().getFullYear() }}
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>
