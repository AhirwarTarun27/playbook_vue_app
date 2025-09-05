<script setup>
import { ref, computed } from "vue";
import DrawerHeader from "./rightDrawer/DrawerHeader.vue";
import WeekDateRow from "./rightDrawer/WeekDateRow.vue";
import EventsList from "./rightDrawer/EventsList.vue";
import LeadsPanel from "./rightDrawer/LeadsPanel.vue";
import CalendarPanel from "./rightDrawer/CalendarPanel.vue";

const open = defineModel({ type: Boolean, default: false });
const selectedDate = ref(new Date("2025-04-22"));
const showCalendar = ref(false);

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
  { time: "12:00", label: "", color: "" },
  { time: "13:00", label: "Maintenance: #1232", color: "bg-orange-200" },
  { time: "14:00", label: "Maintenance: #1232", color: "bg-orange-200" },
];

const leads = ref({
  mine: 4,
  verified: 8,
  unverified: 12,
});

const leadDetail = ref({
  name: "Bob Dylan",
  guidedTour: "Thursday, 4.10.25 @ 10:00 am",
  result: "Completed - Interested",
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

function handleLeadDetailUpdate(next) {
  leadDetail.value = next;
}
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
      <div v-if="showCalendar">
        <CalendarPanel
          :date="selectedDate"
          :week-days="weekDays"
          @update:date="value => (selectedDate = value)"
          @back="showCalendar = false"
        />
      </div>
      <template v-else>
        <DrawerHeader
          title="Today's To-Do’s"
          :subtitle="displayDate"
          :show-calendar-action="true"
          @calendar="showCalendar = true"
        />
        <WeekDateRow :days="weekDays" :active-day="22" />
        <div class="content">
          <EventsList :events="events" />
          <div class="horizontal-line"></div>
          <LeadsPanel
            :stats="leads"
            :detail="leadDetail"
            @update:detail="handleLeadDetailUpdate"
            @submit="() => {}"
          />
        </div>
      </template>
    </div>
  </v-navigation-drawer>
</template>
