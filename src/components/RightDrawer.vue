<script setup>
import { ref, computed } from "vue";

const open = defineModel({ type: Boolean, default: false });
const selectedDate = ref(new Date("2025-04-22"));

const weekDays = [
  { day: 21, label: "Mon" },
  { day: 22, label: "Tue" },
  { day: 23, label: "Wed" },
  { day: 24, label: "Thu" },
  { day: 25, label: "Fri" },
  { day: 26, label: "Sat" },
  { day: 27, label: "Sun" },
];

const events = [
  { time: "11:00", label: "Tour: Julie Smith", color: "bg-green-200" },
  { time: "12:00", label: "Maintenance: #1232", color: "bg-orange-200" },
  { time: "12:00", label: "Maintenance: #1232", color: "bg-orange-200" },
];

const leads = ref({
  mine: 4,
  verified: 8,
  unverified: 12,
});

const leadDetail = ref({
  name: "Bob Dylan",
  guidedTour: "Thursday, 4.10.25 @ 10:00 am",
  result: "",
  unitShown: "#1232",
  preferred: "#1002",
  notes: "",
});

const displayDate = computed(() => {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(selectedDate.value);
});
</script>

<template>
  <v-navigation-drawer
    v-model="open"
    location="right"
    width="398"
    temporary
    class="rdrawer"
  >
    <div class="panel">
      <!-- Header -->
      <div class="panel-header">
        <div>
          <h2 class="panel-title">Today's To-Do’s</h2>
          <p class="panel-subtitle">{{ displayDate }}</p>
        </div>
        <div class="panel-header-actions">
          <v-icon>mdi-pencil</v-icon>
          <v-icon>mdi-calendar</v-icon>
          <v-icon class="rotate-270">mdi-triangle</v-icon>
          <v-icon class="rotate-90">mdi-triangle</v-icon>
        </div>
      </div>

      <!-- Date Row -->
      <div class="date-row">
        <div v-for="day in weekDays" :key="day.day" class="date-cell">
          <span class="day" :class="{ active: day.day === 22 }">
            {{ day.day }}
          </span>
          <span class="label" :class="{ active: day.day === 22 }">
            {{ day.label }}
          </span>
        </div>
      </div>

      <!-- Events -->
      <div class="content">
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

        <div class="horizontal-line"></div>
        <!-- Leads -->
        <div>
          <div class="leads-header">
            <span class="leads-title">Leads</span>
            <a href="#" class="leads-link">View All</a>
          </div>
          <div class="leads-cards">
            <div class="lead-card dark">
              <div class="num">{{ leads.mine }}</div>
              <div class="lbl">Mine</div>
            </div>
            <div class="lead-card light">
              <div class="num">{{ leads.verified }}</div>
              <div class="lbl">Verified</div>
            </div>
            <div class="lead-card light">
              <div class="num">{{ leads.unverified }}</div>
              <div class="lbl">Unverified</div>
            </div>
          </div>

          <!-- Lead Detail -->
          <div class="text-xs text-gray-600 mb-2">
            <p>
              <span class="lead-name">Lead:</span>
              <a href="#" class="text-blue-600 underline lead-name-link">{{
                leadDetail.name
              }}</a>
            </p>
            <div>
              <span class="guidedtour">Guided Tour:</span>
              <span class="guidedtour-name">{{ leadDetail.guidedTour }}</span>
            </div>
          </div>

          <!-- Result -->
          <div class="mb-3">
            <label class="block text-sm text-gray-600 mb-1">Result</label>
            <v-select
              :items="['Completed - Interested', 'Completed - Not Interested']"
              variant="outlined"
              density="compact"
              class="custom-select"
              hide-details
            />
          </div>

          <!-- Unit Shown & Preferred -->
          <div style="display: flex; gap: 3">
            <div>
              <label class="block text-sm text-gray-600 mb-1">Unit Shown</label>
              <v-select
                v-model="leadDetail.unitShown"
                variant="outlined"
                density="compact"
                class="small-input"
                hide-details
              />
            </div>

            <div>
              <label class="block text-sm text-gray-600 mb-1">Preferred</label>
              <v-select
                v-model="leadDetail.preferred"
                variant="outlined"
                density="compact"
                class="small-input"
                hide-details
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">Notes</label>
            <v-textarea
              label="Notes"
              v-model="leadDetail.notes"
              rows="4"
              density="compact"
            />
          </div>

          <v-btn block class="mt-3" color="gray">Update</v-btn>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>
