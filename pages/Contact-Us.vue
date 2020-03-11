<template>
  <div class="container">
  <!-- <div class="img-container">
    <img :src="require('assets/images/Capo.png')" alt="Logo">
  </div> -->
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="name" class="form-control" id="inputEmail4">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Last Name</label>
      <input type="name" class="form-control" id="inputEmail4">
    </div>
    </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Confirmation Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
  </div>
  <div class="form-group">
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="state">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group col-md-10">
      <label for="inputPassword4">Message</label>
      <input type="password" class="form-control" id="Message">
    </div>
  <div class="form-group">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
<!-- Main Container Ends -->
</template>

<style scoped>


element.style {
}
input {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#inputEmail4 {
  width: 300px !important;
}
#inputPassword4{
  size: 200px;
}
#Message{
  size: 200px;
  height: 100px;
}

select {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.state {
  display: flex;
  flex-direction: column;
}
button {
  margin: auto;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin-top: 20px;
}

.container {
    /* background-color: #FFFFFF; */
    background-image: url(~assets/images/Coming-Soon.jpg);
    height: 100vh;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form {
  background-color: transparent;
  margin: auto;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
}


.img-container {
  display: flex;
  flex-direction: column;
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
    background-color: #2D9AB7;
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
@media (min-width: 321px)and (max-width: 767px) {
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