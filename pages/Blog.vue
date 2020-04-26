<template>
  <div class="container py-5">
    <p class="text-right" v-if="user && user.user_type === 'admin'">
      <nuxt-link class="btn btn-primary" to="/Blogs/AddBlogs"
        >Add Blog</nuxt-link
      >
    </p>

    <div class="card mb-3" v-for="(blog, index) in blogs" :key="blog.id">
      <div class="card-header d-flex justify-content-between">
        <h2>{{ blog.title }}</h2>
        <span>Date: {{ blog.date }}</span>
      </div>
      <div class="card-body">
        <div class="blog-image" v-if="blog.image">
          <img :src="blog.image" class="img-fluid" />
        </div>
        <p class="m-0">{{ blog.description }}</p>
      </div>
      <div class="card-footer" v-if="user && user.user_type === 'admin'">
        <nuxt-link class="btn btn-warning" :to="'Blogs/' + blog.id"
          >Edit</nuxt-link
        >
        <button class="btn btn-danger" @click="deleteBlog(blog.id, index)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Blog",
  data() {
    return {
      blogs: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.GET_USER;
    }
  },
  created() {
    const db = firebase.firestore().collection("blogs");

    db.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          let blog = doc.data();
          blog.id = doc.id;
          this.blogs.push(blog);
        }
      });
    });
  },
  methods: {
    deleteBlog(id, index) {
      let loader = this.$loading.show();
      const db = firebase.firestore().collection("blogs");
      const image = firebase
        .storage()
        .ref("blogImages/" + this.blogs[index].image_id + ".jpg");
      db.doc(id)
        .delete()
        .then(() => {
          if (image.name === "null.jpg") {
            this.$toaster.warning("Blog Deleted...");
            this.blogs = this.blogs.filter(blog => {
              return blog.id !== id;
            });
            loader.hide();
          } else {
            image
              .delete()
              .then(() => {
                this.$toaster.warning("Blog Deleted...");
                this.blogs = this.blogs.filter(blog => {
                  return blog.id !== id;
                });
                loader.hide();
              })
              .catch(err => {
                this.$toaster.error("Something Went Wrong...");
                console.log(err);
                loader.hide();
              });
          }
        })
        .catch(err => {
          this.$toaster.error("Something Went Wrong...");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.img-fluid {
  max-height: 340px;
}
</style>
