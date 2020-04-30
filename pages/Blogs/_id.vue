<template>
  <div class="container py-5">
    <div class="row bg-white p-3">
      <div class="col-md-8">
        <div class="form-group">
          <label>Title</label>
          <input type="text" v-model="blog.title" placeholder="Title" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            cols="30"
            rows="10"
            v-model="blog.description"
            class="form-control"
            placeholder="Description"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click="addBlog">Update Blog</button>
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
      image: null,
      url: null,
      blog: {
        title: null,
        description: null,
        image: null
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
      // create the url to preview the image
      const url = URL.createObjectURL(pic);
      this.url = url;
      this.image = pic;
    },
    addBlog() {
      // checking if the user added the image bcz image is optional
      if (!this.image) {
        this.addToFirebase(this.blog.image, this.blog.image_id);
      } else {
        // random is like the id of the image to identify and make the relation to that blog
        const random = this.blog.image_id;
        // create the reference to firebase storeage to store tha image
        const storageRef = firebase
          .storage()
          .ref("blogImages/" + random + ".jpg");
        const task = storageRef.put(this.image);
        task.on(
          "state_changed",
          snapShot => {},
          err => console.log(err),
          () => {
            // this will run when image is saved to firebase and get the url of the image to save in the firestore
            storageRef
              .getDownloadURL()
              .then(url => {
                // save the blod to firebase
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
      const db = firebase.firestore().collection("blogs");
      // get the blog from id provided the route params and update it
      db.doc(this.$route.params.id)
        .update({
          title: this.blog.title,
          description: this.blog.description,
          date: Date.now(),
          image,
          image_id
        })
        .then(() => {
          // after the blog is saved
          this.$toaster.success("Blog Updated");
          this.$router.push("/Blog");
        })
        .catch(err => {
          this.$toaster.error("Something Went Wrong");
          console.log(err);
        });
    }
  },
  created() {
    // load the specific blogssss
    const db = firebase.firestore().collection("blogs");
    db.doc(this.$route.params.id)
      .get()
      .then(data => {
        let getBlog = data.data();
        getBlog.id = data.id;
        this.url = getBlog.image;
        this.blog = getBlog;
      });
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
