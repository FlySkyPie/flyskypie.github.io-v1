<template>
  <g :transform="position">
    <g transform="translate(-159,-159)" class="root">
      <circle class="backgound" cx="159" cy="159" r="158" />
      <the-25d-engine x="86" y="225" />
      <braver-of-flames x="194" y="77" />
      <text class="sub-title" x="40" y="145">項目大約啟動於：2014-03-30</text>
      <text class="title" x="40" y="165">Braver of Flames - Respawn</text>
      <text x="144.93825" y="190">自從 RPG 製作大師帶我走進自製遊戲</text>
      <text x="144.93825" y="200">的世界，自製遊戲的願望就從來沒有從</text>
      <text x="144.93825" y="210">我心中消失過。</text>

      <text x="144.93825" y="230">開始學習 VB.NET 後，給了我一</text>
      <text x="144.93825" y="240">絲完成未竟之事的希望，於是我</text>
      <text x="144.93825" y="250">試著以此為題目，用掌握的技術</text>
      <text x="144.93825" y="260">去推進實作極限的邊界。</text>
    </g>
  </g>
</template>

<script>
import Simple25DEngineBubble from "./Simple25DEngineBubble.vue";
import BraverOfFlamesBubble from "./BraverOfFlamesBubble.vue";

export default {
  components: {
    "the-25d-engine": Simple25DEngineBubble,
    "braver-of-flames": BraverOfFlamesBubble,
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
    position: function () {
      return `translate(${this.x},${this.y})`;
    },
  },
};
</script>

<style scoped>
.root {
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  white-space: pre;
}

.title {
  font-size: 21.3684px;
  line-height: 1.25;
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
