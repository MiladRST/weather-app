<template>
  <div id="CurrentWeather" v-if="!loading">
    <h3 class="text-white">{{ location }}</h3>
    <div>{{ getTimeNow }}</div>
    <div class="icon_wrapper my-1" v-if="weather.icon">
      <img
        :src="require('../assets/images/' + weather.icon + '.png')"
        width="84"
        height="84"
        class="img-fluid"
        :alt="weather.main"
        :title="weather.main"
      />
    </div>
    <h3 class="text-white">
      {{ Math.round(main.temp) }}
      <sup :class="{ 'text-warning': main.temp > 25 }">°C</sup>
    </h3>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: ["location", "main", "weather", "loading"],
  data() {
    return {
      loadImg: false,
      month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  computed: {
    getTimeNow() {
      let now = new Date();
      return `
      ${now.getDate()}
      ${this.month[now.getMonth()]} 
      ${now.getFullYear()}
       `;
    },
  },
};
</script>

<style scoped>
#CurrentWeather {
  max-width: 150px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon_wrapper {
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
}
sup {
  color: #219ebc;
}
</style>
