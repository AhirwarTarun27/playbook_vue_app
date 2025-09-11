<template>
  <v-navigation-drawer
    v-model="drawerOpen"
    location="right"
    width="450"
    temporary
    class="todos-drawer"
    style="
      border-bottom-right-radius: 30px;
      border-top-right-radius: 30px;
      opacity: none;
    "
    :class="{ 'dark-theme': isDarkTheme }"
  >
    <!-- Floating Close Button (inside drawer container, but visually outside) -->
    <transition name="drawer-toggle">
      <div
        v-if="drawerOpen"
        class="drawer-toggle-btn"
        @click="drawerOpen = false"
      >
        <SvgIcon
          name="todo-trigger-close"
          :color="isDarkTheme ? '#374151' : '#6b7280'"
          size="lg"
        />
      </div>
    </transition>
    <div class="drawer-container">
      <!-- Header -->
      <div class="drawer-header">
        <div>
          <h2 class="panel-title">Today's To-Dos</h2>
          <p class="panel-subtitle">
            {{
              new Intl.DateTimeFormat("en", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(date)
            }}
          </p>
        </div>
        <div class="header-right">
          <v-btn icon size="small" variant="text" class="header-icon-btn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="12"
              viewBox="0 0 17 12"
            >
              <circle
                cx="1"
                cy="1"
                r="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
              <circle
                cx="1"
                cy="6"
                r="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
              <circle
                cx="1"
                cy="11"
                r="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
              <rect
                x="5"
                width="12"
                height="2"
                rx="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
              <rect
                x="5"
                y="5"
                width="12"
                height="2"
                rx="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
              <rect
                x="5"
                y="10"
                width="12"
                height="2"
                rx="1"
                :fill="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
              />
            </svg>
          </v-btn>

          <v-btn
            icon
            size="small"
            variant="text"
            @click="toggleDatePicker"
            class="header-icon-btn"
          >
            <!-- <SvgIcon
              name="calender"
              :color="isDarkTheme ? '#374151' : '#6b7280'"
              size="sm"
            /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M9.88675 14.344C9.56242 14.344 9.28517 14.2177 9.055 13.965C8.82483 13.7124 8.70975 13.408 8.70975 13.052C8.70975 12.6961 8.82483 12.3913 9.055 12.1376C9.28517 11.884 9.56242 11.7572 9.88675 11.7572C10.2109 11.7572 10.4872 11.8835 10.7155 12.1362C10.9437 12.3889 11.0578 12.6932 11.0578 13.0492C11.0578 13.4051 10.9437 13.7099 10.7155 13.9637C10.4872 14.2172 10.2109 14.344 9.88675 14.344ZM5.885 14.344C5.562 14.344 5.28533 14.2177 5.055 13.965C4.82483 13.7124 4.70975 13.408 4.70975 13.052C4.70975 12.6961 4.82442 12.3913 5.05375 12.1376C5.28308 11.884 5.55933 11.7572 5.8825 11.7572C6.2055 11.7572 6.48217 11.8835 6.7125 12.1362C6.94267 12.3889 7.05775 12.6932 7.05775 13.0492C7.05775 13.4051 6.94308 13.7099 6.71375 13.9637C6.48442 14.2172 6.20817 14.344 5.885 14.344ZM13.8808 14.344C13.5621 14.344 13.2873 14.2177 13.0563 13.965C12.8253 13.7124 12.7098 13.408 12.7098 13.052C12.7098 12.6961 12.8253 12.3913 13.0563 12.1376C13.2873 11.884 13.5631 11.7572 13.8838 11.7572C14.2044 11.7572 14.4803 11.8835 14.7113 12.1362C14.9423 12.3889 15.0578 12.6932 15.0578 13.0492C15.0578 13.4051 14.9427 13.7099 14.7125 13.9637C14.4823 14.2172 14.2051 14.344 13.8808 14.344ZM9.88675 18.7509C9.56242 18.7509 9.28517 18.6236 9.055 18.3691C8.82483 18.1146 8.70975 17.8108 8.70975 17.4575C8.70975 17.1042 8.82483 16.8003 9.055 16.5458C9.28517 16.2913 9.56242 16.1641 9.88675 16.1641C10.2109 16.1641 10.4872 16.2909 10.7155 16.5444C10.9437 16.798 11.0578 17.1035 11.0578 17.4608C11.0578 17.8119 10.9437 18.1146 10.7155 18.3691C10.4872 18.6236 10.2109 18.7509 9.88675 18.7509ZM5.885 18.7509C5.562 18.7509 5.28533 18.6236 5.055 18.3691C4.82483 18.1146 4.70975 17.8108 4.70975 17.4575C4.70975 17.1042 4.82442 16.8003 5.05375 16.5458C5.28308 16.2913 5.55933 16.1641 5.8825 16.1641C6.2055 16.1641 6.48217 16.2909 6.7125 16.5444C6.94267 16.798 7.05775 17.1035 7.05775 17.4608C7.05775 17.8119 6.94308 18.1146 6.71375 18.3691C6.48442 18.6236 6.20817 18.7509 5.885 18.7509ZM13.8808 18.7509C13.5621 18.7509 13.2873 18.6236 13.0563 18.3691C12.8253 18.1146 12.7098 17.8108 12.7098 17.4575C12.7098 17.1042 12.8253 16.8003 13.0563 16.5458C13.2873 16.2913 13.5631 16.1641 13.8838 16.1641C14.2044 16.1641 14.4803 16.2909 14.7113 16.5444C14.9423 16.798 15.0578 17.1035 15.0578 17.4608C15.0578 17.8119 14.9427 18.1146 14.7125 18.3691C14.4823 18.6236 14.2051 18.7509 13.8808 18.7509ZM2.8295 23.8978C2.04733 23.8978 1.38017 23.5922 0.828 22.9809C0.276 22.3696 0 21.6362 0 20.7805V5.23038C0 4.36866 0.276 3.63363 0.828 3.02531C1.38017 2.41716 2.04733 2.11309 2.8295 2.11309H3.07125V0H5.763V2.11309H14.0045V0H16.6963V2.11309H16.938C17.7202 2.11309 18.3873 2.41716 18.9395 3.02531C19.4915 3.63363 19.7675 4.36866 19.7675 5.23038V20.7805C19.7675 21.6362 19.4915 22.3696 18.9395 22.9809C18.3873 23.5922 17.7202 23.8978 16.938 23.8978H2.8295ZM2.8295 20.7805H16.938V9.27367H2.8295V20.7805Z"
                :fill="isDarkTheme ? '#d1d5db' : '#30313F'"
              />
            </svg>
          </v-btn>
          <!-- <v-btn
            icon
            size="small"
            variant="text"
            @click="handleClose"
            class="header-icon-btn"
          >
            <SvgIcon
              name="close"
              :color="isDarkTheme ? '#374151' : '#6b7280'"
              size="sm"
            />
          </v-btn> -->
        </div>
      </div>

      <div class="drawer-content">
        <!-- Date Selector -->
        <div class="date-selector">
          <div
            v-for="option in dateOptions"
            :key="option.date"
            class="date-option"
            :class="{ active: option.date === selectedDate }"
            @click="handleDateSelect(option.date)"
          >
            <div class="date-circle">
              <span class="date-number">{{ option.date }}</span>
            </div>
            <span
              class="date-day"
              :style="{ fontWeight: option.day === 'Tues' ? 800 : 200 }"
              >{{ option.day }}</span
            >
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Upcoming Section -->
          <div class="upcoming-header">
            <div
              style="
                display: flex;
                justify-content: start;
                align-items: center;
                margin-bottom: 8px;
              "
            >
              <h3 class="panel-title">Upcoming</h3>
              <div
                style="
                  margin-left: 4px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <SvgIcon name="chevron-down" :color="'black'" size="md" />
              </div>
            </div>
            <v-btn
              variant="text"
              size="small"
              @click="handleAddTask"
              class="add-task-btn"
            >
              <span class="mr-1" style="font-weight: 700">+</span>
              Add Task
            </v-btn>
          </div>

          <!-- Time Slots -->
          <div class="time-slots">
            <div
              v-for="timeSlot in timeSlots"
              :key="timeSlot"
              class="time-slot-container"
            >
              <!-- Time Label -->
              <div
                style="
                  display: flex;
                  width: 100%;
                  /* margin-top: 0.8px; */
                  align-items: center;
                  justify-content: center;
                "
              >
                <div class="time-label">{{ timeSlot }}</div>
                <div class="time-partition"></div>
              </div>

              <!-- Task Content -->
              <div class="task-content">
                <div v-if="getTaskForTime(timeSlot)" class="task-wrapper">
                  <div class="task-row">
                    <div
                      class="task-item"
                      :class="`task-${getTaskForTime(timeSlot).color}`"
                      :style="{
                        opacity: getTaskForTime(timeSlot).completed ? 0.7 : 1,
                      }"
                    >
                      <!-- checkbox with task -->
                      <div
                        style="
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        "
                      >
                        <v-checkbox
                          :model-value="getTaskForTime(timeSlot).completed"
                          @update:model-value="
                            handleUpcomingTaskToggle(
                              getTaskForTime(timeSlot).id,
                              selectedDate
                            )
                          "
                          density="compact"
                          hide-details
                          color="primary"
                          class="task-checkbox"
                        ></v-checkbox>
                        <span
                          class="task-title"
                          :style="{
                            textDecoration: getTaskForTime(timeSlot).completed
                              ? 'line-through'
                              : 'none',
                          }"
                        >
                          {{ getTaskForTime(timeSlot).title }}
                        </span>
                      </div>

                      <div class="task-right">
                        <span
                          v-if="getTaskForTime(timeSlot).endTime"
                          class="end-time"
                        >
                          {{ getTaskForTime(timeSlot).endTime }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- Partition line under each event -->
                </div>
              </div>

              <!-- Clean Partition Line -->
              <!-- <div
                v-if="index < timeSlots.length - 1"
                class="time-partition"
              ></div> -->
            </div>

            <!-- No Task Left Indicator -->
            <div class="no-task-indicator">
              <span class="no-task-text">No Task Left</span>
            </div>
          </div>

          <!-- Completed Section -->
          <div
            style="
              display: flex;
              justify-content: start;
              align-items: center;
              margin-bottom: 8px;
            "
          >
            <h3 class="panel-title">Completed</h3>
            <div
              style="
                margin-left: 4px;

                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <SvgIcon
                name="chevron-down"
                :color="isDarkTheme ? '#d1d5db' : '#1a1a1a'"
                size="md"
              />
            </div>
          </div>
          <div class="completed-tasks">
            <div
              v-for="task in completedTasks"
              :key="task.id"
              class="completed-task"
            >
              <v-checkbox
                :model-value="task.completed"
                @update:model-value="handleCompletedToggle(task.id)"
                density="compact"
                hide-details
                class="completed-checkbox"
              ></v-checkbox>
              <span class="completed-task-title">{{ task.title }}</span>
            </div>
          </div>

          <!-- Notes Section -->
          <h4 class="notes-title">Notes</h4>
          <div class="notes-box">
            <v-textarea
              v-model="notes"
              rows="3"
              no-resize
              hide-details
              variant="outlined"
              style="
                width: 100%;
                margin-bottom: 12px;
                border-radius: 8px;
                background-color: #f7f7f7;
                font-size: 13px;
                line-height: 20px;
                /* height: 72px; 
              border: '2px solid #d1d5db', */
                padding: 8px 12px;
              "
            ></v-textarea>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <v-btn variant="text" @click="handleCancel" class="cancel-btn">
          <span class="cancel-btn-text">Cancel</span>
        </v-btn>
        <v-btn variant="flat" @click="handleUpdate" class="update-btn">
          <span class="btn-text">Update</span>
        </v-btn>
      </div>
    </div>

    <!-- Date Picker Overlay -->
    <div
      v-if="showDatePicker"
      class="date-picker-overlay"
      @click="closeDatePicker"
    >
      <div class="date-picker" @click.stop>
        <!-- Date Picker Header -->
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 31px;
            margin-top: 7px;
            padding: 0 12px;
          "
        >
          <div class="arrow-icon-container" @click="handleMonthChange('prev')">
            <SvgIcon
              name="chevron-left"
              :color="isDarkTheme ? '#ffffff' : '#1a1a1a'"
              size="md"
              class="arrow-icon"
            />
          </div>

          <h4 class="month-year" style="margin-top: 1px">
            {{ getMonthYearString() }}
          </h4>

          <div class="arrow-icon-container" @click="handleMonthChange('next')">
            <SvgIcon name="chevron-right" size="md" class="arrow-icon" />
          </div>
        </div>

        <!-- Days of Week Header -->
        <div class="days-header">
          <div v-for="day in daysOfWeek" :key="day" class="day-header">
            {{ day }}
          </div>
        </div>

        <!-- Calendar Grid -->
        <div class="calendar-grid">
          <div
            v-for="(day, index) in generateCalendarDays()"
            :key="index"
            class="calendar-day"
            :class="{ active: day === selectedDate }"
            @click="day && handleDateSelect(day)"
          >
            <span v-if="day">{{ day }}</span>
          </div>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

defineProps({
  isDarkTheme: {
    type: Boolean,
    default: false,
  },
});

const drawerOpen = defineModel({ type: Boolean, default: false });

const selectedDate = ref(22);
const notes = ref("");
const showDatePicker = ref(false);
const currentMonth = ref(new Date(2025, 3)); // April 2025

const dateOptions = [
  { date: 21, day: "Mon" },
  { date: 22, day: "Tues" },
  { date: 23, day: "Wed" },
  { date: 24, day: "Thurs" },
  { date: 25, day: "Fri" },
  { date: 26, day: "Sat" },
  { date: 27, day: "Sun" },
];

const timeSlots = [
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
];

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Sample upcoming tasks data
const upcomingTasksData = ref({
  21: [
    {
      id: "21-1",
      title: "Call: Sarah Johnson",
      time: "9 am",
      color: "orange",
      type: "call",
      completed: false,
    },
    {
      id: "21-2",
      title: "Tour: Mike Wilson",
      time: "2 pm",
      color: "blue",
      type: "tour",
      completed: false,
    },
  ],
  22: [
    {
      id: "22-1",
      title: "Call: Abigail Lester",
      endTime: "12:15 pm",
      time: "10 am",
      color: "orange",
      type: "call",
      completed: false,
    },
    {
      id: "22-2",
      title: "Tour: Julie Smith",
      time: "11 am",
      color: "blue",
      type: "tour",
      completed: false,
      endTime: "12:15 pm",
    },
    {
      id: "22-3",
      title: "Maintenance #1232",
      time: "12 pm",
      endTime: "12:15 pm",
      color: "yellow",
      type: "maintenance",
      completed: false,
    },
  ],
  23: [
    {
      id: "23-1",
      title: "Call: Robert Brown",
      time: "1 pm",
      color: "orange",
      type: "call",
      completed: false,
    },
    {
      id: "23-2",
      title: "Inspection #789",
      time: "3 pm",
      endTime: "3:30 pm",
      color: "yellow",
      type: "maintenance",
      completed: false,
    },
  ],
  24: [
    {
      id: "24-1",
      title: "Tour: Jennifer Davis",
      time: "10 am",
      color: "blue",
      type: "tour",
      completed: false,
    },
    {
      id: "24-2",
      title: "Call: Mark Taylor",
      time: "4 pm",
      color: "orange",
      type: "call",
      completed: false,
    },
  ],
});

// Sample completed tasks
const completedTasks = ref([
  {
    id: "c1",
    title: "Call: Karen Smith",
    completed: true,
  },
  {
    id: "c2",
    title: "Email: John Smith",
    completed: true,
  },
  {
    id: "c3",
    title: "Email: Regina Gardner",
    completed: true,
  },
]);

const getTasksForDate = (date) => {
  return upcomingTasksData.value[date] || [];
};

const getTaskForTime = (timeSlot) => {
  const currentTasks = getTasksForDate(selectedDate.value);
  return currentTasks.find((t) => t.time === timeSlot);
};

// const getSelectedDateInfo = () => {
//   const selectedOption = dateOptions.find(
//     (option) => option.date === selectedDate.value
//   );
//   return selectedOption
//     ? `${selectedOption.day}, April ${selectedOption.date}`
//     : "April 22nd, 2025";
// };

const getMonthYearString = () => {
  return currentMonth.value.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const handleDateSelect = (date) => {
  selectedDate.value = date;
  showDatePicker.value = false;
};

const toggleDatePicker = () => {
  showDatePicker.value = !showDatePicker.value;
};

const closeDatePicker = () => {
  showDatePicker.value = false;
};

const handleMonthChange = (direction) => {
  const newMonth = new Date(currentMonth.value);
  if (direction === "prev") {
    newMonth.setMonth(currentMonth.value.getMonth() - 1);
  } else {
    newMonth.setMonth(currentMonth.value.getMonth() + 1);
  }
  currentMonth.value = newMonth;
};

const generateCalendarDays = () => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = firstDay.getDay(); // 0 = Sunday
  const daysInMonth = lastDay.getDate();

  const days = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < startDate; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
};

const handleCompletedToggle = (id) => {
  const task = completedTasks.value.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};

const handleUpcomingTaskToggle = (taskId, date) => {
  const tasks = upcomingTasksData.value[date];
  if (tasks) {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
};

const handleAddTask = () => {
  console.log("Add task clicked");
};

const handleUpdate = () => {
  console.log("Update clicked");
};

const handleCancel = () => {
  console.log("Cancel clicked");
  drawerOpen.value = false;
};

// const handleClose = () => {
//   drawerOpen.value = false;
// };
</script>

<style scoped>
@import "../assets/right-drawer.css";
</style>
