<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 text-right" v-if="user && user.user_type === 'admin'">
        <button class="btn btn-danger mr-3" @click="deleteProduct()">Delete</button>
        <nuxt-link :to="'/Products/update/' + product.id" class="btn btn-secondary">EditProduct</nuxt-link>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <img :src="product.image" alt class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h1>{{ product.title }}</h1>
        <p>${{ product.price }}</p>
        <h2>Description</h2>
        <p>{{ product.description }}</p>
        <button class="btn btn-primary" @click="addToCart">Add to cart</button>
      </div>
    </div>

    <Disqus />
  </div>
</template>

<script>
import Disqus from "../../components/disqus.vue";
import firebase from "firebase";
export default {
  components: { Disqus },
  name: "Product",
  data() {
    return {
      product: null
    };
  },
  computed: {
    user() {
      // geting the user to ceck either it is admin or random customer
      return this.$store.getters.GET_USER;
    },
    products() {
      // getting the products from firebase
      return this.$store.getters.GET_PRODUCTS;
    }
  },
  created() {
    const id = this.$route.params.id;
    // filtering the products to get the single specific product according to id
    const prod = this.products.filter(prod => prod.id === id);
    this.product = prod[0];
  },
  methods: {
    deleteProduct() {
      let loader = this.$loading.show();
      let id = this.$route.params.id;
      const db = firebase.firestore();
      // create the reference of the image according the random (id)
      const image = firebase
        .storage()
        .ref("products/" + this.product.image_random + ".jpg");

      // deleting the product from firestore
      db.collection("products")
        .doc(id)
        .delete()
        .then(() => {
          // deleting the image from storage
          image.delete().then(() => {
            // filtering the products in vuex to get the current products
            this.$store.state.products = this.$store.state.products.filter(
              product => {
                return product.id !== id;
              }
            );
            loader.hide();
            this.$router.push("/");
            this.$toaster.success("Product Deleted...");
          });
        });
    },
    addToCart() {
      this.$toaster.success("Added to cart");
      // adding the current product to cart
      this.$store.dispatch("ADD_TO_CART", this.product);
    }
  }
};
</script>

<style scoped></style>
