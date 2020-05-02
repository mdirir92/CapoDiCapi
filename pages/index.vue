<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="img-container">
      <img src="@/assets/images/Capo.png" alt="Logo" class="img-fluid" />
    </div>
    <!-- About Section -->

    <!-- <section class="footer_banner" id="contact">
    <h2 class="hidden">Footer Banner Section </h2>
    <p class="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
    <div class="button">subscribe</div>
    </section>-->
    <!-- Copyrights Section -->

    <!-- <div class="copyright">&copy;2015 - <strong>Light Theme</strong></div> -->

    <!-- <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    </b-carousel>-->
  </div>

  <!-- Main Container Ends -->
</template>

<script>
export default {
  name: "Index",
  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    }
  },
  created() {}
};
</script>

<style scoped>
@charset "UTF-8";
/* Body */
body {
  font-family: source-sans-pro;
  background-color: #f2f2f2;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-style: normal;
  font-weight: 200;
}
/* Container */

.img-fluid {
  height: 76vh;
}

@media (max-width: 500px) {
  .img-fluid {
    height: 67vh;
  }
}

@media (max-width: 370px) {
  .img-fluid {
    height: 63vh;
  }
}

.img-container {
  display: flex;
  flex-direction: column;
  margin-top: -20px;
}

.selector-for-some-widget {
  box-sizing: content-box;
}

/* About Section */
.text_column {
  width: 29%;
  text-align: justify;
  font-weight: lighter;
  line-height: 25px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  color: #a3a3a3;
}
.about {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 35px;
  display: inline-block;
  background-color: #ffffff;
  margin-top: 0px;
}
/* Stats Gallery */
.stats {
  color: #717070;
  margin-bottom: 5px;
}
.gallery {
  clear: both;
  display: inline-block;
  width: 100%;
  background-color: #ffffff;
  /* [disabled]min-width: 400px;
*/
  padding-bottom: 35px;
  padding-top: 0px;
  margin-top: -5px;
  margin-bottom: 0px;
}
.thumbnail {
  width: 25%;
  text-align: center;
  float: left;
  margin-top: 35px;
}
.gallery .thumbnail h4 {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  color: #52bad5;
}
.gallery .thumbnail p {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #a3a3a3;
}

/* More info */
footer {
  background-color: #ffffff;
  padding-bottom: 35px;
}
.footer_column {
  width: 50%;
  text-align: center;
  padding-top: 30px;
  float: left;
}
footer .footer_column h3 {
  color: #b3b3b3;
  text-align: center;
}
footer .footer_column p {
  color: #717070;
  background-color: #ffffff;
}
.cards {
  width: 100%;
  height: auto;
  max-width: 400px;
  max-height: 200px;
}
footer .footer_column p {
  padding-left: 30px;
  padding-right: 30px;
  text-align: justify;
  line-height: 25px;
  font-weight: lighter;
  margin-left: 20px;
  margin-right: 20px;
}
.button {
  width: 200px;
  margin-top: 40px;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
  text-align: center;
  vertical-align: middle;
  border-radius: 0px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  border: 3px solid #ffffff;
  color: #ffffff;
  transition: all 0.3s linear;
}
.button:hover {
  background-color: #fefefe;
  color: #c4c4c4;
  cursor: pointer;
}
.copyright {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: black;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 2px;
  border-top-width: 2px;
}
.footer_banner {
  background-color: black;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-bottom: 0px;
  /* background-image: url(../images/pattern.png); */
  background-repeat: repeat;
}
footer {
  display: inline-block;
}
.hidden {
  display: none;
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
  header nav ul {
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
