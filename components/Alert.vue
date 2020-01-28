<template>
  <div >
    <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
    </div>
  </div>

</template>

<script>
export default {
    name: "Alert"
};
</script>


<style>

.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}
</style>
