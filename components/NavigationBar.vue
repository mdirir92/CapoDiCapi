<template>
  <div class="container-header">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <nuxt-link to="/" class="navbar-brand">
          <span>
            <img class="logo-cdc img-fluid" src="../assets/images/cdc-banner.png" alt="Logo" />
          </span>
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" ref="navBarHide">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item parent-menu">
              <nuxt-link to="#">Clothing</nuxt-link>
              <div class="sub-menus">
                <nuxt-link to="/Category/Men" class="dropdown-item">Men</nuxt-link>
                <nuxt-link to="/Category/Women" class="dropdown-item">Women</nuxt-link>
                <nuxt-link to="/Category/Accessories" class="dropdown-item">Accessories</nuxt-link>
              </div>
            </li>
            <div class="mob-sub-menu">
              <div class="mob-dropdown">
                <nuxt-link to="/Category/Men" class="dropdown-item">Men</nuxt-link>
                <nuxt-link to="/Category/Women" class="dropdown-item">Women</nuxt-link>
                <nuxt-link to="/Category/Accessories" class="dropdown-item">Accessories</nuxt-link>
              </div>
            </div>
            <li class="nav-item">
              <nuxt-link to="/AR-Experience">AR-X</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/Blog">Blog</nuxt-link>
            </li>
            <li v-if="user && user.user_type === 'admin'" class="nav-item">
              <nuxt-link to="/Products/AddProduct">Product</nuxt-link>
            </li>
            <li v-if="user && user.user_type === 'admin'" class="nav-item">
              <nuxt-link to="/TotalTransactionList">Transaction</nuxt-link>
            </li>
            <li class="relative nav-item">
              <nuxt-link to="/Cart">
                <img src="../assets/images/cart.png" class="img-fluid" alt="Logo" />
                <span class="badge badge-primary" v-if="cart.length">
                  {{
                  cart.length
                  }}
                </span>
              </nuxt-link>
            </li>
            <li class="nav-item" v-if="!user">
              <nuxt-link to="/Login-Register">
                <span>
                  <li>
                    <img src="../assets/images/user.png" alt="Logo" />
                  </li>
                </span>
              </nuxt-link>
            </li>
            <li class="nav-item" v-else>
              <span @click="logout" class="cursor-pointer">
                <li>LogOut</li>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  computed: {
    cart() {
      // getting all the carts from vuex
      return this.$store.getters.GET_CART;
    },
    user() {
      // get the current user
      return this.$store.getters.GET_USER;
    }
  },
  methods: {
    logout() {
      // logout user
      firebase.auth().signOut();
      this.$toaster.success("Logout Successfully...");
      // clear the user in vuex
      this.$store.dispatch("CLEAR_USER");
      this.$router.push("/");
    }
  },

  watch: {
    $route() {
      let navbar = this.$refs.navBarHide;
      navbar.classList.remove("show");
    }
  }
};
</script>

<style lang="css" scoped>
.container-header {
  position: fixed;
  z-index: 1111;
  top: 0;
  width: 100%;
}
.sub-menus {
  display: none;
}

.parent-menu:hover .sub-menus {
  display: block;
}

.sub-menus {
  background: #ddd;
  width: 166px;
  text-align: center;
}

.sub-menus a {
  color: #333;
}

.relative {
  position: relative;
}

.badge {
  position: absolute;
  top: 5px;
  right: -9px;
  padding: 3px;
  font-size: 12px;
  text-align: center;
}

/* Navigation */
header {
  width: 100%;
  height: 5%;
}

.logo-cdc {
  height: 75px;
  width: 215px;
}
.logo {
  color: #fff;
  font-weight: bold;
  text-align: undefined;
  width: 10%;
  float: left;
  margin-top: 15px;
  margin-left: 25px;
  letter-spacing: 4px;
}
/* nav {
  float: right;
 width: 50%;  text-align: right;
  margin-right: 25px;
  margin-top: 15px;
} */
header nav ul {
  list-style: none;
  position: relative;
  z-index: 11;
}
nav ul li {
  float: left;
  color: #ffffff;
  font-size: 14px;
  text-align: right;
  margin-right: 25px;
  letter-spacing: 2px;
  font-weight: bold;
  transition: all 0.3s linear;
  width: 100px;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
ul li {
  float: left;
  width: 150px;
  height: 40px;
  opacity: 0.8;
  line-height: 40px;
  text-align: center;
}

ul li img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}
ul li a {
  color: #ffffff;
  text-decoration: none;
  display: block;
  font-size: 20px;
}
ul li:hover a {
  cursor: pointer;
}

ul li ul li {
  padding-right: 20px;
  display: none;
  text-align: left;
  background-color: black;
  padding-left: 10px;
  width: 150px;
}

ul li ul li > a:hover {
  color: #2c9ab7;
}

ul li:hover ul li {
  display: block;
}
.hero_header {
  color: #ffffff;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  letter-spacing: 4px;
}

.head-container {
  background-color: black;
  height: 75px;
}
.dropdown-toggle {
  white-space: nowrap;
}

.bg-dark {
  background-color: #000 !important;
}
.dropdown-menu a {
  color: #000 !important;
}
.cursor-pointer {
  cursor: pointer;
}
.mob-sub-menu {
  display: none;
}
@media (max-width: 992px) {
  .mob-sub-menu {
    display: block;
    background: #ddd;
    width: 90%;
    margin: auto;
    text-align: center;
  }

  nav ul li {
    float: unset;
    color: #ffffff;
    font-size: 14px;
    margin-right: 25px;
    letter-spacing: 2px;
    font-weight: bold;
    transition: all 0.3s linear;
    width: 100%;
    text-align: center;
  }

  .sub-menus {
    display: none;
  }
}

@media (max-width: 768px) {
  .logo-cdc {
    width: 180px;
    height: auto;
  }
}

/* @media (max-width: 768px) {
  nav ul li {
    color: #ffffff;
    font-size: 14px;
    margin-right: 25px;
    letter-spacing: 2px;
    font-weight: bold;
    transition: all 0.3s linear;
    width: 100%;
    text-align: center;
  }
} */
</style>
