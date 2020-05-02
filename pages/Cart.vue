<template>
  <div class="container py-5">
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(cart, index) in carts" :key="index">
            <div class="row">
              <div class="col-3">
                <img :src="cart.image" class="img-fluid" alt />
              </div>
              <div class="col-7">
                <h2 class="font-weight-bold">{{ cart.title }}</h2>
                <p class="lead">${{ cart.price }}</p>
                <span class="font-weight-bold">Category:</span>
                <nuxt-link to="#">
                  {{
                  cart.category
                  }}
                </nuxt-link>
              </div>
              <div class="col-2 text-right">
                <a href="#" class="text-danger font-weight-bold" @click="removeItem(cart.id)">X</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-footer text-right">
        <p class="m-0 mb-2">
          Total Price: $
          <span class="font-weight-bold">{{ totalPrice }}</span>
        </p>
        <button class="btn btn-outline-danger mr-2" @click="clearAllCart">Clear All Cart</button>
        <button @click="checkOut" class="btn btn-secondary">Check Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    carts() {
      // carts from vuex
      return this.$store.getters.GET_CART;
    },
    totalPrice() {
      // total price
      return this.$store.getters.GET_CART_TOTAL_PRICE;
    },
    ...mapGetters({
      // get the user from vuex
      user: "GET_USER"
    })
  },
  methods: {
    removeItem(id) {
      // removing the specific cart
      this.$toaster.success("Item Removed from cart");
      this.$store.dispatch("REMOVE_ITEM_CART", id);
    },
    clearAllCart() {
      // clear all the cart
      this.$toaster.success("Cart cleared");
      this.$store.dispatch("CLEAR_CART");
    },
    checkOut() {
      // check if the user is logged in or not
      if (!this.user) {
        this.$toaster.warning("You Need to Create an account first...!!!");
        // checking if the cart is not empty
      } else if (this.carts.length === 0) {
        this.$toaster.warning("You must add something to cart...");
      } else {
        // redirect to checkout page
        this.$router.push("/checkout");
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.img-fluid {
  max-height: 200px;
}
</style>
