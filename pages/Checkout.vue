<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-md-offset-3 bg-white py-3">
        <div class="panel panel-default credit-card-box">
          <div class="panel-heading display-table">
            <div class="row display-tr">
              <h3 class="panel-title display-td">Payment Details</h3>
              <div class="display-td">
                <img
                  class="img-responsive pull-right"
                  src="http://i76.imgup.net/accepted_c22e0.png"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Name:</label>
                <input type="text" class="form-control" v-model="name" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Phone:</label>
                <input type="number" class="form-control" v-model="phone" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Country:</label>
                <input type="text" class="form-control" v-model="country" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>City:</label>
                <input type="text" class="form-control" v-model="city" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-grou">
                <label for>Address:</label>
                <textarea
                  rows="4"
                  v-model="address"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="panel-body my-3">
            <div id="card-element" class="form-control"></div>
            <button class="btn btn-danger mt-3" @click="submitForm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "Checkout",
  data() {
    return {
      amount: 100,
      stripe: null,
      cardElement: null,
      name: null,
      email: null,
      phone: null,
      country: null,
      city: null,
      address: null
    };
  },
  created() {
    if (this.cart.length === 0) {
      this.$router.push("/");
    }
  },
  mounted() {
    this.stripe = Stripe("pk_test_cbyahGsI029JM0rOzbDi3cAz00cUYw6ij0");
    this.createAndMountFormElements();
    this.amount = this.totalPrice;
  },
  computed: {
    ...mapGetters({
      user: "GET_USER",
      totalPrice: "GET_CART_TOTAL_PRICE",
      cart: "GET_CART"
    })
  },
  methods: {
    createAndMountFormElements() {
      var elements = this.stripe.elements();
      this.cardElement = elements.create("card");
      this.cardElement.mount("#card-element");
    },
    submitForm() {
      if (this.validation()) {
        this.stripe.createToken(this.cardElement).then(result => {
          if (result.error) {
            this.$toaster.warning("Can't Connect to server...");
          } else {
            const token = result.token.id;
            let loader = this.$loading.show();
            axios
              .post("https://cnm.capodicapi.london/public/api/stripe", {
                stripeToken: token,
                amount: this.amount
              })
              .then(res => {
                if (res.data === "success") {
                  this.$toaster.success("Purchase done...");

                  const db = firebase.firestore().collection("transaction");

                  let current_datetime = new Date();
                  let formatted_date =
                    current_datetime.getDate() +
                    "-" +
                    (current_datetime.getMonth() + 1) +
                    "-" +
                    current_datetime.getFullYear();

                  db.add({
                    totalPrice: this.amount,
                    customer_id: this.user.user_id,
                    customer_email: this.email,
                    customer_address: this.address,
                    customer_phone: this.phone,
                    customer_name: this.name,
                    customer_city: this.city,
                    customer_country: this.country,
                    status: "pending",
                    date: formatted_date
                  }).then(res => {
                    loader.hide();
                    this.$store.dispatch("CLEAR_CART");
                    this.$router.push("/");
                  });
                }
              })
              .catch(err => {
                loader.hide();
                this.$toaster.warning("Can't Connect to server...");
              });
          }
        });
      } else {
        this.$toaster.error("Please Fill all the fields...");
      }
    },
    validation() {
      if (
        (this.name,
        this.email,
        this.phone,
        this.country,
        this.city,
        this.address)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.panel-title {
  display: inline;
  font-weight: bold;
}
.display-table {
  display: table;
}
.display-tr {
  display: table-row;
}
.display-td {
  display: table-cell;
  vertical-align: middle;
  width: 61%;
}
</style>
