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
    v-on:wheel="handScroll"
  >
    <camera :viewWidth="viewWidth" :viewHeight="viewHeight" ref="camera">
      <bubble x="0" y="0" title="Space Dream" />
      <simple-staellite-launch-game x="12" y="98" />
      <ascii-empire x="-147" y="390" />
      <a4-homework x="65" y="668" />
      <simple-forum x="133.12" y="562" />
      <simple-typing-game x="295" y="358" />
      <simple-bullet-hell x="238" y="473" />
      <shiangbado-online x="-170" y="613" />
      <braver-of-flames-respawn x="58" y="340" />
      <the-key-of-huanche x="-435" y="53.491" />
      <profile-bubble x="-12.48" y="-89" />
    </camera>
  </svg>
</template>

<script>
import ProfileBubble from "../components/ProfileBubble/ProfileBubble.vue";
import Bubble from "./SimpleBubble.vue";
import SimpleSatelliteLaunchGame from "../components/SimpleSatelliteLaunchGameBubble/SimpleSatelliteLaunchGameBubble.vue";
import AsciiEmpireBubble from "../components/AsciiEmpireBubble/AsciiEmpireBubble.vue";
import A4HomeworkBubble from "../components/A4HomeworkBubble/A4HomeworkBubble.vue";
import SimpleForumBubble from "../components/SimpleForumBubble/SimpleForumBubble.vue";
import SimpleTypingGameBubble from "../components/SimpleTypingGameBubble/SimpleTypingGameBubble.vue";
import SimpleBulletHellBubble from "../components/SimpleBulletHellBubble/SimpleBulletHellBubble.vue";
import ShiangBaDoOnlineBubble from "../components/ShiangBaDoOnlineBubble/ShiangBaDoOnlineBubble.vue";
import BraverOfFlamesRespawnBubble from "../components/BraverOfFlamesRespawnBubble/BraverOfFlamesRespawnBubble.vue";
import TheKeyOfHuancheBubble from "../components/TheKeyOfHuancheBubble/TheKeyOfHuancheBubble.vue";

import Camera from "../components/Camera.vue";

export default {
  components: {
    camera: Camera,
    bubble: Bubble,
    "profile-bubble": ProfileBubble,
    "simple-staellite-launch-game": SimpleSatelliteLaunchGame,
    "ascii-empire": AsciiEmpireBubble,
    "a4-homework": A4HomeworkBubble,
    "simple-forum": SimpleForumBubble,
    "simple-typing-game": SimpleTypingGameBubble,
    "simple-bullet-hell": SimpleBulletHellBubble,
    "shiangbado-online": ShiangBaDoOnlineBubble,
    "braver-of-flames-respawn": BraverOfFlamesRespawnBubble,
    "the-key-of-huanche": TheKeyOfHuancheBubble,
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
    handScroll: function (event) {
      this.$refs.camera.scroll(event);
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
