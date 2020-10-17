<template>
  <div
    :class="classes"
    class="pt-2"
  >
    <base-avatar
      v-if="icon"
      :color="color"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      :tcolor="white"
      :hreff="hreff"
      class="mb-3"
    />

    <div :class="horizontal && title && 'ml-6'">
      <a
        :href="hreff"
        target="_blank"
        style="color:#E8FFFF"
      >
        {{ title }}
      </a>
      <a
        :href="linkin"
        style="color:red;"
        :style="`font-size:14px;`"
        target="_blank"
      >
        LinkedIn
      </a>
      <br>
      <base-body
        v-if="text || $slots.default"
        :space="horizontal ? 0 : undefined"
        :text="textname"
        class="mx-auto"
        max-width="700"
      >
        <slot />
      </base-body>
    </div>
  </div>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseAvatarCard',

    mixins: [Heading],

    props: {
      align: {
        type: String,
        default: 'left',
      },
      color: String,
      dark: Boolean,
      horizontal: Boolean,
      icon: String,
      outlined: {
        type: Boolean,
        default: true,
      },
      space: {
        type: [Number, String],
        default: 8,
      },
      size: {
        type: [Number, String],
        default: 72,
      },
      text: String,
      email: String,
      title: String,
      linkin: String,
      hreff: String,
      tcolor: {
        type: String,
        default: 'white--text',
      },
    },

    computed: {
      classes () {
        const classes = [
          `mb-${this.space}`,
        ]

        if (this.horizontal) {
          classes.push('d-flex')

          if (!this.$slots.default && !this.text) {
            classes.push('align-center')
          }
        }

        return classes
      },
    },
  }
</script>
