<template>
  <footer class="px-[20px] py-[24px]" style="border-top: 1px solid gainsboro; background: white;">
    <div id="footer_content" class="max-w-[1500px] m-auto divide-y sm:divide-y-[0px] sm:flex sm:gap-[10px] lg:gap-[40px] justify-center lg:pb-[20px]">
      <!--      for info-->
      <div class="pt-[10px] sm:pt-[0px]">
        <div>
          <div>
            <h3 class="text-xl">
              Về chúng tôi
            </h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <!--      for course-->
      <div class="pt-[10px] sm:pt-[0px]">
        <div>
          <div>
            <h3 class="text-xl">
              Danh sách khóa học
            </h3>
          </div>

          <a-space size="middle">
            <div>
              <h4>Luyện thi PTE</h4>
              <p class="leading-5">
                <NuxtLink to="/">
                  Luyện thi PTE 30
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  Luyện thi PTE 30-42
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  Luyện thi PTE 42-44
                </NuxtLink>
              </p>
            </div>
            <div>
              <h4>Giao tiếp</h4>
              <p class="leading-5">
                <NuxtLink to="/">
                  Học tiếng Anh giao tiếp Beginer
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  Học tiếng Anh giao tiếp Pre-Inter conversation
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  Học tiếng Anh giao tiếp Pre-Inter business
                </NuxtLink>
              </p>
            </div>
          </a-space>
        </div>
      </div>

      <!--      for contact-->
      <div class="pt-[10px] sm:pt-[0px]">
        <div>
          <div>
            <h3 class="text-xl">
              Thông tin liên hệ
            </h3>
          </div>
          <div>
            <p>
              <home-outlined/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <phone-outlined/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              <mail-outlined/>
              aa@gmail.com
            </p>

            <a-space>
              <NuxtLink to="https://facebook.com">
                <facebook-outlined/>
              </NuxtLink>
              <NuxtLink to="https://facebook.com">
                <instagram-outlined/>
              </NuxtLink>
              <NuxtLink to="https://facebook.com">
                <ie-outlined/>
              </NuxtLink>
            </a-space>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>
<script setup>
import {
  FacebookOutlined,
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  InstagramOutlined,
  IeOutlined
} from "@ant-design/icons-vue";

</script>

<style>
footer p {
  margin: unset;
  margin-bottom: 10px;
  font-size: 13px;
}
</style>