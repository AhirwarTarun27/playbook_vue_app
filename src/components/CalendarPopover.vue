<script setup>
import { ref } from "vue";

const model = defineModel({ type: String, default: "" });
const menu = ref(false);
</script>

<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="bottom end">
    <template #activator="{ props }">
      <v-btn v-bind="props" icon variant="flat" class="rounded-lg">
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </template>
    <v-card class="p-2">
      <v-date-picker v-model="model" hide-header elevation="0"></v-date-picker>
    </v-card>
  </v-menu>
</template>

<style scoped></style>
