<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 col-md-6" v-for="(prod, index) in products" :key="index">
        <div class="card">
          <div class="card-body">
            <nuxt-link :to="'/Products/'+prod.id">
              <img :src="prod.image" alt class="img-fluid" />
              <h4 class="title">{{ prod.title }}</h4>
              <div class="price">$ {{ prod.price }}</div>
            </nuxt-link>
          </div>
          <div class="card-footer">
            <button class="btn btn-block" @click="addToCart(prod)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Men",
  computed: {
    products() {
      return this.$store.getters.GET_ACCESSORIES_CAT;
    }
  },
  methods: {
    addToCart(product) {
      this.$toaster.success("Added to cart");
      this.$store.dispatch("ADD_TO_CART", product);
    }
  }
};
</script>

<style scoped>
.img-fluid {
  max-height: 250px;
}
</style>
