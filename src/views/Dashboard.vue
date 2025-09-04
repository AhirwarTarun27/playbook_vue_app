<script setup>
import { ref } from 'vue'
import RightDrawer from '@/components/RightDrawer.vue'

defineOptions({ name: 'DashboardView' })

const drawerOpen = ref(false)
// const selectedItems = ref([])
const searchQuery = ref('')
// const selectedProperty = ref('XYZ Properties')
const selectedFilters = ref({
  inquiries: false,
  preTour: false,
  interested: false,
  noShows: false,
  notInterested: false
})

const items = ref([
  { 
    id: 1,
    name: 'Sara Martinez', 
    property: 'Willow & Pine', 
    status: 'Inquiry', 
    play: 'Day 1: SMS', 
    date: 'July 10, 2025',
    selected: false
  },
  { 
    id: 2,
    name: 'Marcus Bennett', 
    property: 'The Landing at Brookstone', 
    status: 'Inquiry', 
    play: 'Day 1: Email', 
    date: 'July 9, 2025',
    selected: true
  },
  { 
    id: 3,
    name: 'Jamie Chen', 
    property: 'Echo Ridge Apartments', 
    status: 'Showing Set', 
    play: 'Day 1: Follow Up Call', 
    date: 'July 10, 2025',
    selected: false
  },
  { 
    id: 4,
    name: 'Lila Thompson', 
    property: 'The Elms on Parkview', 
    status: 'Inquiry', 
    play: 'Day 1: SMS', 
    date: 'July 11, 2025',
    selected: false
  },
  { 
    id: 5,
    name: 'Omar Castillo', 
    property: 'Atlas Grove', 
    status: 'Inquiry', 
    play: 'Day 1: SMS', 
    date: 'July 8, 2025',
    selected: false
  },
  { 
    id: 6,
    name: 'Vanessa Patel', 
    property: 'Stonebridge Flats', 
    status: 'Inquiry', 
    play: 'Day 1: Email', 
    date: 'July 10, 2025',
    selected: false
  },
  { 
    id: 7,
    name: 'Ethan Walker', 
    property: 'Vera Vista', 
    status: 'Inquiry', 
    play: 'Day 1: Email', 
    date: 'July 10, 2025',
    selected: false
  },
  { 
    id: 8,
    name: 'Brianna Green', 
    property: 'Crescent Row', 
    status: 'Inquiry', 
    play: 'Day 1: Follow Up Call', 
    date: 'July 10, 2025',
    selected: false
  }
])

const toggleFilter = (filter) => {
  selectedFilters.value[filter] = !selectedFilters.value[filter]
}

const clearFilters = () => {
  Object.keys(selectedFilters.value).forEach(key => {
    selectedFilters.value[key] = false
  })
}
</script>

<template>
  <div class="h-screen flex overflow-hidden bg-[#53565F]">
    <!-- Sidebar -->
    <aside class="w-14 bg-[#2D2F39] flex flex-col items-center py-3">
      <!-- Logo -->
      <div class="w-9 h-9 bg-[#6FCF4F] rounded-lg flex items-center justify-center mb-6">
        <v-icon color="white" size="20">mdi-home</v-icon>
      </div>
      
      <!-- Icons -->
      <div class="flex flex-col items-center space-y-5">
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-view-dashboard-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-account-group-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-domain</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-account-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-file-document-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-lock-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-wrench-outline</v-icon>
        <v-icon color="white" size="22" class="cursor-pointer">mdi-cog</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-chart-line</v-icon>
      </div>
      
      <!-- Bottom icons -->
      <div class="flex-grow"></div>
      <div class="flex flex-col items-center space-y-5 mb-3">
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-cog-outline</v-icon>
        <v-icon color="#808080" size="22" class="hover:text-white cursor-pointer">mdi-help-circle-outline</v-icon>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navigation Bar -->
      <div class="bg-[#53565F] h-14 px-5 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center flex-1">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search Properties, Leads, etc..."
              class="bg-[#41434B] text-gray-300 px-3 py-1.5 rounded w-80 text-sm outline-none placeholder-gray-500"
            />
            <v-icon color="#808080" size="18" class="absolute right-2 top-1/2 -translate-y-1/2">mdi-magnify</v-icon>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <v-btn 
            size="small"
            class="!bg-[#6FCF4F] !text-white text-capitalize !h-8"
            prepend-icon="mdi-plus"
          >
            ADD
          </v-btn>
          <v-icon color="white" size="20">mdi-bell-outline</v-icon>
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">Naomi R.</span>
            <span class="text-gray-400 text-xs">Property Mgr</span>
            <v-avatar size="28">
              <div class="w-full h-full bg-gray-400 rounded-full"></div>
            </v-avatar>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 bg-[#F7F8FC] overflow-auto">
        <div class="p-5">
          <!-- White Container -->
          <div class="bg-white rounded-xl shadow-sm">
            <!-- Header Section -->
            <div class="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <h1 class="text-xl font-semibold text-gray-900">Playbooks</h1>
                <v-icon size="16" color="#808080" class="cursor-pointer">mdi-pencil</v-icon>
              </div>
              <div class="flex items-center gap-2">
                <select class="bg-white border border-gray-300 rounded px-3 py-1.5 text-sm outline-none cursor-pointer">
                  <option>XYZ Properties</option>
                </select>
                <v-icon size="20" color="#808080" class="cursor-pointer">mdi-chevron-down</v-icon>
                <v-icon size="20" color="#808080" class="cursor-pointer ml-2">mdi-filter-variant</v-icon>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="px-5 py-4 flex gap-3 border-b border-gray-200">
              <!-- Default Card (Selected) -->
              <div class="bg-[#3A3D47] text-white rounded-lg p-4 flex-1 min-w-[140px] cursor-pointer">
                <div class="flex justify-between items-start mb-3">
                  <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <v-icon color="white" size="18">mdi-account-circle</v-icon>
                  </div>
                </div>
                <div class="text-xs text-gray-400 mb-1">Default</div>
                <div class="text-2xl font-bold">140</div>
              </div>

              <!-- Hard Hat Card -->
              <div class="bg-white border border-gray-200 rounded-lg p-4 flex-1 min-w-[140px] cursor-pointer hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-3">
                  <div class="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                    <v-icon color="purple" size="18">mdi-hard-hat</v-icon>
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-1">Hard Hat</div>
                <div class="text-2xl font-bold text-gray-900">16</div>
              </div>

              <!-- Affordable Card -->
              <div class="bg-white border border-gray-200 rounded-lg p-4 flex-1 min-w-[140px] cursor-pointer hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-3">
                  <div class="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 font-bold text-lg">$</span>
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-1">Affordable</div>
                <div class="text-2xl font-bold text-gray-900">34</div>
              </div>

              <!-- Multi-Family Card -->
              <div class="bg-white border border-gray-200 rounded-lg p-4 flex-1 min-w-[140px] cursor-pointer hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-3">
                  <div class="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                    <v-icon color="purple" size="18">mdi-account-group</v-icon>
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-1">Multi-Family</div>
                <div class="text-2xl font-bold text-gray-900">120</div>
              </div>

              <!-- Add New Card -->
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 min-w-[80px] flex items-center justify-center cursor-pointer hover:border-gray-400">
                <v-btn 
                  icon 
                  size="small"
                  class="!bg-[#6FCF4F] !w-10 !h-10"
                  @click="drawerOpen = true"
                >
                  <v-icon color="white" size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>

            <!-- Filter Buttons and Search -->
            <div class="px-5 py-3 flex items-center justify-between border-b border-gray-200">
              <div class="flex items-center gap-2">
                <button 
                  class="px-3 py-1 rounded border text-xs"
                  :class="selectedFilters.inquiries ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('inquiries')"
                >
                  Inquiries
                </button>
                <button 
                  class="px-3 py-1 rounded border text-xs"
                  :class="selectedFilters.preTour ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('preTour')"
                >
                  Pre-Tour
                </button>
                <button 
                  class="px-3 py-1 rounded border text-xs"
                  :class="selectedFilters.interested ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('interested')"
                >
                  Interested
                </button>
                <button 
                  class="px-3 py-1 rounded border text-xs"
                  :class="selectedFilters.noShows ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('noShows')"
                >
                  No Shows
                </button>
                <button 
                  class="px-3 py-1 rounded border text-xs"
                  :class="selectedFilters.notInterested ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('notInterested')"
                >
                  Not Interested
                </button>
              </div>
              
              <div class="flex items-center gap-2">
                <div class="relative">
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    placeholder="Search Prospect"
                    class="bg-white px-3 py-1 pr-8 rounded border border-gray-300 text-xs outline-none focus:border-blue-400 w-48"
                  />
                  <v-icon size="16" color="#808080" class="absolute right-2 top-1/2 -translate-y-1/2">mdi-magnify</v-icon>
                </div>
                <button class="px-3 py-1 rounded border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 flex items-center gap-1">
                  <v-icon size="14">mdi-filter-variant</v-icon>
                  Filter
                </button>
                <button 
                  class="px-3 py-1 rounded bg-gray-100 text-xs text-gray-600 hover:bg-gray-200"
                  @click="clearFilters"
                >
                  Clear
                </button>
                <button class="px-4 py-1 rounded bg-gray-900 text-xs text-white hover:bg-gray-800">
                  Search
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="px-5">
              <table class="w-full">
                <thead>
                  <tr class="text-left text-xs font-medium text-gray-700 border-b border-gray-200">
                    <th class="py-3 pr-3 w-10">
                      <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500" />
                    </th>
                    <th class="py-3 pr-4 font-medium">Name</th>
                    <th class="py-3 pr-4 font-medium">Property</th>
                    <th class="py-3 pr-4 font-medium">Status</th>
                    <th class="py-3 pr-4 font-medium">Play / Trigger</th>
                    <th class="py-3 pr-4 font-medium">Date of Inquiry</th>
                    <th class="py-3 font-medium text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="item in items" 
                    :key="item.id"
                    class="border-b border-gray-100 hover:bg-gray-50 text-sm"
                  >
                    <td class="py-3 pr-3">
                      <input 
                        type="checkbox" 
                        v-model="item.selected"
                        class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500" 
                      />
                    </td>
                    <td class="py-3 pr-4 text-gray-900">{{ item.name }}</td>
                    <td class="py-3 pr-4 text-gray-700">{{ item.property }}</td>
                    <td class="py-3 pr-4 text-gray-700">{{ item.status }}</td>
                    <td class="py-3 pr-4 text-gray-700">{{ item.play }}</td>
                    <td class="py-3 pr-4 text-gray-700">{{ item.date }}</td>
                    <td class="py-3 text-center">
                      <v-icon size="18" color="#808080" class="cursor-pointer hover:text-gray-900">mdi-dots-vertical</v-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="px-5 py-3 flex items-center justify-end text-xs text-gray-600 border-t border-gray-100 mt-4">
              <span class="mr-4">Rows per page: 9</span>
              <v-icon size="14" class="mr-1">mdi-menu-down</v-icon>
              <span class="mx-4">1-4 of 36</span>
              <div class="flex items-center gap-1">
                <v-icon size="18" color="#808080" class="cursor-pointer hover:text-gray-900">mdi-chevron-left</v-icon>
                <v-icon size="18" color="#808080" class="cursor-pointer hover:text-gray-900">mdi-chevron-right</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RightDrawer v-model="drawerOpen" />
  </div>
</template>

<style scoped>
/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Custom checkbox styles */
input[type="checkbox"] {
  accent-color: #6FCF4F;
}

input[type="checkbox"]:checked {
  background-color: #6FCF4F;
  border-color: #6FCF4F;
}

/* Remove Vuetify button shadows */
:deep(.v-btn) {
  box-shadow: none !important;
  letter-spacing: normal !important;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Text utilities */
.text-capitalize {
  text-transform: none !important;
}

/* Table styles */
table {
  border-collapse: separate;
  border-spacing: 0;
}

/* Ensure proper height */
.h-screen {
  height: 100vh;
}

/* Fix overflow */
.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow: auto;
}
</style>