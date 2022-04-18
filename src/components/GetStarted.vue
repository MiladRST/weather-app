<template>
  <div id="GetStarted">
    <div class="text-center">
      <h3 class="get_started-title">Discover the Weather in Your City</h3>
      <WeatherSlider />
      <router-link class="btn" to="/weather">Get Started</router-link>
    </div>
  </div>
</template>

<script>
import WeatherSlider from "./WeatherSlider.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "GetStarted",
  components: {
    WeatherSlider,
  },
};
</script>
<style scoped>
#GetStarted {
  transform: translate(0, 50%);
}
.get_started-title {
  font-size: 20px;
  color: #fff;
}
.btn {
  background-color: #0095ff;
  color: #fff;
}
.btn:hover {
  background-color: #006cb9;
  color: #fff;
}

@media (max-width: 500px) {
  .get_started-title {
    font-size: 17px;
  }
}
</style>
