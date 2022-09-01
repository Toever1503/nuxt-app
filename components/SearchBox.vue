<template>
  <div class="search_box grid items-center">
    <a-input-search class="min-w-[215px] font-normal"
                    v-model:value="value"
                    @search="search"
                    placeholder="Nhập từ khóa bạn cần tìm"
    />
  </div>
</template>

<script setup>
import {message} from "ant-design-vue";
import {ref} from "vue";

const value = ref(""); // value of input search

const search = () => {
  // only search when people type something
  console.log('search: ', value.value === '');
  if (!value.value)
    message.error('Vui lòng nhập từ khóa cần tìm kiếm');
  else
    window.location.replace(`/search?q=${value.value}`);
}
</script>


<style>
header .search_box input, header .ant-input-group-addon > button {
  border: none;
}
</style>