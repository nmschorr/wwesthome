<template>
  <v-theme-provider :dark="dark">
    <v-container
      class="pa-0 transparent"
    >
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon
            :color="color"
            @click="runme(rpath)"
          >
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />
          <a
            :href="rpath"
            :style="`text-decoration-line:none`"
          >
            <base-title
              class="cyan--text text--lighten-3"
              :title="title"
              space="1"
            />
          </a>
          <base-divider
            :color="color"
            mwidth="92px"
          />

          <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
            <slot />
          </base-body>
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="display-3 cyan--text text--lighten-4 font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'cyan',
      },
      icon: String,
      subtitle: String,
      text: String,
      outlined: {
        type: Boolean,
        default: true,
      },
      space: {
        type: [Number, String],
        default: 8,
      },
      title: {
        type: String,
        default: '',
      },
      href: {
        type: String,
        default: '',
      },
      rpath: {
        type: String,
        default: 'https://nuls.io',
      },
    },
    methods: {
      runme (rpath) {
        window.location.href = rpath
      },
    },
  }
</script>
