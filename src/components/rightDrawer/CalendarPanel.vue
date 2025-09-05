<script setup>
import WeekDateRow from "./WeekDateRow.vue";
import EventsList from "./EventsList.vue";

defineProps({
  date: { type: Date, required: true },
  weekDays: { type: Array, required: true },
});

const events = [
  { 
    startTime: "11:00", 
    endTime: "12:00", 
    label: "Tour: Julie Smith", 
    color: "green", 
    completed: false 
  },
  { 
    startTime: "13:00", 
    endTime: "14:00", 
    label: "Maintenance: #1232", 
    color: "orange", 
    completed: false 
  },
];

function handleToggleEvent(event) {
  const eventIndex = events.findIndex(e => 
    e.startTime === event.startTime && e.label === event.label
  );
  if (eventIndex !== -1) {
    events[eventIndex].completed = !events[eventIndex].completed;
  }
}

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

    <v-date-picker density="compact" hide-header="true" :model-value="date" @update:model-value="value => emit('update:date', value)" elevation="0" />

    <div class="horizontal-line"></div>

    <div>
      <h2 class="week-view">Week View</h2>
    </div>

    <WeekDateRow :days="weekDays" :active-day="22" />

    <EventsList :events="events" @toggleEvent="handleToggleEvent" />

    <div class="d-flex justify-end mt-3">
      <div class="updateBtn-container">
        <button class="updateBtn" @click="emit('back')">Back</button>
      </div>
    </div>
  </div>
</template>


