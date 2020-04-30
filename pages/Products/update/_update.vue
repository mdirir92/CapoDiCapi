<template>
  <div class="products py-5">
    <div class="container">
      <div class="form bg-white p-3">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    required
                    v-model="product.title"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for>Price</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Price"
                    required
                    v-model="product.price"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Category</label>
                  <select name id class="custom-select" v-model="product.category">
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Quantity</label>
                  <select name id class="custom-select" v-model="product.quantity">
                    <option :value="n" v-for="n in 20" :key="n">{{ n }}</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea
                    cols="1"
                    rows="4"
                    v-model="product.description"
                    placeholder="Description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" @click="addProduct">Edit Product</button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="image-placeholder" v-if="!product.image"></div>
                <img :src="product.image" alt v-else class="img-fluid" />
                <p class="text-danger" v-if="error">{{ error }}</p>
                <button class="btn-primary btn mt-3" @click="uploadImage">Add Product Image</button>
                <input type="file" ref="selectImage" class="d-none" @change="getFile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "UpdateProduct",
  data() {
    return {
      url: null,
      error: null,
      prodImage: null,
      product: {
        title: "",
        price: null,
        category: "",
        quantity: "",
        description: "",
        image: "",
        image_random: ""
      }
    };
  },
  methods: {
    uploadImage() {
      this.$refs.selectImage.click();
    },
    getFile() {
      // get the image file
      const pic = event.target.files[0];
      // create url for image preview
      const url = URL.createObjectURL(pic);
      this.product.image = url;
      this.prodImage = pic;
    },
    validation() {
      // validating if all the values are available
      if (
        this.product.category &&
        this.product.quantity &&
        this.product.description &&
        this.product.price &&
        this.product.title
      ) {
        return true;
      } else {
        return false;
      }
    },
    addProduct() {
      if (this.validation()) {
        // if validation is true
        // check if the user chenage the image
        if (this.prodImage) {
          this.uploadImageFirebase();
        } else {
          // if user do not change the image
          this.UpdateProduct(this.product.image);
        }
      } else {
        // if validation is missing somethinf
        this.feedback = "Please Fill all the fields...";
        setTimeout(() => {
          this.feedback = null;
        }, 3000);
      }
    },
    uploadImageFirebase() {
      let loader = this.$loading.show();
      // creating random number represent id of the image and to create the relation with the current product
      const random = Math.round(Math.random() * 9999999999);
      // creating reference with the firebase storage
      const storageRef = firebase.storage().ref("products/" + random + ".jpg");
      const task = storageRef.put(this.prodImage);
      task.on(
        "state_changed",
        snapShot => {},
        err => console.log(err),
        () => {
          // getting the url of the image when it is successfully updated
          storageRef.getDownloadURL().then(url => {
            const db = firebase.firestore();
            // find the product from the given id provided the route params (update === id)
            db.collection("products")
              .doc(this.$route.params.update)
              // updating the values of the product
              .update({
                title: this.product.title,
                price: this.product.price,
                category: this.product.category,
                quantity: this.product.quantity,
                description: this.product.description,
                image,
                image_random: this.product.image_random
              })
              .then(() => {
                loader.hide();
                this.$toaster.success("Product Updated...");
                // redirect to home page
                this.$router.push("/");
              })
              .catch(err => console.log(err));
          });
        }
      );
    },
    // this will execute if user not change the product image
    UpdateProduct(image) {
      let loader = this.$loading.show();
      const db = firebase.firestore();
      db.collection("products")
        .doc(this.$route.params.update)
        .update({
          title: this.product.title,
          price: this.product.price,
          category: this.product.category,
          quantity: this.product.quantity,
          description: this.product.description,
          image,
          image_random: this.product.image_random
        })
        .then(() => {
          loader.hide();
          this.$router.push("/");
          this.$toaster.success("Product Updated...");
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    products() {
      return this.$store.getters.GET_PRODUCTS;
    }
  },
  created() {
    // load the specific product from firebase according to id
    const id = this.$route.params.update;
    const db = firebase.firestore();
    db.collection("products")
      .doc(id)
      .get()
      .then(data => {
        const prod = data.data();
        prod.id = id;
        this.product = prod;
      });
  }
};
</script>

<style scoped>
.products {
  background: url(../../../assets/images/Capo.png);
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.image-placeholder {
  height: 225px;
  width: 100%;
  background: #ddd;
}
.img-fluid {
  max-height: 225px;
}

.form-group {
  text-align: left;
}
</style>
