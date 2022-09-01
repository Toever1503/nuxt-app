<template>
  <a-layout >
    <headers/>
    <div class="main_page_content min-h-[700px]">
      <slot/>
    </div>

    <footers/>
  </a-layout>
</template>

<style>
a {
  color: black;
}
</style>