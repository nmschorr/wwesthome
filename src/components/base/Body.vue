<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    :text="text"
    :title="title"
    class="base-body body-1 black--text"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <!-- Only use v-html for user data -->
    <div
      v-if="text"
    >
      {{ text }}
    </div>

    <div
      v-if="title"
    >
      {{ title }}
    </div>
    <slot v-else />
  </component>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseBody',

    mixins: [Heading],

    inject: ['theme'],

    props: {
      html: String,
      maxWidth: {
        type: [Number, String],
        default: undefined,
      },
      space: {
        type: [Number, String],
        default: 10,
      },
      tag: {
        type: String,
        default: 'p',
      },
      horizontal: {
        type: Boolean,
        default: true,
      },
      outlined: {
        type: Boolean,
        default: true,
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
      text: {
        type: String,
        default: '',
      },
    },
    computed: {
      classes () {
        return [
          'cyan--text',
          this.theme.isDark ? 'text--lighten-1' : 'text--darken-1',
          `text-${this.heading.align}`,
          `mb-${this.space}`,
        ]
      },
      styles () {
        return {
          maxWidth: `${this.maxWidth}px`,
        }
      },
    },
  }
</script>
