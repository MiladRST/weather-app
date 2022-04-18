<template>
  <div id="WeatherSlider">
    <VueSlickCarousel v-bind="settings">
      <div class="icon_wrapper">
        <img
          :src="require('../assets/images/01d.png')"
          width="84"
          height="844"
        />
      </div>
      <div class="icon_wrapper">
        <img
          :src="require('../assets/images/02d.png')"
          width="84"
          height="84"
        />
      </div>
      <div class="icon_wrapper">
        <img
          :src="require('../assets/images/04d.png')"
          width="84"
          height="84"
        />
      </div>
      <div class="icon_wrapper">
        <img
          :src="require('../assets/images/13d.png')"
          width="84"
          height="84"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "WeatherSlider",
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style scoped>
#WeatherSlider {
  max-width: 300px;
  margin: 25px auto;
}
.icon_wrapper img {
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>