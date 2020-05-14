<template>
<div>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <!-- <link rel="stylesheet" href="style.css" /> -->
  </head>
  <div class="page-container py-5">
    <div class="login-box pt-4">
      <div class="button-box">
        <div ref="btn" id="btn"></div>
        <button type="button" class="toggle-btn" @click="login()">Log In</button>
        <button type="button" class="toggle-btn" @click="register()">Register</button>
      </div>
      <div class="social-icons">
        <!-- <img src="../assets/images/FB.png" alt="Logo" />
        <img src="../assets/images/Twitter.png" alt="Logo" /> -->
        <!-- <img src="../assets/images/FB.png" alt="Logo" /> -->
      </div>
      <div class="form-box">
        <div ref="login" id="login" class="input-group">
          <div class="textbox">
            <i class="fas fa-user"></i>
            <input type="email" placeholder="Email" required v-model="LoginEmail" />
          </div>
          <div class="textbox">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required v-model="LoginPassword" />
          </div>
          <div class="checkbox">
            <input type="checkbox" class="check-box" />
            <span>Remember Password</span>
          </div>
          <p class="text-danger" v-if="error">{{ error }}</p>
          <!-- <input type="button" class="btn" value="Sign in" /> -->
          <button class="btn" @click="LOGIN()">Login</button>
        </div>
        <div ref="register" id="register" class="input-group">
          <div class="textbox">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" required v-model="SignUserName" />
          </div>
          <div class="textbox">
            <i class="fas fa-lock"></i>
            <input type="email" placeholder="Email Id" required v-model="SignEmail" />
          </div>
          <div class="textbox">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Enter Password" required v-model="SignPassword" />
          </div>
          <!-- <div class="checkbox">
              <input type="checkbox" class="check-box" />
              <span id="terms">I agree to the terms & conditions</span>
          </div>-->
          <button class="btn" @click="SIGNUP()">Register</button>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      LoginEmail: null,
      LoginPassword: null,
      error: null,
      SignUserName: null,
      SignEmail: null,
      SignPassword: null
    };
  },
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
    },

    LOGIN() {
      if (this.LoginEmail && this.LoginPassword) {
        let loader = this.$loading.show();
        firebase
          .auth()
          .signInWithEmailAndPassword(this.LoginEmail, this.LoginPassword)
          .then(user => {
            loader.hide();
            this.$toaster.success("Login Successfully...");
            this.$router.push("/");
            console.log("loggedIn");
          })
          .catch(err => {
            loader.hide();
            this.error = "Email or Password is incorrect...!!!";

            setTimeout(() => {
              this.error = null;
            }, 4000);
            console.log(err);
          });
      } else {
      }
    },
    SIGNUP() {
      if (this.SignUserName && this.SignEmail && this.SignPassword) {
        let loader = this.$loading.show();
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.SignEmail, this.SignPassword)
          .then(res => {
            const user_id = res.user.uid;
            firebase
              .firestore()
              .collection("users")
              .add({
                name: this.SignUserName,
                email: this.SignEmail,
                user_id,
                user_type: "customer"
              })
              .then(res => {
                loader.hide();
                const id = res.id;
                this.$toaster.success("Register Successfully...");
                loader.hide();
                this.$store.dispatch("ADD_USER", id);
                this.$router.push("/");
              })
              .catch(err => {
                console.log("Failed to Add User to Firebase...", err);
              });
          })
          .catch(err => {
            this.$toaster.error(err.message);
          });
      }
    }
  },
  created() {}
};
</script>

<style lang="css" scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
/* .page-container {
  background: url(../assets/images/opaquecapo.png) no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
} */
.login-box {
  /* width: 300px;
  position: absolute;
  background-color: honeydew;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 111; */

  width: 300px;
  background-color: honeydew;
  color: black;
  z-index: 1;
  margin: auto;
}
.login-box h1 {
  float: left;
  font-size: 40px;
  border-bottom: 6px solid black;
  margin-bottom: 50px;
  padding: 13px 0;
}
.button-box {
  width: 240px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px aquamarine;
  border-radius: 30px;
  margin-top: 0;
}

.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
.form-box {
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
  width: 130px;
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
