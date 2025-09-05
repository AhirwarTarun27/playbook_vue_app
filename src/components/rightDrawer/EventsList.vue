<script setup>
defineProps({
  events: {
    type: Array,
    required: true,
    // [{ time: string, label: string, color: string }]
  },
});
</script>

<template>
  <div>
    <div v-for="event in events" :key="event.time" class="event-row">
      <div class="event-time">{{ event.time }}</div>
      <div
        class="event-pill"
        :class="{
          green: event.color === 'bg-green-200',
          orange: event.color === 'bg-orange-200',
        }"
      >
        {{ event.label }}
      </div>
    </div>
  </div>
</template>


