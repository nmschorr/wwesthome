<template>
  <div
    :class="classes"
    class="pt-2"
  >
    <base-avatar
      v-if="icon"
      :title="title"
      :color="color"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      :tcolor="tcolor"
      :href="href"
      :text="text"
      class="mb-3"
    />

    <div
      v-if="title"
      :class="horizontal && title && 'ml-6'"
    >
      <a
        v-if="href.length > 0"
        :href="href"
        class="grey--text text--darken-2"
        style="font-family:montserrat,sans-serif;font-size:20px;font-weight:500"
        target="_blank"
      >
        {{ title }} <br>
      </a>
      <span
        v-if="!href"
        style="font-family:montserrat,sans-serif;font-size:18px;font-weight:400"
      >
        {{ title }} <br>
      </span>
      {{ text }} <br>
      <a
        v-if="linkin.length > 0"
        :href="linkin"
        class="cyan--text text--lighten-3"
        style="color:white;font-size:14px;"
        target="_blank"
      >
        {{ title }} on LinkedIn <br>
      </a>
      <div
        v-if="email.length"
        class="pink--text text--lighten-4"
        style="color:white;font-size:14px;"
      >
        {{ email }} <br>
      </div>

      <base-body
        v-if="text || $slots.default"
        :space="horizontal ? 0 : undefined"
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
      icon: String,
      text: {
        type: String,
        default: '',
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
        default: 52,
      },
      title: {
        type: String,
      },
      href: {
        type: String,
        default: undefined,
      },
      tcolor: {
        type: String,
        default: undefined,
      },
      email: {
        type: String,
        default: '',
      },
      jobtitle: {
        type: String,
        default: '',
      },
      linkin: {
        type: String,
        default: '',
      },
      personname: {
        type: String,
        default: '',
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
<style lang="sass">
  .html
    font-size: 12px
</style>
