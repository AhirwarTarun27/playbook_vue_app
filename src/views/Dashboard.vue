<script setup>
import { ref } from 'vue'
import RightDrawer from '@/components/RightDrawer.vue'

defineOptions({ name: 'DashboardView' })

const drawerOpen = ref(false)
const searchQuery = ref('')
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
  <div class="h-screen flex overflow-hidden bg-[#363636]">
    <!-- Sidebar -->
    <aside class="w-16 bg-[#363636] flex flex-col items-center py-6">
      <!-- Logo -->
      <div class="w-10 h-10 bg-[#6FCF4F] rounded-lg flex items-center justify-center mb-8">
        <v-icon color="white" size="24">mdi-home</v-icon>
      </div>
      
      <!-- Icons -->
      <div class="flex flex-col items-center space-y-6 ">
        <v-icon color="white" size="24" class="cursor-pointer">mdi-view-dashboard</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-account-group-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-domain</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-account-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-file-document-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-lock-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-wrench-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-cog-outline</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-chart-line</v-icon>
      </div>
      
      <!-- Bottom icons -->
      <div class="flex-grow"></div>
      <div class="flex flex-col items-center space-y-6 mb-6">
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-cog</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-help-circle-outline</v-icon>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navigation Bar -->
      <div class="bg-[#363636] h-16 px-6 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center flex-1">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search Properties, Leads, etc..."
              class="bg-[#41434B] text-gray-300 px-4 py-2 rounded-lg w-96 text-sm outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#6FCF4F] transition-all"
            />
            <v-icon color="#9CA3AF" size="20" class="absolute right-3 top-1/2 -translate-y-1/2">mdi-magnify</v-icon>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <!-- FIXED: Only round + button -->
          <v-btn 
            icon
            class="!bg-[#6FCF4F] !rounded-full !w-9 !h-9 hover:!bg-[#5CB946]"
          >
            <v-icon color="white" size="22">mdi-plus</v-icon>
          </v-btn>

          <v-icon color="white" size="24" class="cursor-pointer hover:text-[#6FCF4F] transition-colors">mdi-bell-outline</v-icon>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <div class="text-white text-sm font-medium">Naomi R.</div>
              <div class="text-gray-400 text-xs">Property Mgr</div>
            </div>
            <v-avatar size="32" class="border-2 border-gray-600">
              <div class="w-full h-full bg-gray-400 rounded-full"></div>
            </v-avatar>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 bg-[#363636] overflow-auto p-6">
        <!-- Outer wrapper to add spacing all around -->
        <div class="bg-[#F7F8FC] rounded-2xl shadow-sm p-6">
          <!-- White Container -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <!-- Header Section -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <h1 class="text-2xl font-bold text-gray-900">Playbooks</h1>
                <v-icon size="18" color="#6B7280" class="cursor-pointer hover:text-gray-800 transition-colors">mdi-pencil</v-icon>
              </div>
              <div class="flex items-center gap-3">
                <div class="relative">
                  <select class="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none cursor-pointer hover:border-gray-400 focus:border-[#6FCF4F] focus:ring-2 focus:ring-[#6FCF4F] focus:ring-opacity-20 transition-all pr-10 appearance-none">
                    <option>XYZ Properties</option>
                  </select>
                  <v-icon size="18" color="#6B7280" class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">mdi-chevron-down</v-icon>
                </div>
                <v-icon size="22" color="#6B7280" class="cursor-pointer hover:text-gray-800 transition-colors">mdi-filter-variant</v-icon>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="px-6 py-5 border-b border-gray-200">
              <div class="flex gap-4">
                <!-- Default Card (Selected) -->
                <div class="bg-[#3A3D47] text-white rounded-xl p-5 min-w-[160px] cursor-pointer shadow-lg">
                  <div class="flex justify-between items-start mb-4">
                    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <v-icon color="white" size="20">mdi-account-circle</v-icon>
                    </div>
                  </div>
                  <div class="text-xs text-gray-400 mb-2 font-medium">Default</div>
                  <div class="text-3xl font-bold">140</div>
                </div>

                <!-- Hard Hat Card -->
                <div class="bg-white border-2 border-gray-200 rounded-xl p-5 min-w-[160px] cursor-pointer hover:shadow-md hover:border-gray-300 transition-all">
                  <div class="flex justify-between items-start mb-4">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <v-icon color="#8B5CF6" size="20">mdi-hard-hat</v-icon>
                    </div>
                  </div>
                  <div class="text-xs text-gray-600 mb-2 font-medium">Hard Hat</div>
                  <div class="text-3xl font-bold text-gray-900">16</div>
                </div>

                <!-- Affordable Card -->
                <div class="bg-white border-2 border-gray-200 rounded-xl p-5 min-w-[160px] cursor-pointer hover:shadow-md hover:border-gray-300 transition-all">
                  <div class="flex justify-between items-start mb-4">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-xl">$</span>
                    </div>
                  </div>
                  <div class="text-xs text-gray-600 mb-2 font-medium">Affordable</div>
                  <div class="text-3xl font-bold text-gray-900">34</div>
                </div>

                <!-- Multi-Family Card -->
                <div class="bg-white border-2 border-gray-200 rounded-xl p-5 min-w-[160px] cursor-pointer hover:shadow-md hover:border-gray-300 transition-all">
                  <div class="flex justify-between items-start mb-4">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <v-icon color="#8B5CF6" size="20">mdi-account-group</v-icon>
                    </div>
                  </div>
                  <div class="text-xs text-gray-600 mb-2 font-medium">Multi-Family</div>
                  <div class="text-3xl font-bold text-gray-900">120</div>
                </div>

                <!-- Add New Card -->
                <div class="border-2 border-dashed border-gray-300 rounded-xl min-w-[120px] flex items-center justify-center cursor-pointer hover:border-[#6FCF4F] hover:bg-green-50 transition-all">
                  <v-btn 
                    icon 
                    size="large"
                    class="!bg-[#6FCF4F] !w-12 !h-12 !shadow-lg hover:!bg-[#5CB946]"
                    @click="drawerOpen = true"
                  >
                    <v-icon color="white" size="24">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>

            <!-- Filter Buttons and Search -->
            <div class="px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div class="flex items-center gap-3">
                <button 
                  class="px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  :class="selectedFilters.inquiries ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('inquiries')"
                >
                  Inquiries
                </button>
                <button 
                  class="px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  :class="selectedFilters.preTour ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('preTour')"
                >
                  Pre-Tour
                </button>
                <button 
                  class="px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  :class="selectedFilters.interested ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('interested')"
                >
                  Interested
                </button>
                <button 
                  class="px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  :class="selectedFilters.noShows ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('noShows')"
                >
                  No Shows
                </button>
                <button 
                  class="px-4 py-2 rounded-lg border text-sm font-medium transition-all"
                  :class="selectedFilters.notInterested ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'"
                  @click="toggleFilter('notInterested')"
                >
                  Not Interested
                </button>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="relative">
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    placeholder="Search Prospect"
                    class="bg-white px-4 py-2 pr-10 rounded-lg border border-gray-300 text-sm outline-none focus:border-[#6FCF4F] focus:ring-2 focus:ring-[#6FCF4F] focus:ring-opacity-20 w-56 transition-all"
                  />
                  <v-icon size="18" color="#6B7280" class="absolute right-3 top-1/2 -translate-y-1/2">mdi-magnify</v-icon>
                </div>
                <button class="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-all">
                  <v-icon size="16">mdi-filter-variant</v-icon>
                  Filter
                </button>
                <button 
                  class="px-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-600 hover:bg-gray-200 font-medium transition-all"
                  @click="clearFilters"
                >
                  Clear
                </button>
                <button class="px-6 py-2 rounded-lg bg-gray-900 text-sm text-white hover:bg-gray-800 font-medium transition-all">
                  Search
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="px-6">
              <table class="w-full">
                <thead>
                  <tr class="text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                    <th class="py-4 pr-4 w-12">
                      <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#6FCF4F] focus:ring-[#6FCF4F] accent-[#6FCF4F]" />
                    </th>
                    <th class="py-4 pr-6">Name</th>
                    <th class="py-4 pr-6">Property</th>
                    <th class="py-4 pr-6">Status</th>
                    <th class="py-4 pr-6">Play / Trigger</th>
                    <th class="py-4 pr-6">Date of Inquiry</th>
                    <th class="py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="item in items" 
                    :key="item.id"
                    class="border-b border-gray-100 hover:bg-gray-50 text-sm transition-colors"
                  >
                    <td class="py-4 pr-4">
                      <input 
                        type="checkbox" 
                        v-model="item.selected"
                        class="w-4 h-4 rounded border-gray-300 text-[#6FCF4F] focus:ring-[#6FCF4F] accent-[#6FCF4F]" 
                      />
                    </td>
                    <td class="py-4 pr-6 text-gray-900 font-medium">{{ item.name }}</td>
                    <td class="py-4 pr-6 text-gray-700">{{ item.property }}</td>
                    <td class="py-4 pr-6 text-gray-700">{{ item.status }}</td>
                    <td class="py-4 pr-6 text-gray-700">{{ item.play }}</td>
                    <td class="py-4 pr-6 text-gray-700">{{ item.date }}</td>
                    <td class="py-4 text-center">
                      <v-icon size="20" color="#6B7280" class="cursor-pointer hover:text-gray-900 transition-colors">mdi-dots-vertical</v-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 flex items-center justify-end text-sm text-gray-600 border-t border-gray-100 mt-2">
              <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                  <span>Rows per page:</span>
                  <span class="font-medium">9</span>
                  <v-icon size="16" class="text-gray-400">mdi-menu-down</v-icon>
                </div>
                <span class="font-medium">1-4 of 36</span>
                <div class="flex items-center gap-2">
                  <v-icon size="20" color="#6B7280" class="cursor-pointer hover:text-gray-900 transition-colors">mdi-chevron-left</v-icon>
                  <v-icon size="20" color="#6B7280" class="cursor-pointer hover:text-gray-900 transition-colors">mdi-chevron-right</v-icon>
                </div>
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

/* Remove select dropdown arrow for custom styling */
select {
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Focus states */
input:focus, select:focus, button:focus {
  outline: none;
}

/* Hover transitions */
.transition-colors {
  transition: color 0.2s ease-in-out;
}

.transition-all {
  transition: all 0.2s ease-in-out;
}
</style>