<template>
  <div>
    <button
      v-if="prev"
      class="border border-teal-500 text-teal-500 rounded-sm font-bold py-2 px-3 flex items-center hover:bg-teal-500 hover:text-white"
      @click="$emit('handle-pagination', prev)"
    >
      <svg
        id="Layer_1"
        class="h-4 w-4 fill-current"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-49 141 512 512"
        style="enable-background: new -49 141 512 512"
        xml:space="preserve"
      >
        <path
          id="XMLID_10_"
          d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
        ></path>
      </svg>
    </button>
    <button
      v-if="next"
      class="border border-teal-500 bg-teal-500 text-white rounded-sm font-bold py-2 px-3 flex items-center"
      @click="$emit('handle-pagination', next)"
    >
      <svg
        id="Layer_1"
        class="h-4 w-4 fill-current"
        clasversion="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-49 141 512 512"
        style="enable-background: new -49 141 512 512"
        xml:space="preserve"
      >
        <path
          id="XMLID_11_"
          d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BasePagination',
  props: {
    prev: {
      type: String,
      default: '',
    },
    next: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="postcss" scoped>
div {
  @apply flex flex-row space-x-2 justify-end text-xs;
}
</style>
