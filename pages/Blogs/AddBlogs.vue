<template>
  <div class="container py-5">
    <div class="row bg-white p-3">
      <div class="col-md-8">
        <div class="form-group">
          <label>Title</label>
          <input type="text" v-model="title" placeholder="Title" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            cols="30"
            rows="10"
            v-model="description"
            class="form-control"
            placeholder="Description"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click="addBlog">Add Blog</button>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <div class="image-placeholder" v-if="!url"></div>
            <img :src="url" alt v-else class="img-fluid" />
            <button class="btn-primary btn mt-3" @click="uploadImage">Add Product Image</button>
            <input type="file" ref="selectImage" class="d-none" @change="getFile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "AddBlogs",
  data() {
    return {
      title: null,
      description: null,
      url: null,
      image: null
    };
  },
  methods: {
    uploadImage() {
      this.$refs.selectImage.click();
    },
    getFile() {
      // get the image file
      const pic = event.target.files[0];
      // create url for preview
      const url = URL.createObjectURL(pic);
      this.url = url;
      this.image = pic;
    },
    addBlog() {
      // check for image
      if (!this.image) {
        // if no image then random (id) and the url of image will be null
        this.addToFirebase(null, null);
      } else {
        // random is like the id of the image to identify and make the relation to current blog
        const random = Date.now();
        // craeting the reference to firebase firestore
        const storageRef = firebase
          .storage()
          .ref("blogImages/" + random + ".jpg");
        const task = storageRef.put(this.image);
        task.on(
          "state_changed",
          snapShot => {},
          err => console.log(err),
          () => {
            // get the url of the image
            storageRef
              .getDownloadURL()
              .then(url => {
                // pass url to the firestore to save it
                this.addToFirebase(url, random);
              })
              .catch(err => {
                this.$toaster.error("Something Went Wrong...");
                console.log(err);
              });
          }
        );
      }
    },
    addToFirebase(image, image_id) {
      // make reference to the firestore
      const db = firebase.firestore().collection("blogs");
      // formating date
      let current_datetime = new Date();
      let formatted_date =
        current_datetime.getDate() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getFullYear();
      // pass the values to firestore
      db.add({
        title: this.title,
        description: this.description,
        date: formatted_date,
        image,
        image_id
      })
        .then(() => {
          // return to blogs page after successfully added the blog
          this.$toaster.success("Blog Added");
          this.$router.push("/Blog");
        })
        .catch(err => {
          //if there is some error
          this.$toaster.error("Something Went Wrong");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
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
