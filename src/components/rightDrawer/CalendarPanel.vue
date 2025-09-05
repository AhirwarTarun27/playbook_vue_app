<script setup>
import WeekDateRow from "./WeekDateRow.vue";

defineProps({
  date: { type: Date, required: true },
  weekDays: { type: Array, required: true },
});

const emit = defineEmits(["update:date", "back"]);
</script>

<template>
  <div class="content">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">My Calendar</h2>
        <p class="panel-subtitle">{{ new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(date) }}</p>
      </div>
      <div class="panel-header-actions">
        <v-icon>mdi-pencil</v-icon>
        <v-icon>mdi-cog</v-icon>
      </div>
    </div>

    <v-date-picker :model-value="date" @update:model-value="value => emit('update:date', value)" elevation="0" />

    <div class="horizontal-line"></div>

    <div>
      <h2 class="week-view">Week View</h2>
    </div>

    <WeekDateRow :days="weekDays" :active-day="22" />

    <div class="d-flex justify-end mt-3">
      <div class="updateBtn-container">
        <button class="updateBtn" @click="emit('back')">Back</button>
      </div>
    </div>
  </div>
</template>


