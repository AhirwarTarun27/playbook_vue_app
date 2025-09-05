<script setup>
defineProps({
  days: {
    type: Array,
    required: true,
    // [{ day: number, label: string }]
  },
  activeDay: { type: Number, required: false },
});
</script>

<template>
  <div class="date-row">
    <div v-for="day in days" :key="day.day" class="date-cell">
      <div class="day-wrapper">
        <span class="day" :class="{ active: day.day === activeDay }">
          {{ day.day }}
        </span>
      </div>
      <span class="label" :class="{ active: day.day === activeDay }">
        {{ day.label }}
      </span>
    </div>
  </div>
</template>


