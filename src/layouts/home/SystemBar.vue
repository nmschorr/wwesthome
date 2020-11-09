<template>
  <v-system-bar
    v-if="model"
    app
    color="#262626"
    class="px-4"
    dark
    height="99"
  >
    <span
      style="width:200px"
    />
    <span
      class="text-capitalize subtitle-2 font-weight-bold white--text"
      style="font-family:'montserrat', sans-serif;"
    >
      Looking for your wallet?
    </span>
    <v-spacer />
    <v-btn
      id="myvbtn"
      class="text-capitalize subtitle-3 font-weight-bold white--text mr-6"
      color="blue-grey darken-1"
      large
      href="https://nervedex.com/trading/index target='_blank'"
      min-width="112"
    >
      <v-img
        myvbtn
        src="@/assets/nerve.png"
        width="45px"
        height="15"
        class="mr-1 my-1"
      />
      NerveDex
    </v-btn>
    <v-btn
      id="myvbtn"
      class="text-capitalize subtitle-2 font-weight-bold white--text mr-6"
      color="blue-grey darken-2"
      large
      href="https://wallet.nerve.network/"
      min-width="112"
    >
      <v-img
        myvbtn
        src="@/assets/nerve.png"
        width="95px"
        height="29px"
        class="mr-1 my-1"
      />
      Wallet
    </v-btn>
    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold white--text"
      color="grey darken-2"
      large
      href="https://wallet.nuls.io/"
      min-width="192"
    >
      <v-img
        myvbtn
        src="@/assets/NULS_White.png"
        width="50px"
        height="35px"
        class="mr-4 my-1"
      />
      Wallet
    </v-btn>
    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold white--text ml-6"
      color="grey darken-1"
      medium
      href="https://nulscan.io/"
      min-width="122"
    >
      NULScan
    </v-btn>
    <v-divider
      class="ml-6 mr-3"
      vertical
    />

    <!-- <v-btn
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
    </v-btn> -->
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
