<template>
  <div class="container">
      <div class="imgContainer">
      <img @click="fb" :src="require('assets/images/FB.png')" alt="Logo" />
       <img @click="fb" :src="require('assets/images/Twitter.png')" alt="Logo" />
        <img @click="fb" :src="require('assets/images/Youtube.png')" alt="Logo" />
        <img clas @click="ig" :src="require('assets/images/instagram.png')" alt="Logo" />
      </div>
    <div class="copyright">
      &copy;2020 -
      <strong>CAPO DI CAPI | All Rights Reserved.</strong>
    </div>
    <div class="footer_button">
      <span>
        <strong>About us</strong>
      </span>
      
      <nuxt-link to="/Contact-Us">
      <span>
        <strong>Contact us</strong>
      </span>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
    methods: {
        fb: function() {
            window.open('https://www.facebook.com/King.Sosathapirate');
        },

        ig: function() {
           window.open('https://www.instagram.com/capodicapildn/');
        }
    }
}
</script>
<style lang="css" scoped>
/* Footer */

.container {
  display: flex;
  flex-direction: row;
   background-color: black;
   align-items: center;
   padding-left: 10px;
}
.imgContainer > img {
    height: 30px;
    width: 30px;
}

.imgContainer > img:last-child {
    height: 20px;
    width: 20px;    
}

.imgContainer > img:hover {
cursor: pointer;

}

a{
  text-decoration: none;
  color: white;

}

a:hover{
  color: #2c9ab7;
}

.imgContainer{
    display: flex;
    flex-direction: row;
    background-color: black;
    align-items: center;
    width: 200px;
   justify-content: space-between;
}
.copyright {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
 
  height: 50px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 2px;
  border-top-width: 2px;
  width: 100%;
  padding-left: 120px;
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
</style>
