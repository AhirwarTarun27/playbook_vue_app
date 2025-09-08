<template>
  <v-navigation-drawer
    v-model="drawerOpen"
    location="right"
    width="450"
    temporary
    class="todos-drawer"
    :class="{ 'dark-theme': isDarkTheme }"
  >
    <div class="drawer-container">
      <!-- Header -->
      <div class="drawer-header">
        <div class="header-left">
          <h3 class="drawer-title">Today's To-Dos</h3>
        </div>
        <div class="header-right">
          <v-btn
            icon
            size="small"
            variant="text"
            @click="toggleDatePicker"
            class="header-icon-btn"
          >
            <SvgIcon name="calender" :color="isDarkTheme ? '#374151' : '#6b7280'" size="sm" />
          </v-btn>
          <v-btn
            icon
            size="small"
            variant="text"
            @click="handleClose"
            class="header-icon-btn"
          >
            <SvgIcon name="close" :color="isDarkTheme ? '#374151' : '#6b7280'" size="sm" />
          </v-btn>
        </div>
      </div>

      <div class="drawer-content">
        <p class="date-subtitle">{{ getSelectedDateInfo() }}, 2025</p>

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
            <span class="date-day">{{ option.day }}</span>
            <!-- Notification Badge -->
            <div
              v-if="option.date === 24 || option.date === 28"
              class="notification-badge"
            ></div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Upcoming Section -->
          <div class="section-header">
            <h4 class="section-title">Upcoming</h4>
            <v-btn
              variant="text"
              size="small"
              @click="handleAddTask"
              class="add-task-btn"
            >
              <SvgIcon name="plus" size="sm" color="#B5EF00" />
              Add Task
            </v-btn>
          </div>

          <!-- Time Slots -->
          <div class="time-slots">
            <div
              v-for="(timeSlot, index) in timeSlots"
              :key="timeSlot"
              class="time-slot-container"
            >
              <div class="time-slot">
                <!-- Time Label -->
                <div class="time-label">{{ timeSlot }}</div>
                
                <!-- Task Content -->
                <div class="task-content">
                  <div v-if="getTaskForTime(timeSlot)" class="task-wrapper">
                    <div class="task-row">
                      <v-checkbox
                        :model-value="getTaskForTime(timeSlot).completed"
                        @update:model-value="handleUpcomingTaskToggle(getTaskForTime(timeSlot).id, selectedDate)"
                        density="compact"
                        hide-details
                        class="task-checkbox"
                      ></v-checkbox>
                      <div 
                        class="task-item"
                        :class="`task-${getTaskForTime(timeSlot).color}`"
                        :style="{ opacity: getTaskForTime(timeSlot).completed ? 0.7 : 1 }"
                      >
                        <span 
                          class="task-title"
                          :style="{ textDecoration: getTaskForTime(timeSlot).completed ? 'line-through' : 'none' }"
                        >
                          {{ getTaskForTime(timeSlot).title }}
                        </span>
                        <div class="task-right">
                          <div
                            v-if="timeSlot === '10 am' || timeSlot === '11 am'"
                            class="task-badge"
                          >
                            A
                          </div>
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
                    <div class="task-partition"></div>
                  </div>
                </div>
              </div>
              
              <!-- Clean Partition Line -->
              <div v-if="index < timeSlots.length - 1" class="time-partition"></div>
            </div>
            
            <!-- No Task Left Indicator -->
            <div class="no-task-indicator">
              <span class="no-task-text">No Task Left</span>
            </div>
          </div>

          <!-- Completed Section -->
          <h4 class="section-title completed-title">Completed</h4>
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
          <h4 class="section-title notes-title">Notes</h4>
          <v-textarea
            v-model="notes"
            rows="3"
            no-resize
            variant="outlined"
            class="notes-textarea"
            hide-details
          ></v-textarea>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <v-btn
          variant="text"
          @click="handleCancel"
          class="cancel-btn"
        >
          Cancel
        </v-btn>
        <v-btn
          variant="flat"
          @click="handleUpdate"
          class="update-btn"
        >
          Update
        </v-btn>
      </div>
    </div>

    <!-- Date Picker Overlay -->
    <div v-if="showDatePicker" class="date-picker-overlay" @click="closeDatePicker">
      <div class="date-picker" @click.stop>
        <!-- Date Picker Header -->
        <div class="date-picker-header">
          <v-btn
            icon
            size="small"
            variant="text"
            @click="handleMonthChange('prev')"
            class="month-nav-btn"
          >
            <SvgIcon name="chevron-left" :color="isDarkTheme ? '#374151' : '#1a1a1a'" size="sm" />
          </v-btn>
          
          <h4 class="month-year">
            {{ getMonthYearString() }}
          </h4>
          
          <v-btn
            icon
            size="small"
            variant="text"
            @click="handleMonthChange('next')"
            class="month-nav-btn"
          >
            <SvgIcon name="chevron-right" :color="isDarkTheme ? '#374151' : '#1a1a1a'" size="sm" />
          </v-btn>
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
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// const props = defineProps({
//   isDarkTheme: {
//     type: Boolean,
//     default: false
//   }
// })

const drawerOpen = defineModel({ type: Boolean, default: false })

const selectedDate = ref(22)
const notes = ref('')
const showDatePicker = ref(false)
const currentMonth = ref(new Date(2025, 3)) // April 2025

const dateOptions = [
  { date: 21, day: 'Mon' },
  { date: 22, day: 'Tues' },
  { date: 23, day: 'Wed' },
  { date: 24, day: 'Thurs' },
  { date: 25, day: 'Fri' },
  { date: 26, day: 'Sat' },
  { date: 27, day: 'Sun' },
]

const timeSlots = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm']

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

// Sample upcoming tasks data
const upcomingTasksData = ref({
  21: [
    {
      id: '21-1',
      title: 'Call: Sarah Johnson',
      time: '9 am',
      color: 'orange',
      type: 'call',
      completed: false
    },
    {
      id: '21-2',
      title: 'Tour: Mike Wilson',
      time: '2 pm',
      color: 'blue',
      type: 'tour',
      completed: false
    }
  ],
  22: [
    {
      id: '22-1',
      title: 'Call: Abigail Lester',
      time: '10 am',
      color: 'orange',
      type: 'call',
      completed: false
    },
    {
      id: '22-2', 
      title: 'Tour: Julie Smith',
      time: '11 am',
      color: 'blue',
      type: 'tour',
      completed: false
    },
    {
      id: '22-3',
      title: 'Maintenance #1232',
      time: '12 pm',
      endTime: '12:15 pm',
      color: 'yellow',
      type: 'maintenance',
      completed: false
    },
    {
      id: '22-4',
      title: 'Maintenance #2543',
      time: '2 pm',
      endTime: '2:15 pm', 
      color: 'yellow',
      type: 'maintenance',
      completed: false
    }
  ],
  23: [
    {
      id: '23-1',
      title: 'Call: Robert Brown',
      time: '1 pm',
      color: 'orange',
      type: 'call',
      completed: false
    },
    {
      id: '23-2',
      title: 'Inspection #789',
      time: '3 pm',
      endTime: '3:30 pm',
      color: 'yellow',
      type: 'maintenance',
      completed: false
    }
  ],
  24: [
    {
      id: '24-1',
      title: 'Tour: Jennifer Davis',
      time: '10 am',
      color: 'blue',
      type: 'tour',
      completed: false
    },
    {
      id: '24-2',
      title: 'Call: Mark Taylor',
      time: '4 pm',
      color: 'orange',
      type: 'call',
      completed: false
    }
  ]
})

// Sample completed tasks
const completedTasks = ref([
  {
    id: 'c1',
    title: 'Call: Karen Smith',
    completed: true
  },
  {
    id: 'c2', 
    title: 'Email: John Smith',
    completed: true
  },
  {
    id: 'c3',
    title: 'Email: Regina Gardner', 
    completed: true
  }
])

const getTasksForDate = (date) => {
  return upcomingTasksData.value[date] || []
}

const getTaskForTime = (timeSlot) => {
  const currentTasks = getTasksForDate(selectedDate.value)
  return currentTasks.find(t => t.time === timeSlot)
}

const getSelectedDateInfo = () => {
  const selectedOption = dateOptions.find(option => option.date === selectedDate.value)
  return selectedOption ? `${selectedOption.day}, April ${selectedOption.date}` : 'April 22nd, 2025'
}

const getMonthYearString = () => {
  return currentMonth.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const handleDateSelect = (date) => {
  selectedDate.value = date
  showDatePicker.value = false
}

const toggleDatePicker = () => {
  showDatePicker.value = !showDatePicker.value
}

const closeDatePicker = () => {
  showDatePicker.value = false
}

const handleMonthChange = (direction) => {
  const newMonth = new Date(currentMonth.value)
  if (direction === 'prev') {
    newMonth.setMonth(currentMonth.value.getMonth() - 1)
  } else {
    newMonth.setMonth(currentMonth.value.getMonth() + 1)
  }
  currentMonth.value = newMonth
}

const generateCalendarDays = () => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = firstDay.getDay() // 0 = Sunday
  const daysInMonth = lastDay.getDate()
  
  const days = []
  
  // Add empty cells for days before month starts
  for (let i = 0; i < startDate; i++) {
    days.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }
  
  return days
}

const handleCompletedToggle = (id) => {
  const task = completedTasks.value.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
  }
}

const handleUpcomingTaskToggle = (taskId, date) => {
  const tasks = upcomingTasksData.value[date]
  if (tasks) {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }
}

const handleAddTask = () => {
  console.log('Add task clicked')
}

const handleUpdate = () => {
  console.log('Update clicked')
}

const handleCancel = () => {
  console.log('Cancel clicked')
  drawerOpen.value = false
}

const handleClose = () => {
  drawerOpen.value = false
}
</script>

<style scoped>
@import '../assets/right-drawer.css';
</style>