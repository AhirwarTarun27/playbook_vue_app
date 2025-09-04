<script setup>
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'
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

// Vuetify theme switching
const availableThemes = ['light', 'dark', 'forest']
const theme = useTheme()
const selectedTheme = ref(theme.global.name.value)

watch(selectedTheme, (name) => {
  theme.global.name.value = name
})

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
  <div class="app-layout dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Logo -->
      <div class="logo">
        <v-icon color="white" size="24">mdi-home</v-icon>
      </div>
      
      <!-- Icons -->
      <div class="icon-list">
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
      <div class="sidebar-bottom">
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-cog</v-icon>
        <v-icon color="#9CA3AF" size="24" class="hover:text-white cursor-pointer transition-colors">mdi-help-circle-outline</v-icon>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="main">
      <!-- Top Navigation Bar -->
      <div class="topbar">
        <div class="topbar-left">
          <div class="search-wrap">
            <input 
              type="text" 
              placeholder="Search Properties, Leads, etc..."
              class="search-input"
            />
            <v-icon color="#9CA3AF" size="20" class="search-icon">mdi-magnify</v-icon>
          </div>
        </div>
        <div class="topbar-right">
          <!-- FIXED: Only round + button -->
          <div class="action-add-btn">
            <v-btn icon>
              <v-icon color="white" size="22">mdi-plus</v-icon>
            </v-btn>
          </div>

          <v-icon color="white" size="24" class="cursor-pointer hover:text-[#6FCF4F] transition-colors">mdi-bell-outline</v-icon>
          <div class="flex items-center gap-3 avatar-ring">
            <div class="text-right">
              <div class="text-white text-sm font-medium">Naomi R.</div>
              <div class="text-gray-400 text-xs">Property Mgr</div>
            </div>
            <v-avatar size="32">
              <div class="w-full h-full bg-gray-400 rounded-full"></div>
            </v-avatar>
          </div>
          <v-select
            v-model="selectedTheme"
            :items="availableThemes"
            density="compact"
            hide-details
            label="Theme"
            style="max-width: 140px"
          />
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="content">
        <!-- Outer wrapper to add spacing all around -->
        <div class="outer-wrapper">
          <!-- White Container -->
          <div class="white-container">
            <!-- Header Section -->
            <div class="section-header">
              <div class="title">
                <h1>Playbooks</h1>
                <v-icon size="18" color="#6B7280" class="cursor-pointer hover:text-gray-800 transition-colors">mdi-pencil</v-icon>
              </div>
              <div class="header-actions">
                <div class="org-select">
                  <select class="cursor-pointer pr-10">
                    <option>XYZ Properties</option>
                  </select>
                  <v-icon size="18" color="#6B7280" class="search-icon pointer-events-none">mdi-chevron-down</v-icon>
                </div>
                <v-icon size="22" color="#6B7280" class="cursor-pointer hover:text-gray-800 transition-colors">mdi-filter-variant</v-icon>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="stats">
              <div class="stat-cards">
                <!-- Default Card (Selected) -->
                <div class="card card-selected">
                  <div class="flex justify-between items-start mb-4">
                    <div class="icon-circle">
                      <v-icon color="white" size="20">mdi-account-circle</v-icon>
                    </div>
                  </div>
                  <div class="label">Default</div>
                  <div class="value">140</div>
                </div>

                <!-- Hard Hat Card -->
                <div class="card">
                  <div class="flex justify-between items-start mb-4">
                    <div class="icon-circle" style="background:#E9D5FF;">
                      <v-icon color="#8B5CF6" size="20">mdi-hard-hat</v-icon>
                    </div>
                  </div>
                  <div class="label">Hard Hat</div>
                  <div class="value">16</div>
                </div>

                <!-- Affordable Card -->
                <div class="card">
                  <div class="flex justify-between items-start mb-4">
                    <div class="icon-circle" style="background:#DBEAFE;">
                      <span style="color:#2563EB;font-weight:700;font-size:20px;">$</span>
                    </div>
                  </div>
                  <div class="label">Affordable</div>
                  <div class="value">34</div>
                </div>

                <!-- Multi-Family Card -->
                <div class="card">
                  <div class="flex justify-between items-start mb-4">
                    <div class="icon-circle" style="background:#E9D5FF;">
                      <v-icon color="#8B5CF6" size="20">mdi-account-group</v-icon>
                    </div>
                  </div>
                  <div class="label">Multi-Family</div>
                  <div class="value">120</div>
                </div>

                <!-- Add New Card -->
                <div class="add-card" @click="drawerOpen = true">
                  <div class="action-add-btn">
                    <v-btn icon size="large">
                      <v-icon color="white" size="24">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>

            <!-- Filter Buttons and Search -->
            <div class="filters">
              <div class="filters-left">
                <button 
                  class="btn"
                  :class="selectedFilters.inquiries ? 'btn-active' : ''"
                  @click="toggleFilter('inquiries')"
                >
                  Inquiries
                </button>
                <button 
                  class="btn"
                  :class="selectedFilters.preTour ? 'btn-active' : ''"
                  @click="toggleFilter('preTour')"
                >
                  Pre-Tour
                </button>
                <button 
                  class="btn"
                  :class="selectedFilters.interested ? 'btn-active' : ''"
                  @click="toggleFilter('interested')"
                >
                  Interested
                </button>
                <button 
                  class="btn"
                  :class="selectedFilters.noShows ? 'btn-active' : ''"
                  @click="toggleFilter('noShows')"
                >
                  No Shows
                </button>
                <button 
                  class="btn"
                  :class="selectedFilters.notInterested ? 'btn-active' : ''"
                  @click="toggleFilter('notInterested')"
                >
                  Not Interested
                </button>
              </div>
              
              <div class="filters-right">
                <div class="search-small">
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    placeholder="Search Prospect"
                    class=""
                  />
                  <v-icon size="18" color="#6B7280" class="search-icon">mdi-magnify</v-icon>
                </div>
                <button class="btn">
                  <v-icon size="16">mdi-filter-variant</v-icon>
                  Filter
                </button>
                <button 
                  class="btn btn-plain"
                  @click="clearFilters"
                >
                  Clear
                </button>
                <button class="btn btn-dark">
                  Search
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width:48px;">
                      <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Property</th>
                    <th>Status</th>
                    <th>Play / Trigger</th>
                    <th>Date of Inquiry</th>
                    <th class="center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="item in items" 
                    :key="item.id"
                  >
                    <td>
                      <input 
                        type="checkbox" 
                        v-model="item.selected"
                      />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.property }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.play }}</td>
                    <td>{{ item.date }}</td>
                    <td class="center">
                      <v-icon size="20" color="#6B7280" class="cursor-pointer hover:text-gray-900 transition-colors">mdi-dots-vertical</v-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="pagination">
              <div class="group">
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

<!-- Styles moved to src/assets/dashboard.css -->