<template>
  <div class="container">
    <!-- Navigation -->

    <header>
      <nuxt-link to="/">
      <span>
      <img class="logo-cdc" :src="require('assets/images/cdc-banner.png')" alt="Logo" />
      </span>
      </nuxt-link>
      <nav>
        <ul>
          <li><a>Clothing</a>
              <ul>
          <li><a>Men</a></li>
          <li><a>Women</a></li>
          <li><a>Accessories</a></li>
              </ul>
          </li>
          <nuxt-link to="/AR-Experience">
          <li><a>AR-X</a></li>
          </nuxt-link>
          <li><a>Blog</a></li>
          <li> <img  :src="require('assets/images/cart.png')" alt="Logo" /></li>
          <nuxt-link to="/Login-Register">
          <span>
          <li> <img  :src="require('assets/images/user.png')" alt="Logo" /></li>
          </span>
          </nuxt-link>
        </ul>
      </nav>
    </header>
  </div>
</template>



<style lang="css" scoped>
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
nav {
  float: right;
  /* width: 50%; */
  text-align: right;
  margin-right: 25px;
  margin-top: 15px;
}
header nav ul {
  list-style: none;
  /* float: right; */
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
ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
ul li {
  float: left;
  width: 150px;
  height: 40px;
  opacity: .8;
  line-height: 40px;
  text-align: center;
}

ul li > img{
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

ul li ul li  > a:hover {
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

.container {
  background-color: black;
  height: 75px;
}
.dropdown-toggle {
  white-space: nowrap;
}
</style>