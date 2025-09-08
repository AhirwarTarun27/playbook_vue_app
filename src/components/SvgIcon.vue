<template>
  <svg :class="iconClass" :style="iconStyle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <component :is="iconName" />
  </svg>
</template>

<script>
// Import all your SVG icons
import HomeIcon from "@/assets/icons/sideNavBar/HomeIcon.vue";
import DashboardIcon from "@/assets/icons/sideNavBar/DashboardIcon.vue";
import UsersIcon from "@/assets/icons/sideNavBar/UsersIcon.vue";
import BuildingIcon from "@/assets/icons/sideNavBar/BuildingIcon.vue";
import UserIcon from "@/assets/icons/sideNavBar/UserIcon.vue";
import FileIcon from "@/assets/icons/sideNavBar/FileIcon.vue";
import LockIcon from "@/assets/icons/sideNavBar/LockIcon.vue";
import WrenchIcon from "@/assets/icons/sideNavBar/WrenchIcon.vue";
// import ChartIcon from '@/assets/icons/sideNavBar/ChartIcon.vue'
import MsgIcon from "@/assets/icons/sideNavBar/MsgIcon.vue";
import PhoneIcon from "@/assets/icons/sideNavBar/PhoneIcon.vue";
import CalenderIcon from "@/assets/icons/sideNavBar/CalenderIcon.vue";
import ThreeVerticleLine from "@/assets/icons/sideNavBar/ThreeVerticleLine.vue";
import Clipbord from "@/assets/icons/sideNavBar/ClipbordIcon.vue";
import UpGraph from "@/assets/icons/sideNavBar/UpGraph.vue";
import SettingsIcon from "@/assets/icons/sideNavBar/SettingsIcon.vue";
import InfoIcon from "@/assets/icons/sideNavBar/InfoIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import BellIcon from "@/assets/icons/BellIcon.vue";
import SunIcon from "@/assets/icons/SunIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import PencilIcon from "@/assets/icons/PencilIcon.vue";
import BookIcon from "@/assets/icons/BookIcon.vue";
import FormalIcon from "@/assets/icons/FormalIcon.vue";
import SortFilter from '@/assets/icons/tableFilters/SortFilter.vue'
import VFilter from '@/assets/icons/tableFilters/VFilter.vue'
// import EditIcon from '@/assets/icons/EditIcon.vue'
// import FilterIcon from '@/assets/icons/FilterIcon.vue'
// import ChevronDownIcon from '@/assets/icons/ChevronDownIcon.vue'
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon.vue";
import DotsVerticalIcon from "@/assets/icons/tableFilters/DotsVerticalIcon.vue";
import UpDownArrow from "@/assets/icons/tableFilters/UpDownArrow.vue";
import SimplePlus from "@/assets/icons/tableFilters/SimplePlus.vue";
import BottomArrow from "@/assets/icons/tableFilters/BottomArrow.vue";
import LeftArrow from "@/assets/icons/tableFilters/LeftArrow.vue";
import RightArrow from "@/assets/icons/tableFilters/RightArrow.vue";
import HardHat from "@/assets/icons/HardHat.vue";
import DollarIcon from "@/assets/icons/DollarIcon.vue";
import PeopleIcon from "@/assets/icons/tableFilters/PeopleIcon.vue";
import DrawerOpenIcon from "@/assets/icons/DrawerOpenIcon.vue";
// import HelpIcon from '@/assets/icons/HelpIcon.vue'

export default {
  name: "SvgIcon",
  components: {
    HomeIcon,
    DashboardIcon,
    UsersIcon,
    BuildingIcon,
    UserIcon,
    FileIcon,
    LockIcon,
    WrenchIcon,
    // ChartIcon,
    MsgIcon,
    PhoneIcon,
    CalenderIcon,
    ThreeVerticleLine,
    Clipbord,
    UpGraph,
    SortFilter,
    VFilter,
    SettingsIcon,
    InfoIcon,
    SearchIcon,
    PlusIcon,
    BellIcon,
    SunIcon,
    MoonIcon,
    PencilIcon,
    BookIcon,
    FormalIcon,
    UpDownArrow,
    SimplePlus,
    BottomArrow,
    LeftArrow,
    RightArrow,
    HardHat,
    DollarIcon,
    PeopleIcon,
    DrawerOpenIcon,


    // EditIcon,
    // FilterIcon,
    // ChevronDownIcon,
    DotsVerticalIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    // HelpIcon
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => [
        'home', 'dashboard', 'users', 'building', 'user', 'file',
        'lock', 'msg', 'wrench', 'settings', 'chart', 'search', 'plus', 'phone', 'calender', 'clipbord', 'sort', 'simpleplus',
        'drawer-open',
        'hard-hat', 'dollar','people',
        'bottomarrow', 'leftarrow', 'rightarrow',
        'updownarrow',
        'v-filter', 'three-verticle-line', 'upgraph', 'info', 'pencil',
        'formal',
        'book',
        'bell', 'sun', 'moon', 'edit', 'filter', 'chevron-down',
        'dots-vertical', 'chevron-left', 'chevron-right', 'help'
      ].includes(value)
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    iconClass() {
      return [
        "svg-icon",
        {
          "svg-icon-sm": this.size === "sm",
          "svg-icon-lg": this.size === "lg",
        },
      ];
    },
    iconStyle() {
      return {
        color: this.color,
      };
    },
    iconName() {
      const iconMap = {
        'home': 'HomeIcon',
        'dashboard': 'DashboardIcon',
        'users': 'UsersIcon',
        'building': 'BuildingIcon',
        'user': 'UserIcon',
        'file': 'FileIcon',
        'lock': 'LockIcon',
        'wrench': 'WrenchIcon',
        'msg': 'MsgIcon',
        'settings': 'SettingsIcon',
        'chart': 'ChartIcon',
        'search': 'SearchIcon',
        'phone': 'PhoneIcon',
        'calender': 'CalenderIcon',
        'three-verticle-line': 'ThreeVerticleLine',
        'clipbord': 'Clipbord',
        'upgraph': 'UpGraph',
        'updownarrow': 'UpDownArrow',
        'simpleplus': 'SimplePlus',
        'bottomarrow': 'BottomArrow',
        'leftarrow': 'LeftArrow',
        'rightarrow': 'RightArrow',
        'hard-hat': 'HardHat',
        'dollar': 'DollarIcon',
        'people': 'PeopleIcon',
        'drawer-open': 'DrawerOpenIcon',
        'sort': 'SortFilter',
        'v-filter': 'VFilter',
        'info': 'InfoIcon',
        'plus': 'PlusIcon',
        'bell': 'BellIcon',
        'sun': 'SunIcon',
        'moon': 'MoonIcon',
        'pencil': 'PencilIcon',
        'book': 'BookIcon',
        'formal': 'FormalIcon',
        'edit': 'EditIcon',
        'filter': 'FilterIcon',
        'chevron-down': 'ChevronDownIcon',
        'dots-vertical': 'DotsVerticalIcon',
        'chevron-left': 'ChevronLeftIcon',
        'chevron-right': 'ChevronRightIcon',
        'help': 'HelpIcon'
      }
      return iconMap[this.name] || 'HomeIcon'
    }
  }
}
</script>
