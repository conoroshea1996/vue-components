<template>
  <div>
    <div class="jumbotron" v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <h1>{{ Title }}</h1>
    </div>
    <input type="text" v-model="title" @keyup="setTitle(title)" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapState(["editor"]),
    backgroundImage() {
      return this.editor.jumbotron.jumbotronImage;
    },
    Title() {
      return this.editor.jumbotron.title;
    }
  },
  methods: {
    setTitle(title) {
      this.$store.dispatch("setTitle", title);
    }
  }
};
</script>

<style>
.jumbotron {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
.jumbotron textarea {
  opacity: 0;
}
.jumbotron textarea:focus {
  opacity: 0.6;
}
</style>
