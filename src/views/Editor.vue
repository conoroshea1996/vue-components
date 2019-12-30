<template>
  <div class="home">
    <JobListSection />

    <ImageGallerySlider />
  </div>
</template>

<script>
import ImageGallerySlider from "@/components/ImageGallerySlider";
import JobListSection from "@/components/JobListSection";

export default {
  name: "editor",
  components: {
    JobListSection,
    ImageGallerySlider
  }
};
</script>
