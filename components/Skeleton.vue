<template>
  <div
    :class="`skeleton ${margin} ${width} ${corner} ${padding} ${height} transition duration-500 ease-in-out animate-pulse bg-gray-200`"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseSkeleton',
  props: {
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: 'h-20' },
    margin: { type: [String, Number], default: 5 },
    padding: { type: String, default: 'p-0' },
    corner: { type: [String, Number], default: 'rounded-sm' },
    count: { type: [String, Number], default: 1 },
  },
})
</script>
