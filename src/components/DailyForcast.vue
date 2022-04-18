<template>
  <div id="DailyForcast">
    <div class="text-white">Next 48 hours:</div>
    <hr />
    <ul v-if="hourly">
      <template v-for="(item, index) in hourly">
        <li :key="index" v-if="index % 2 === 0">
          <div class="hourly_forcast">
            <span class="hourly_forcast-day">
              {{ getForcastDay(item.dt) }}
            </span>
            <span class="hourly_forcast-time"
              >{{ getForcastTime(item.dt) }}
            </span>
            <div class="hourly_forcast-icon">
              <img
                :src="
                  require('../assets/images/' + item.weather[0].icon + '.png')
                "
                width="38"
                height="38"
                class="img-fluid"
              />
            </div>

            <span class="mx-2">{{ Math.round(item.temp) }} <sup>°C</sup> </span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
const API_KEY = "4382820323ae4ab91c338375ef00ae1f";

export default {
  name: "DailyForcast",
  props: ["coords"],
  data() {
    return {
      locLat: 0,
      locLon: 0,
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      hourly: [],
      showHourly: false,
    };
  },
  mounted() {
    this.getDailyForcast();
  },

  methods: {
    getDailyForcast() {
      this.locLat = this.coords[0];
      this.locLon = this.coords[1];
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.locLat}&lon=${this.locLon}&exclude=daily&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          let { hourly } = response.data;
          this.hourly = [...hourly];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getForcastDay(item) {
      return this.weekDays[new Date(item * 1000).getDay()];
    },

    getForcastTime(item) {
      return new Date(item * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },

  watch: {
    coords() {
      this.getDailyForcast();
    },
  },
};
</script>

<style scoped>
ul {
  padding-inline-start: 0;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  overflow: auto;
}
li {
  list-style-type: none;
  display: inline-block;
  margin: 15px 3px;
}
.hourly_forcast {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hourly_forcast-day {
  color: #fff;
}
.hourly_forcast-time {
  font-size: 14px;
}
.hourly_forcast-icon {
  width: 38px;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul::-webkit-scrollbar {
  height: 8px;
}
ul::-webkit-scrollbar-track {
  background: #090b37;
  border-radius: 8px;
}
ul::-webkit-scrollbar-thumb {
  background: #a6a6a6;
  border-radius: 8px;
}
ul::-webkit-scrollbar-thumb:hover {
  background: #a6a6a6;
}
</style>
