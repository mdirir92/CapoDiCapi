<template>
  <div>
    <NavigationBar />
    <nuxt class="paddint-top" />
    <Footer />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import Footer from "~/components/Footer.vue";
import firebase from "firebase";
export default {
  components: {
    NavigationBar,
    Footer
  },
  mounted() {},
  created() {
    if (this.$store.getters.GET_PRODUCTS.length === 0) {
      // dispatching the LOAD_PRODUCTS function in vuex to get all the products from firebase
      this.$store.dispatch("LOAD_PRODUCTS");
    }

    let vm = this;

    // this will trigger whenever the user is logged in or logged out
    firebase.auth().onAuthStateChanged(user => {
      // if there is user find the user form firebase using the given id
      if (user) {
        const user_id = user.uid;
        const db = firebase.firestore().collection("users");
        db.where("user_id", "==", user_id)
          .get()
          .then(snapShot => {
            snapShot.forEach(doc => {
              const id = doc.id;
              vm.$store.dispatch("ADD_USER", id);
            });
          });
      } else {
        // if there is user is logout remove the user
        vm.$store.dispatch("CLEAR_USER");
      }
    });
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: url(../assets/images/opaquecapo.png) no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
}

@media (max-width: 768.98px) {
  body {
    background-attachment: fixed;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.paddint-top {
  padding-top: 117px !important;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  padding-bottom: 100px !important;
}
</style>
