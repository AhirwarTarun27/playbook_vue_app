import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FAFAFB',
          surface: '#FFFFFF',
          primary: '#4CAF50',
          secondary: '#3F51B5',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#F44336',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#6FCF4F',
          secondary: '#90CAF9',
          info: '#64B5F6',
          success: '#81C784',
          warning: '#FFD54F',
          error: '#E57373',
        },
      },
      forest: {
        dark: false,
        colors: {
          background: '#EFF6F0',
          surface: '#FFFFFF',
          primary: '#2E7D32',
          secondary: '#558B2F',
          info: '#2E7D32',
          success: '#388E3C',
          warning: '#F9A825',
          error: '#C62828',
        },
      },
    },
  },
})
