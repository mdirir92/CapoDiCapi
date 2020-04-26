export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://js.stripe.com/v3/" },
      { src: "https://code.jquery.com/jquery-3.4.1.slim.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      },
      { src: "https://aframe.io/releases/1.0.0/aframe.min.js" },
      {
        src:
          "https://raw.githack.com/jeromeetienne/AR.js/1.7.5/aframe/build/aframe-ar.js"
      },
      { src: "audiohandler.js" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/css/style.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/init.js",
    { src: "~/plugins/v-toaster.js", ssr: false },
    { src: "~/plugins/v-loader.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
