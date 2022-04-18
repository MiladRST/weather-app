<template>
  <div id="SearchCity">
    <div class="search_title">Search Your Location</div>
    <p class="search_desc">
      Find the area or city that you want to know the detailed weather info at
      this time.
    </p>
    <div class="search_form">
      <input
        type="text"
        class="form-control"
        ref="cityInput"
        v-model="location"
      />
      <button class="btn" @click="getCity">
        <i class="fa-regular fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCity",
  data() {
    return {
      location: "",
    };
  },
  methods: {
    getCity() {
      if (this.location.trim() === "") {
        console.log("it is empty");
      } else {
        this.$emit("userLocation", this.location);
        this.$refs.cityInput.value = "";
      }
    },
  },
};
</script>

<style scoped>
.search_title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: #fff;
}
.search_desc {
  max-width: 320px;
  margin: 0 auto 15px auto;
  text-align: center;
}
.search_form {
  position: relative;
}
input {
  padding-left: 35px;
  padding-right: 35px;
  background-color: #090b37;
  color: #fff;
  border-color: transparent;
  text-align: center;
  border-radius: 16px;
  height: 42px;
  font-size: 15px;
}
input:focus {
  background-color: #090b37;
  color: #fff;
  box-shadow: none;
  border-color: transparent;
}

button {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  transition: all 0.3s ease;
}
button:hover {
  color: #fff;
  opacity: 0.5;
}
button:focus {
  box-shadow: none;
}
</style>
