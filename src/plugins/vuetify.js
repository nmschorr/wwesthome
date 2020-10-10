// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/es5/util/colors'

// import {
//   VCol,
//   VRow,
// } from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#313131',
        secondary: '#050b1f',
        accent: '#1d2929de',
        myteal2: '#00BFA5',
        myteal: '#009688',
        mytext: '#000000',
      },
      dark: {
        primary: '#313131',
        secondary: '#050b1f',
        accent: '#1d2929de',
        myteal2: '#00BFA5',
        myteal: '#009688',
        mytext: '#ffffff',
      },
    },
  },
})
 // #1a56a4 from nerve blue
  // accent: #204165 - very dark blue green, no material color
  // secondary: '#050b1f':  almost black no material color
  // primary  #42a5f6 - blue lighten-1 - orig
  // secondary: colors.deepPurple.accent1, // md: #b388ff  //was tw light purple b794f4
  // tertiary: colors.teal.base,  //md teal  009688
  // success: colors.teal.accent4,  // md teal accent-4 00BFA5
  // accent: colors.orange.lighten2,  //md orange lighten-2  FFB74D
  // info: colors.grey.lighten2,  // md deep-purple accent-3  651fff
  // error: colors.red.lighten1,   //md deep-purple darken-2 455A64
  // warning: colors.orange.lighten2,  //md blue-grey darken-2  455A64
  // darkgrey: colors.grey.darken3, // 212121
  // old primary - medium blue:  #42a5f6
