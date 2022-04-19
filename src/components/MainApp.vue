<template>
  <div id="MainApp">
    <SearchCity @userLocation="getUserLocation" />

    <div class="text-center loading_wrapper" v-if="isLoading">
      <LoadingSpinner />
    </div>

    <NotFound v-if="hasError" :message="errorMsg" />

    <div v-if="isFetched">
      <CurrentWeather
        :location="currentLocation"
        :main="weatherTemp"
        :weather="weatherDesc"
        :loading="isLoading"
      />

      <template>
        <DailyForcast :coords="[locationCoord.lat, locationCoord.lon]" />
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchCity from "./SearchCity";
import CurrentWeather from "./CurrentWeather.vue";
import DailyForcast from "./DailyForcast.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import NotFound from "./NotFound.vue";

const API_KEY = "4382820323ae4ab91c338375ef00ae1f";

export default {
  name: "MainApp",
  data() {
    return {
      currentLocation: "",
      weatherTemp: {},
      weatherDesc: {},
      locationCoord: {},
      isLoading: false,
      isFetched: false,
      hasError: false,
      errorMsg: "",
    };
  },
  methods: {
    getUserLocation(data) {
      this.currentLocation = data;
    },
  },
  components: {
    SearchCity,
    CurrentWeather,
    DailyForcast,
    LoadingSpinner,
    NotFound,
  },
  watch: {
    currentLocation() {
      this.isLoading = true;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.currentLocation}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          let { main, weather, coord } = response.data;
          if (main) {
            this.isLoading = false;
            this.isFetched = true;
            this.hasError = false;
          }
          this.currentLocation = response.data.name;
          this.locationCoord = { ...coord };
          this.weatherTemp = { ...main };
          this.weatherDesc = weather[0];
        })
        .catch((error) => {
          this.isLoading = false;
          this.isFetched = false;
          this.hasError = true;
          let { data } = error.response;
          if (data.cod === "404") {
            this.errorMsg = "Location is not available!";
          } else {
            this.errorMsg = "Something went wrong !";
          }
        });
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #0095ff;
  color: #fff;
}
.btn:hover {
  background-color: #006cb9;
  color: #fff;
}
</style>
