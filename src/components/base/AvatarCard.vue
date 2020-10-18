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
      :text="textname"
      :size="size"
      :tcolor="tcolor"
      :href="href"
      class="mb-3"
    />

    <div :class="horizontal && title && 'ml-6'">
      <a
        :href="href"
        target="_blank"
        style="color:#E8FFFF"
      />
      <br>
      {{ text }}
      {{ linkin }}

      <base-body
        v-if="textname || $slots.default"
        :space="horizontal ? 0 : undefined"
        :text="textname"
        :linkin="linkin"

        class="mx-auto"
        max-width="700"
      >
        <slot />
        {{ text }}
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
      icon: String,
      textname: String,
      dark: {
        type: Boolean,
        default: false,
      },
      horizontal: {
        type: Boolean,
        default: true,
      },
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
      email: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      linkin: {
        type: String,
        default: '',
      },
      href: {
        type: String,
        default: '',
      },
      tcolor: {
        type: String,
        default: 'green',
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
