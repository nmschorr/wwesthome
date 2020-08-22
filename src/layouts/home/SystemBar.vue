<template>
  <v-system-bar
    v-if="model"
    app
    color="#262626"
    class="px-4"
    dark
    height="58"
  >
    <a
      class="d-flex align-center"
      href="https://vuetifyjs.com/?ref=vtyd-pro-demo-system-bar"
      target="_blank"
    >
      <v-img
        alt="Vuetify Logo"
        class="mr-2"
        contain
        :src="require(`@/assets/NULS_White.png`)"
        width="32"
      />

      <v-img
        alt="Vuetify Name"
        class="hidden-xs-only"
        contain
        width="96"
        :src="require(`@/assets/NULS_White.png`)"
      />
    </a>

    <v-spacer />

    <v-btn
      class="text-capitalize subtitle-2 mr-6"
      color="success"
      href="https://store.vuetifyjs.com/product/zero-theme-free?ref=vtyd-system-bar"
      min-width="112"
    >
      Go Nuls
    </v-btn>

    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold"
      color="white"
      light
      min-width="112"
    >
      <v-img
        alt="Vuetify Name"
        class="hidden-xs-only"
        contain
        width="96"
        :src="require(`@/assets/NULS_White.png`)"
      />
      Go Nuls
    </v-btn>
    <v-divider
      class="ml-6 mr-3"
      vertical
    />
    <v-btn
      class="text-capitalize grey--text mr-n2 mr-sm-n1"
      small
      text
      @click="model = false"
    >
      <v-icon
        color="white"
        :left="$vuetify.breakpoint.smAndUp"
      >
        mdi-close
      </v-icon>

      <span class="hidden-xs-only">
        Remove Frame
      </span>
    </v-btn>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'HomeSystemBar',

    data: () => ({
      model: true,
    }),
  }
</script>
