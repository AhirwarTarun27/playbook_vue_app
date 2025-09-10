<script setup>
import { ref, onMounted } from "vue";
import RightDrawer from "@/components/RightDrawer.vue";
import SvgIcon from "@/components/SvgIcon.vue"; // Import your SVG component

defineOptions({ name: "DashboardView" });

const drawerOpen = ref(false)
const isDarkTheme = ref(false)

const selectedFilters = ref({
  inquiries: false,
  preTour: false,
  interested: false,
  noShows: false,
  notInterested: false,
});

const items = ref([
  {
    id: 1,
    name: "Sara Martinez",
    property: "Willow & Pine",
    status: "Inquiry",
    play: "Day 1: SMS",
    date: "July 10, 2025",
    selected: false,
  },
  {
    id: 2,
    name: "Marcus Bennett",
    property: "The Landing at Brookstone",
    status: "Inquiry",
    play: "Day 1: Email",
    date: "July 9, 2025",
    selected: true,
  },
  {
    id: 3,
    name: "Jamie Chen",
    property: "Echo Ridge Apartments",
    status: "Showing Set",
    play: "Day 1: Follow Up Call",
    date: "July 10, 2025",
    selected: false,
  },
  {
    id: 4,
    name: "Lila Thompson",
    property: "The Elms on Parkview",
    status: "Inquiry",
    play: "Day 1: SMS",
    date: "July 11, 2025",
    selected: false,
  },
  {
    id: 5,
    name: "Omar Castillo",
    property: "Atlas Grove",
    status: "Inquiry",
    play: "Day 1: SMS",
    date: "July 8, 2025",
    selected: false,
  },
  {
    id: 6,
    name: "Vanessa Patel",
    property: "Stonebridge Flats",
    status: "Inquiry",
    play: "Day 1: Email",
    date: "July 10, 2025",
    selected: false,
  },
  {
    id: 7,
    name: "Ethan Walker",
    property: "Vera Vista",
    status: "Inquiry",
    play: "Day 1: Email",
    date: "July 10, 2025",
    selected: false,
  },
  {
    id: 8,
    name: "Brianna Green",
    property: "Crescent Row",
    status: "Inquiry",
    play: "Day 1: Follow Up Call",
    date: "July 10, 2025",
    selected: false,
  },
]);

// Theme switching
// const toggleTheme = () => {
//   isDarkTheme.value = !isDarkTheme.value;
//   document.documentElement.setAttribute(
//     "data-theme",
//     isDarkTheme.value ? "dark" : "light"
//   );
// };

// Initialize theme
onMounted(() => {
  document.documentElement.setAttribute("data-theme", "light");
   document.documentElement.style.overflowY = 'auto';
});

const toggleFilter = (filter) => {
  selectedFilters.value[filter] = !selectedFilters.value[filter];
};

const clearFilters = () => {
  Object.keys(selectedFilters.value).forEach((key) => {
    selectedFilters.value[key] = false;
  });
};
</script>

<template>
  <div class="app-layout dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Logo -->
      <div class="logo">
        <SvgIcon
          name="home"
          style="
            width: 36.245px;
            height: 37.593px;
            flex-shrink: 0;
            aspect-ratio: 30.24/37.59;
          "
          color="white"
        />
      </div>

      <!-- Navigation Icons -->
      <div class="icon-list">
        <div class="sidebar-icon">
          <SvgIcon
            name="dashboard"
            :color="isDarkTheme ? '#374151' : 'white'"
          />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="users" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="building" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="borderline"></div>
        <div class="sidebar-icon">
          <SvgIcon name="user" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon" style="margin-left: 0.4rem">
          <SvgIcon name="file" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="lock" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="wrench" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="msg" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="phone" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="calender" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon
            name="three-verticle-line"
            :color="isDarkTheme ? '#374151' : 'white'"
          />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="clipbord" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="upgraph" :color="isDarkTheme ? '#374151' : 'white'" />
        </div>
        <div class="borderline"></div>
      </div>
      <!-- Bottom icons -->
      <div class="sidebar-bottom">
        <div class="sidebar-icon">
          <SvgIcon
            name="settings"
            :color="isDarkTheme ? '#374151' : '#9CA3AF'"
          />
        </div>
        <div class="sidebar-icon">
          <SvgIcon name="info" :color="isDarkTheme ? '#374151' : '#9CA3AF'" />
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="main">
      <!-- Top Navigation Bar -->
      <div class="topbar">
        <div class="topbar-left">
          <div class="search-wrap">
            <div class="search-icon">
              <SvgIcon name="search" size="sm" />
            </div>
            <input
              type="text"
              placeholder="Search "
              class="search-input"
            />
          </div>
        </div>
        <div class="topbar-right">
          <!-- Add Button -->
          <div class="topbar-actions">
            <div
              class="action-add-btn"
              style="margin-bottom: .4rem;     margin-bottom: 0.1rem;"
            >
              <v-btn icon >
                <SvgIcon name="plus"  />
              </v-btn>
            </div>

            <!-- Notifications -->
            

            <!-- Theme Toggle -->
            <!-- <div class="theme-toggle" @click="toggleTheme">
              <SvgIcon
                :name="isDarkTheme ? 'moon' : 'sun'"
                :color="isDarkTheme ? 'black' : 'white'"
                size="sm"
              />
            </div> -->
          </div>

          <!-- User Avatar Section -->
          <div class="avatar-section">
            <div class="cursor-pointer" style="padding: 6px; padding: 2px 6px; border-radius: 8px;">
              <SvgIcon name="bell" :color="isDarkTheme ? '#374151' : 'white'" />
            </div>
            <div class="user-info">
              Naomi R.
              <div class="avatar-ring">
              <img src="../assets/icons/portrait06.png" alt="" />
            </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="content">
        <!-- Outer wrapper -->
        <div class="outer-wrapper">
          <!-- Header Section -->
          <div class="section-header">
            <div class="title">
              <h1>Playbooks</h1>
              <div class="cursor-pointer">
                <SvgIcon name="pencil" size="md" style="margin-top: 0.5rem" />
              </div>
            </div>
            <div class="header-actions">
              <div class="org-select">
                <select class="cursor-pointer">
                  <option>XYZ Properties</option>
                </select>
                <div class="select-icon">
                  <SvgIcon name="updownarrow" size="sm" />
                </div>
              </div>
              <div @click="drawerOpen = true" class="cursor-pointer drawer-open">
                <SvgIcon name="drawer-open"/>
              </div>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="stats">
            <div class="stat-cards">
              <!-- Default Card (Selected) -->
              <div class="card card-selected">
                <div class="icon-circle">
                  <SvgIcon
                    name="book"
                    color="white"
                    style="width: 17px; height: 21px"
                  />
                </div>
                <div class="card-info">
                  <div class="label">140</div>
                  <div class="value">Default</div>
                </div>
              </div>

              <!-- Hard Hat Card -->
              <div class="card">
                <div class="icon-circle">
                  <SvgIcon  style="width: 17px; height: 21px" />
                </div>
                <div class="card-info">
                  <div class="label">16</div>
                  <div class="value">Hard Hat</div>
                </div>
              </div>

              <!-- Affordable Card -->
              <div class="card">
                <div class="icon-circle">
                  <SvgIcon name="dollar" style="width: 17px; height: 21px" />
                </div>
                <div class="card-info">
                  <div class="label">34</div>
                  <div class="value">Affordable</div>
                </div>
              </div>

              <!-- Multi-Family Card -->
              <div class="card">
                <div class="icon-circle">
                  <SvgIcon name="people" style="width: 17px; height: 21px" />
                </div>
                <div class="card-info">
                  <div class="label">120</div>
                  <div class="value">Multi-Family</div>
                </div>
              </div>

              <div class="verticalBorder"></div>
              <!-- Add New Card -->
              <div class="add-card" >
                <div class="action-add-btn">
                  <v-btn icon size="small">
                    <SvgIcon name="plus" size="sm" color="white" />
                  </v-btn>
                </div>
              </div>
            </div>
          </div>

          <!-- Filter Buttons and Search -->
          <div class="filters">
            <div class="filters-left">
              <button
                class="btn btn-active"
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

              <button
                class="btn"
                style="padding: 0;"
              >
               <SvgIcon name="simpleplus" size="md"/>
              </button>
            </div>

            <div class="filters-right">
              <!-- <div class="search-small">
                <input 
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search Prospect"
                />
                <div class="search-icon">
                  <SvgIcon size="sm" />
                </div>
              </div>
              <button class="btn">
                <SvgIcon size="sm" />
                Filter
              </button> -->
              <button 
                class="btn btn-plain"
                style="padding: 6px; gap: 0px;"
              >
                <SvgIcon name="search" style="height: 15px; width: 15px;"  />

                <SvgIcon name="v-filter" style="height: 15px; width: 15px;" />
              </button>
              <button 
                class="btn btn-plain"
                @click="clearFilters"
              >
                <SvgIcon name="sort" style="width: 15px; height: 15px;"/>
              </button>

              
              
            </div>
          </div>

          <!-- Table -->
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;"/> Name</div></th>
                  <th><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;" />Property</div></th>
                  <th><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;" />Status</div></th>
                  <th><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;" />Play / Trigger</div></th>
                  <th><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;" />Date of Inquiry</div></th>
                  <th class="text-center"><div class="table-head"><SvgIcon name="updownarrow" style="margin-bottom: -5px; margin-right: -4px;" />Actions</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>
                    <input type="checkbox" v-model="item.selected" />
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.property }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.play }}</td>
                  <td>{{ item.date }}</td>
                  <td class="text-center">
                    <div class="cursor-pointer">
                      <SvgIcon name="dots-vertical"  />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <div class="group">
              <div class="pagination-control">
                <span>Rows per page:</span>
                <span style="font-weight: 500">9</span>
                <div class="cursor-pointer">
                  <SvgIcon name="bottomarrow" style="width: 10px; height: 10px;" />
                </div>
              </div>
              <span style="font-weight: 500">1-4 of 36</span>
              <div class="pagination-control">
                <div class="cursor-pointer">
                  <SvgIcon name="leftarrow"  style="width: 10px; height: 10px;"/>
                </div>
                <div class="cursor-pointer">
                  <SvgIcon name="rightarrow" style="width: 10px; height: 10px;" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RightDrawer v-model="drawerOpen" :isDarkTheme="isDarkTheme" />
  </div>
</template>

<style scoped>
/* Import the dashboard styles */
@import "@/assets/dashboard.css";
</style>
