<template>
<div>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="login-box">
      <div class="button-box">
        <div ref="btn" id="btn"></div>
        <button type="button" class="toggle-btn" @click="login()">Log In</button>
        <button type="button" class="toggle-btn" @click="register()">Register</button>
      </div>
      <div class="social-icons">
        <img @click="fb" :src="require('assets/images/FB.png')" alt="Logo" />
        <img @click="fb" :src="require('assets/images/Twitter.png')" alt="Logo" />
        <img @click="fb" :src="require('assets/images/FB.png')" alt="Logo" />
      </div>
      <div class="form-box">
      <form ref="login" id="login" class="input-group">
        <div class="textbox">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" required />
        </div>

        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <div class="checkbox">
          <input type="checkbox" class="check-box" />
          <span>Remember Password</span>
        </div>
        <input type="button" class="btn" value="Sign in" />
      </form>
      <form ref="register" id="register" class="input-group">
        <div class="textbox">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" required />
        </div>

        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="email" placeholder="Email Id" required />
        </div>
        <div class="textbox">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div class="checkbox">
          <input type="checkbox" class="check-box" />
          <span id="terms">I agree to the terms & conditions</span>
        </div>
        <div></div>
        <input type="button" class="btn" value="Register" />
      </form>
      </div>
    </div>
  </body>
</div>
</template>

<script>


export default {
  methods: {
    register: function() {
      var x = this.$refs.login;
      var y = this.$refs.register;
      var z = this.$refs.btn;
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    },

    login: function() {
     var x = this.$refs.login;
      var y = this.$refs.register;
      var z = this.$refs.btn;
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0";
    }
  }
};
</script>

<style lang="css" scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
body {
  background: url(~assets/images/opaquecapo.png) no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-box {
  width: 300px;
  position: absolute;
  background-color: honeydew;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
.login-box h1 {
  float: left;
  font-size: 40px;
  border-bottom: 6px solid black;
  margin-bottom: 50px;
  padding: 13px 0;
}
.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px aquamarine;
  border-radius: 30px;
}

.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
.form-box{
  right: 20px;
    height: 480px;
    position: relative;
    margin: 6% auto;
    padding: 5px;
    overflow: hidden;
}
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, aqua, aquamarine);
  border-radius: 30px;
  transition: 0.5s;
}
.social-icons {
  margin: 30px auto;
  text-align: center;
}
.social-icons img {
  width: 30px;
  margin: 0 12px;
  box-shadow: 0 0 20px 0 #7f7f7f3d;
  cursor: pointer;
  border-radius: 50%;
}

.checkbox {
  margin: 30px 10px 30px 0;
}
span {
  color: rgb(0, 0, 0);
  font-size: 20px;
  bottom: 90px;
  position: absolute;
}
#terms {
    bottom: 70px !important;
  position: absolute;
  margin-left: 10px;
}
.input-group {
  left: 28px;
  top: 60px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}

#register {
  left: 450px;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid black;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: black;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 220px;
  background: none;
  border: 2px solid black;
  color: black;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}
</style>
