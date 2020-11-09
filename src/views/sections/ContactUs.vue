<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="5">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="What is POCM?"
              class="mb-4"
              :style="`font-size:20px!important;`"
            />

            <base-body space="0">
              <span
                class="white--text"
                style="font-family:montserrat, sans-serif;font-size:18px;"
              >
                Proof of Credit Mining (POCM) is a SCO Platform that uses smart-contracts to issue
                and distribute project tokens.
                <br><br>
                Got NULS? Stake into a project’s nodes and earn their token as reward,
                while the project earns NULS as reward.
                <br><br>

                Projects can use the NULS rewards to bootstrap and help fund
                development. Unlike IEOs and ICOs, stakers never risk their principal,
                and NULS never leaves their wallet.
              </span>
            </base-body>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-card
              color="white"
              width="558"
              height="357"
              class="ml-7"
            >
              <v-img
                :src="require('@/assets/pocm2.jpg')"
                width="558"
                height="357"
              />
            </v-card>
            <!--   <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="mailto:berzeck@nulstar.com?subject=NULS%20Blockchain%20Question"
              large
              outlined
              target="_blank"
            >
              Contact Us
            </base-btn> -->
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>
