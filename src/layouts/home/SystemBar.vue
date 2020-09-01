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
      href="https://wallet.nuls.io/dist/img/logo.ef0bcec3.svg"
      target="_blank"
    >
      <v-img
        alt="Nuls Logo"
        class="mr-2"
        contain
        src="@/assets/addins/NULS_Black.png"
        width="32"
      />

      <v-img
        alt="Nuls Name"
        class="hidden-xs-only"
        contain
        width="96"
        src="@/assets/addins/NULS_Black.png"
      />
    </a>

    <v-spacer />

    <v-btn
      class="text-capitalize subtitle-2 mr-6"
      color="success"
      href="https://wallet.nerve.network/"
      min-width="112"
    >
      Nerve Wallet
    </v-btn>

    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold"
      color="white"
      light
      href="https://wallet.nuls.io/"
      min-width="112"
    >
      NULS Wallet
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
