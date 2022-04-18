<template>
  <div id="NotFound">
    <img
      :src="require('../assets/images/notfound.svg')"
      class="img-fluid"
      alt=""
    />
    <p class="text-white text-center">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: ["message"],
};
</script>

<style scoped>
#NotFound {
  max-width: 300px;
  margin: 30px auto 15px auto;
}
p {
  margin: 15px;
}
img {
  filter: grayscale(1);
  opacity: 0.5;
}
</style>
