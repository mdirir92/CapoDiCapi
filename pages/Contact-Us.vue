<template>
  <div class="container-contact">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for>Name:</label>
              <input type="text" placeholder="name" v-model="name" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for>Email</label>
              <input type="email" placeholder="Email" v-model="email" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for>Message</label>
              <textarea cols="30" rows="5" class="form-control" v-model="message"></textarea>
            </div>
          </div>
          <button class="btn btn-primary mt-0">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <!-- Main Container Ends -->
</template>

<script>
import axios from "axios";
export default {
  name: "ContactUs",
  data() {
    return {
      name: null,
      message: null,
      email: null
    };
  },
  methods: {
    submitForm() {
      if (this.message && this.name && this.email) {
        let loader = this.$loading.show();
        axios
          .post("https://cnm.capodicapi.london/public/api/send_email", {
            name: this.name,
            email: this.email,
            messgae: this.message
          })
          .then(res => {
            loader.hide();
            this.$toaster.success("Your Email is send...");
            this.$router.push("/");
            // console.log(res.data);
          })
          .catch(err => {
            this.$toaster.error("Some error occur...");
            loader.hide();
            console.log(err);
          });
      } else {
        this.$toaster.error("Plase fill all the fields");
      }
    },
    created() {
      // closing navbar
      const nav = document.querySelector(".navbar-collapse.collapse.show");
      if (nav) {
        nav.classList.remove("show");
      }
    }
  }
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

#inputEmail4 {
  width: 300px !important;
}
#inputPassword4 {
  size: 200px;
}
#Message {
  size: 200px;
  height: 100px;
}

select {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.state {
  display: flex;
  flex-direction: column;
}
button {
  margin: auto;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  margin-top: 20px;
}

.container-contact {
  /* background-color: #FFFFFF; */
  /* background-image: url(../assets/images/Coming-Soon.jpg); */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 40px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}

form {
  margin-top: 50px;
  margin: auto;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
}

.img-container {
  display: flex;
  flex-direction: column;
}

/* Mobile */
@media (max-width: 320px) {
  .logo {
    width: 100%;
    text-align: center;
    margin-top: 13px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
  .container header nav {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    width: 100%;
    float: none;
    display: none;
  }
  nav ul li {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    width: 100%;
    text-align: center;
  }
  .text_column {
    width: 100%;
    text-align: justify;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  .thumbnail {
    width: 100%;
  }
  .footer_column {
    width: 100%;
    margin-top: 0px;
  }
  .parallax {
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 40%;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 100%;
    font-size: 18px;
  }
  .parallax_description {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 90%;
    margin-top: 25px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 12px;
    float: none;
    text-align: center;
  }
  .banner {
    background-color: #2d9ab7;
    background-image: none;
  }
  .tagline {
    margin-top: 20px;
    line-height: 22px;
  }
  .hero_header {
    padding-left: 10px;
    padding-right: 10px;
    line-height: 22px;
    text-align: center;
  }
}

/* Small Tablets */
@media (min-width: 321px) and (max-width: 767px) {
  .logo {
    width: 100%;
    text-align: center;
    margin-top: 13px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    color: #043745;
  }
  .container header nav {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    width: 100%;
    float: none;
    overflow: auto;
    display: inline-block;
    background: #52bad5;
  }
  header nav ul {
    padding: 0px;
    float: none;
  }
  nav ul li {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    width: 100%;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .text_column {
    width: 100%;
    text-align: left;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  .thumbnail {
    width: 100%;
  }
  .footer_column {
    width: 100%;
    margin-top: 0px;
  }
  .parallax {
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 40%;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 100%;
    font-size: 18px;
  }
  .parallax_description {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 30%;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    float: none;
    width: 100%;
    text-align: center;
  }
  .thumbnail {
    width: 50%;
  }
  .parallax {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-top: 20%;
  }
  .parallax_description {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    width: 100%;
    padding-top: 30px;
  }
  .banner {
    padding-left: 20px;
    padding-right: 20px;
  }
  .footer_column {
    width: 100%;
  }
}

/* Small Desktops */
@media (min-width: 768px) and (max-width: 1096px) {
  .text_column {
    width: 100%;
  }
  .thumbnail {
    width: 50%;
  }
  .text_column {
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  .banner {
    margin-top: 0px;
    padding-top: 0px;
  }
}
</style>
