import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: ["@/plugins/antd-ui"],
    build: {
        loaders: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        }
    },
    css: [
        "~/assets/ant-variables.less"
      ]
})
