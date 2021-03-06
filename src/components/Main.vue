 <template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    :width="viewWidth"
    :height="viewHeight"
    version="1.1"
    style="height: 100%; width: 100%; cursor: default"
  >
    <camera :viewWidth="viewWidth" :viewHeight="viewHeight">
      <bubble x="0" y="0" title="Space Dream" />
      <simple-staellite-launch-game x="12" y="98" />
      <profile-bubble x="-12.48" y="-89" />
    </camera>
  </svg>
</template>

<script>
import ProfileBubble from "../components/ProfileBubble/ProfileBubble.vue";
import Bubble from "./SimpleBubble.vue";
import SimpleSatelliteLaunchGame from "../components/SimpleSatelliteLaunchGameBubble/SimpleSatelliteLaunchGameBubble.vue";

import Camera from "../components/Camera.vue";

export default {
  components: {
    camera: Camera,
    bubble: Bubble,
    "profile-bubble": ProfileBubble,
    "simple-staellite-launch-game": SimpleSatelliteLaunchGame,
  },
  data: () => ({
    viewWidth: 1024,
    viewHeight: 768,
  }),
  methods: {
    route: function (message) {},
    test: function () {
      //console.log(Creator.getTestDom());
    },
    handleResize: function (event) {
      this.viewWidth = document.documentElement.clientWidth;
      this.viewHeight = document.documentElement.clientHeight;
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.handleResize);

      //Init
      this.handleResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
