// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#42a5f6',
        secondary: '#050b1f',
        accent: '#204165',
        myteal2: '#00BFA5',
        myteal: '#009688',
      },
      dark: {},
    },
  },
})

  // secondary: colors.deepPurple.accent1, // md: #b388ff  //was tw light purple b794f4
  // tertiary: colors.teal.base,  //md teal  009688
  // success: colors.teal.accent4,  // md teal accent-4 00BFA5
  // accent: colors.orange.lighten2,  //md orange lighten-2  FFB74D
  // info: colors.grey.lighten2,  // md deep-purple accent-3  651fff
  // error: colors.red.lighten1,   //md deep-purple darken-2 455A64
  // warning: colors.orange.lighten2,  //md blue-grey darken-2  455A64
  // darkgrey: colors.grey.darken3, // 212121
