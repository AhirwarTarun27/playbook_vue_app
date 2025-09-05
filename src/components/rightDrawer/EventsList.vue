<script setup>
import { ref } from 'vue';

defineProps({
  events: {
    type: Array,
    required: true,
    // [{ startTime: string, endTime: string, label: string, color: string, completed: boolean }]
  },
});

// Generate time slots for the timeline
const timeSlots = [
   '11:00', '12:00', '13:00', '14:00', '15:00'
];

// Function to get the position of a time slot
function getTimeSlotPosition(time) {
  const index = timeSlots.indexOf(time);
  return index !== -1 ? index * 60 : 0; // 60px per time slot
}

// Function to get the height of an event based on duration
function getEventHeight(startTime, endTime) {
  const startIndex = timeSlots.indexOf(startTime);
  const endIndex = timeSlots.indexOf(endTime);
  if (startIndex === -1 || endIndex === -1) return 60;
  return (endIndex - startIndex) * 60;
}
</script>

<template>
  <div class="events-timeline">
    <!-- Time slots column -->
    <div class="time-slots">
      <div 
        v-for="time in timeSlots" 
        :key="time" 
        class="time-slot"
        :style="{ top: getTimeSlotPosition(time) + 'px' }"
      >
        {{ time }}
      </div>
    </div>
    
    <!-- Events column -->
    <div class="events-column">
      <div 
        v-for="event in events" 
        :key="event.startTime + event.label"
        class="event-block"
        :class="{
          'event-green': event.color === 'green',
          'event-orange': event.color === 'orange',
          'event-completed': event.completed
        }"
        :style="{
          top: getTimeSlotPosition(event.startTime) + 'px',
          height: getEventHeight(event.startTime, event.endTime) + 'px'
        }"
      >
        <div class="event-content">
          <span class="event-label">{{ event.label }}</span>
          <input 
            type="checkbox" 
            class="event-checkbox"
            :checked="event.completed"
            @change="$emit('toggleEvent', event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-timeline {
  position: relative;
  display: flex;
  height: 200px;
  overflow-y: auto;
  padding: 0 16px;
}

.time-slots {
  position: relative;
  width: 60px;
  flex-shrink: 0;
}

.time-slot {
  position: absolute;
  left: 0;
  font-size: 12px;
  color: #6b7280;
  height: 60px;
  display: flex;
  align-items: center;
  border-right: 1px solid #e5e7eb;
  padding-right: 8px;
}

.events-column {
  position: relative;
  flex: 1;
  margin-left: 16px;
}

.event-block {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.event-block:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.event-green {
  background-color: #dcfce7;
  border-left: 4px solid #22c55e;
}

.event-orange {
  background-color: #fed7aa;
  border-left: 4px solid #f97316;
}

.event-completed {
  opacity: 0.6;
}

.event-completed .event-label {
  text-decoration: line-through;
}

.event-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.event-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  flex: 1;
}

.event-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  flex-shrink: 0;
}

.event-checkbox:checked {
  background-color: #22c55e;
  border-color: #22c55e;
}

.event-checkbox:checked::after {
  content: '✓';
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Scrollbar styling */
.events-timeline::-webkit-scrollbar {
  width: 6px;
}

.events-timeline::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.events-timeline::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.events-timeline::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>


