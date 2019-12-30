<template>
  <div class>
    <Jumbotron />
    <h3>Search for Images</h3>
    <div class="slider">
      <input
        type="text"
        v-model="ImageQuery"
        @keyup.enter="
          currentPage = 1;
          searchImage();
        "
      />
      <div
        class="arrows right"
        @click="
          currentPage++;
          searchImage();
        "
      >
        next
      </div>
      <div
        class="arrows left"
        v-if="currentPage > 1"
        @click="
          currentPage--;
          searchImage();
        "
      >
        prev
      </div>
      <div class="image-slider">
        <div
          class="image"
          v-for="image in images"
          :key="image.id"
          @click="setBackground(image.urls.regular)"
          v-bind:style="{
            'background-image': 'url(' + image.urls.regular + ')'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron";
export default {
  components: { Jumbotron },
  data: function() {
    return {
      images: null,
      ImageQuery: "",
      currentPage: 1
    };
  },
  methods: {
    searchImage() {
      this.getImages(this.ImageQuery);
    },
    getImages(query) {
      fetch(
        `https://api.unsplash.com/search/photos?page=${
          this.currentPage
        }&per_page=4&query=${
          query ? query : "office"
        }&client_id=2be2301724cba0658caf8a94c890a17cc067b1fc83867f0de02a3ec357c6ec59`
      )
        .then(respones => respones.json())
        .then(data => (this.images = data.results))
        .catch(error => console.log(error));
    },
    setBackground(image) {
      this.$store.dispatch("setBackground", image);
    }
  },
  mounted() {
    this.getImages();
  }
};
</script>

<style scoped>
.slider {
  height: 250px;
  border: solid lightgray 1px;
  width: 100%;
  position: relative;
}
.slider input {
  width: 80%;
  margin: auto;
}
.image-slider {
  margin-top: 10px;
  display: grid;
  height: 200px;
  grid-template-columns: repeat(4, 1fr);
  padding: 5px;
}
.arrows {
  position: absolute;
  top: 50%;
  z-index: 10;
  font-size: 2rem;
  color: white;
  font-weight: bold;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.image {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}
</style>
