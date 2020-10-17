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
            />

            <base-body space="0">
              <span class="white--text">
                Proof of Credit Mining (POCM) is a SCO Platform that allows projects to use smart-contracts to issue
                and distribute project tokens.
                <br><br>
                Got NULS? Stake into a project’s nodes and earn their token as reward,
                while the project earns NULS as reward. Projects can use the NULS rewards to bootstrap and help fund
                development. Unlike IEOs and ICOs, stakers never risk their principal, /
                and NULS never leave their wallet.
              </span>
            </base-body>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
            <v-card
              color="white"
              width="auto"
              min-width="200px"
              height="200px"
            >
              <v-img
                :src="require('@/assets/marketing.jpg')"
                min-height="100px"
                max-height="200px"
                width="100%"
                height="100%"
              />
            </v-card>
            <!--   <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="mailto:berzeck@nulstar.com?subject=Nuls%20Blockchain%20Question"
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
