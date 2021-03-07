 <template>
  <bubble :x="x" :y="y" class="root">
    <text class="title" x="50" y="25">大學專題</text>
    <text class="sub-title" x="50" y="30"
      >Production of an equipment which</text
    >
    <text class="sub-title" x="50" y="34"
      >makes aluminium items from recycled cans</text
    >
    <image :href="imageUrl" x="20" y="36" width="60" height="40" />
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";

export default {
  props: {
    x: {
      type: String,
      default: "0",
    },
    y: {
      type: String,
      default: "0",
    },
  },
  components: {
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/final_project.png",
  }),
};
</script>

<style scoped>
.root {
  font-style: normal;
  font-weight: normal;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  text-anchor: middle;
}
.title {
  font-size: 6px;
}

.sub-title {
  font-size: 3.5px;
}
</style>
