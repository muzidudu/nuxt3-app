import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "index",
        bodyAttrs: {
          class: "bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-400",
        },
      },
    css: [
    // windi preflight
    'virtual:windi-base.css',
    // your stylesheets which overrides the preflight
    '@/assets/css/main.css', 
    // windi extras
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    ],
    buildModules: [
        'nuxt-windicss',
        "@vueuse/nuxt",
        '@pinia/nuxt',
    ],
    windicss: {
      analyze: false
        // analyze: {
        //     analysis: {
        //         interpretUtilities: false,
        //       },
        //       // see https://github.com/unjs/listhen#options
        //       server: {
        //         port: 4444,
        //         open: true,
        //       }
        // }
      },
    vueuse: {
        ssrHandlers: true,
    },

    vite: {
      // logLevel: "info",
      optimizeDeps: {
        include: [
          "vue",
        ],
      },
    },
});
