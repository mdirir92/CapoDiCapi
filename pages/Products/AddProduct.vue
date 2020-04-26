<template>
  <div class="products pt-5">
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
                    v-model="title"
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
                    v-model="price"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Category</label>
                  <select name id class="custom-select" v-model="category">
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Quantity</label>
                  <select name id class="custom-select" v-model="quantity">
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
                    v-model="description"
                    placeholder="Description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" @click="addProduct">
                Add Product
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="image-placeholder" v-if="!url"></div>
                <img :src="url" alt v-else class="img-fluid" />
                <p class="text-danger" v-if="error">{{ error }}</p>
                <button class="btn-primary btn mt-3" @click="uploadImage">
                  Add Product Image
                </button>
                <input
                  type="file"
                  ref="selectImage"
                  class="d-none"
                  @change="getFile"
                />
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
  name: "AddProduct",
  data() {
    return {
      url: null,
      prodImage: null,
      error: null,
      category: null,
      title: null,
      price: null,
      quantity: null,
      description: null
    };
  },
  methods: {
    uploadImage() {
      this.$refs.selectImage.click();
    },
    getFile() {
      const pic = event.target.files[0];
      const url = URL.createObjectURL(pic);
      this.url = url;
      this.prodImage = pic;
    },
    validation() {
      if (
        this.category &&
        this.quantity &&
        this.description &&
        this.price &&
        this.title
      ) {
        return true;
      } else {
        return false;
      }
    },
    addProduct() {
      if (this.validation() && this.prodImage) {
        this.uploadImageFirebase();
      } else {
        this.feedback = "Please Fill all the fields...";
        setTimeout(() => {
          this.feedback = null;
        }, 3000);
      }
    },
    uploadImageFirebase() {
      const random = Math.round(Math.random() * 9999999999);
      const storageRef = firebase.storage().ref("products/" + random + ".jpg");
      const task = storageRef.put(this.prodImage);
      let loader = this.$loading.show();
      task.on(
        "state_changed",
        snapShot => {},
        err => console.log(err),
        () => {
          storageRef.getDownloadURL().then(url => {
            const db = firebase.firestore();
            db.collection("products")
              .add({
                title: this.title,
                price: this.price,
                category: this.category,
                quantity: this.quantity,
                description: this.description,
                image: url,
                image_random: random
              })
              .then(() => {
                loader.hide();
                this.$toaster.success("Product Added...");
                this.$router.push("/");
              })
              .catch(err => console.log(err));
          });
        }
      );
    }
  }
};
</script>

<style scoped>
.products {
  background: url(../../assets/images/Capo.png);
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
