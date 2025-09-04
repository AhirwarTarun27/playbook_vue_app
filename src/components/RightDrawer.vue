<script setup>
import { ref } from 'vue'
import CalendarPopover from '@/components/CalendarPopover.vue'

const open = defineModel({ type: Boolean, default: false })
const selectedDate = ref('')
</script>

<template>
  <v-navigation-drawer v-model="open" location="right" width="420" temporary>
    <div class="h-full flex flex-col bg-white">
      <div class="flex items-center justify-between px-5 py-4 border-b">
        <div>
          <div class="text-sm text-gray-500">Today's To-Dos</div>
          <div class="text-xs text-gray-400">April 22nd, 2025</div>
        </div>
        <div class="flex items-center gap-2">
          <CalendarPopover v-model="selectedDate" />
        </div>
      </div>

      <div class="flex-1 overflow-y-auto px-5 py-4 space-y-6">
        <section>
          <div class="text-gray-600 text-sm font-medium mb-2">Upcoming</div>
          <div class="space-y-3">
            <div class="rounded-xl border bg-orange-100 px-4 py-3 flex items-center gap-3">
              <v-checkbox hide-details density="compact"></v-checkbox>
              <div class="text-sm text-gray-800 flex-1">Call: Abigail Lester</div>
              <div class="text-xs text-gray-600">10 am</div>
            </div>
            <div class="rounded-xl border bg-blue-100 px-4 py-3 flex items-center gap-3">
              <v-checkbox hide-details density="compact"></v-checkbox>
              <div class="text-sm text-gray-800 flex-1">Tour: Julie Smith</div>
              <div class="text-xs text-gray-600">11 am</div>
            </div>
            <div class="rounded-xl border bg-yellow-100 px-4 py-3 flex items-center gap-3">
              <v-checkbox hide-details density="compact"></v-checkbox>
              <div class="text-sm text-gray-800 flex-1">Maintenance #1232</div>
              <div class="text-xs text-gray-600">12:15 pm</div>
            </div>
            <div class="rounded-xl border bg-yellow-100 px-4 py-3 flex items-center gap-3">
              <v-checkbox hide-details density="compact"></v-checkbox>
              <div class="text-sm text-gray-800 flex-1">Maintenance #2543</div>
              <div class="text-xs text-gray-600">2:15 pm</div>
            </div>
          </div>
        </section>

        <section>
          <div class="text-gray-600 text-sm font-medium mb-2">Completed</div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex items-center gap-2"><v-icon size="18">mdi-check-circle</v-icon> Call: Karen Smith</li>
            <li class="flex items-center gap-2"><v-icon size="18">mdi-check-circle</v-icon> Email: John Smith</li>
            <li class="flex items-center gap-2"><v-icon size="18">mdi-check-circle</v-icon> Email: Regina Gardner</li>
          </ul>
        </section>

        <section>
          <div class="text-gray-600 text-sm font-medium mb-2">Notes</div>
          <v-textarea variant="outlined" rows="6" placeholder=""></v-textarea>
        </section>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style scoped></style>
