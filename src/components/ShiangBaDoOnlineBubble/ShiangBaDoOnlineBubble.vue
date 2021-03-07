<template>
  <bubble :x="x" :y="y" id="shiang-ba-do-online" :size="3.18" class="root">
          <text class="sub-title" x="57" y="151">項目大約啟動於：2012-01-31</text>
      <text x="57" y="170">ShiangBaDo Online</text>
      <website-bubble x="84" y="231"/>
      <simple-3d-shooting-game x="213" y="237"/>
      <simple-shooting-game x="100" y="80"/>
      <simple-shooting-game-network x="235" y="97" />
  </bubble>
</template>

<script>
import ShiangBaDoOnlineWebsiteBubble from "./ShiangBaDoOnlineWebsiteBubble.vue";
import Simple3DShootingGameBubble from './Simple3DShootingGameBubble.vue';
import SimpleShootingGameBubble from './SimpleShootingGameBubble.vue';
import SimpleShootingGameNetworkBubble from './SimpleShootingGameNetworkBubble.vue';
import Bubble from "../Bubble.vue";

export default {
  components: {
    "website-bubble": ShiangBaDoOnlineWebsiteBubble,
    "simple-3d-shooting-game": Simple3DShootingGameBubble,
    "simple-shooting-game": SimpleShootingGameBubble,
    "simple-shooting-game-network": SimpleShootingGameNetworkBubble,
    bubble: Bubble,
  },
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
  computed: {
  },
};
</script>

<style scoped>
.root {
  font-style: normal;
  font-weight: normal;
  font-size: 21.3684px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
}

.sub-title {
  font-size: 8.872px;
  line-height: 1.25;
}

.backgound {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.61;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}
</style>
