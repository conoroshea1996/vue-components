<template>
  <div class>
    <ColorPicker />
    <h1>Jobs</h1>
    <input type="number" name="quantity" min="1" :value="columns" @change="setColumns" />
    <h3>{{ columns }}</h3>
    <hr />
    <input type="text" v-if="searchInput" class="searchBar" />
    <styled-cols :cols="columns">
      <JobCard v-for="job in getJobs" :key="job.id" />
    </styled-cols>
  </div>
</template>

<script>
import styled from "vue-styled-components";
import { mapGetters, mapState } from "vuex";
import ColorPicker from "./ColorPicker";
import JobCard from "./JobCard";

const titleProps = { cols: Number };
const StyledCols = styled("div", titleProps)`
  font-size: 1.5em;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 20px;
`;

export default {
  components: {
    "styled-cols": StyledCols,
    JobCard,
    ColorPicker
  },
  computed: {
    ...mapState(["editor"]),
    ...mapGetters(["getJobs"]),
    columns() {
      return this.editor.jobSection.columns;
    },
    searchInput() {
      return this.editor.jobSection.searchBox;
    }
  },
  methods: {
    setColumns(e) {
      this.$store.dispatch("setColumns", parseInt(e.target.value));
    }
  }
};
</script>

<style>
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>