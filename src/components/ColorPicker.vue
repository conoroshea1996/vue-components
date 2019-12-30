<template>
  <div>
    <styled-box :color="ThemeColor" />
    <color-picker v-model="color" @colorChange="setColor"></color-picker>
  </div>
</template>

<script>
import ColorPicker from "vue-color-picker-wheel";
import { mapState } from "vuex";
import styled from "vue-styled-components";

const boxProps = { color: String };
const x = styled("div", boxProps)`
  background-color: ${props => props.color};
  height: 100px;
  width: 100px;
`;

export default {
  components: {
    ColorPicker,
    "styled-box": x
  },
  data: function() {
    return {
      color: ""
    };
  },
  methods: {
    setColor() {
      this.$store.dispatch("setColor", this.color);
    }
  },
  computed: {
    ...mapState(["editor"]),
    ThemeColor() {
      return this.editor.jobSection.color;
    }
  }
};
</script>

<style>
</style>