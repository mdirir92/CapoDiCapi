<template>
  <footer>
    <!-- <div class="bg-black row">
      <div class="imgContainer col-md-3">
        <img @click="fb" :src="require('assets/images/FB.png')" alt="Logo" />
        <img @click="fb" :src="require('assets/images/Twitter.png')" alt="Logo" />
        <img @click="fb" :src="require('assets/images/Youtube.png')" alt="Logo" />
        <img clas @click="ig" :src="require('assets/images/instagram.png')" alt="Logo" />
      </div>
      <div class="copyright col-md-6">
        &copy;2020 -
        <strong>CAPO DI CAPI | All Rights Reserved.</strong>
      </div>
      <div class="footer_button col-md-3">
        <span>
          <strong>About us</strong>
        </span>

        <nuxt-link to="/Contact-Us">
          <span>
            <strong>Contact us</strong>
          </span>
        </nuxt-link>
      </div>
    </div>-->

    <div class="bg-black row py-3 m-0">
      <div class="col-md-3">
        <div class="images">
          <img @click="fb" :src="require('assets/images/FB.png')" alt="Logo" />
          <img @click="fb" :src="require('assets/images/Twitter.png')" alt="Logo" />
          <img @click="fb" :src="require('assets/images/Youtube.png')" alt="Logo" />
          <img clas @click="ig" :src="require('assets/images/instagram.png')" alt="Logo" />
        </div>
      </div>
      <div class="col-md-6 text-light text-center">
        &copy;2020 -
        <strong>CAPO DI CAPI | All Rights Reserved.</strong>
      </div>
      <div class="col-md-3 d-flex justify-content-evenly align-items-center">
        <nuxt-link to="/About">
          <span>
            <strong>About us</strong>
          </span>
        </nuxt-link>

        <nuxt-link to="/Contact-Us">
          <span>
            <strong>Contact us</strong>
          </span>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    fb: function() {
      window.open("https://www.facebook.com/King.Sosathapirate");
    },

    ig: function() {
      window.open("https://www.instagram.com/capodicapildn/");
    }
  }
};
</script>
<style lang="css" scoped>
/* Footer */

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 111;
}

.justify-content-evenly {
  justify-content: space-evenly;
}
/* footer {
  overflow: hidden;
} */

.container-footer {
  display: flex;
  flex-direction: row;
  background-color: black;
  align-items: center;
  padding-left: 10px;
}
.images > img {
  height: 30px;
  width: 30px;
}

.images > img:last-child {
  height: 20px;
  width: 20px;
}

.images > img:hover {
  cursor: pointer;
}
.images {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: #2c9ab7;
}

/* .imgContainer {
  display: flex;
  flex-direction: row;
  background-color: black;
  align-items: center;
  width: 200px;
  justify-content: space-between;
} */
.copyright {
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 2px;
}

.footer_button {
  margin-right: auto;
  background-color: black;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  color: #ffffff;
  font-weight: lighter;
}

.footer_button > span:hover {
  color: #2c9ab7;
  cursor: pointer;
}
.bg-black {
  background: #000;
}
</style>
