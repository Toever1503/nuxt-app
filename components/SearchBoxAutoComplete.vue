<template>
  <div class="search_box grid items-center">
    <a-auto-complete
        @search="handleAutoCompleteSearch"
        :options="recommendKeyword"
        :allowClear="true"
    >
      <template #option="item">
        <div style="display: flex; justify-content: space-between">
          xsss
        </div>
      </template>

      <a-input-search class="min-w-[215px] font-normal"
                      v-model:value="value"
                      @search="search"
                      placeholder="Nhập từ khóa bạn cần tìm"
      />
    </a-auto-complete>

  </div>
</template>

<script setup>
import {message} from "ant-design-vue";
import {ref} from "vue";

const value = ref(""); // value of input search
const recommendKeyword = ref([
]); // list of recommend keyword

const search = () => {
  // only search when people type something
  if (message)
    message.error('This is an error message');
  else
    console.log('begin search')
}

const handleAutoCompleteSearch = q => {
  console.log('typing: ', q)
}
</script>


<style>
header .search_box input, header .ant-input-group-addon > button {
  border: none;
}
</style>