<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: "" },
  showCalendarAction: { type: Boolean, default: false },
});

const emit = defineEmits(["edit", "calendar", "collapsePrev", "collapseNext"]);
</script>

<template>
  <div class="panel-header">
    <div>
      <h2 class="panel-title">{{ title }}</h2>
      <p v-if="subtitle" class="panel-subtitle">{{ subtitle }}</p>
    </div>
    <div class="panel-header-actions">
      <v-icon @click="emit('edit')">mdi-pencil</v-icon>
      <v-icon v-if="showCalendarAction" @click="emit('calendar')">mdi-calendar</v-icon>
      <v-icon style="transform: rotate(270deg)" @click="emit('collapsePrev')">mdi-triangle</v-icon>
      <v-icon style="transform: rotate(90deg)" @click="emit('collapseNext')">mdi-triangle</v-icon>
    </div>
  </div>
</template>


