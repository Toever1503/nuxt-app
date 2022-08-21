<template>
  <div id="tour page">this is tour page
  {{route.params}}
  </div>
</template>

<script setup>
definePageMeta({
  title: 'detail tour'
})
const route = useRoute();

</script>