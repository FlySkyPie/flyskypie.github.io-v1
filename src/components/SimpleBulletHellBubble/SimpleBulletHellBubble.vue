 <template>
  <bubble :x="x" :y="y">
    <text class="title" xml:space="preserve" x="50" y="32"
      >Simple Bullet Hell</text
    >
    <image :href="imageUrl" x="17" y="37" width="29" height="40" />
    <g transform="translate(48,45) scale(0.09)">
      <foreignObject width="550" height="150">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          高職時在某堂課上，衝著科主任一句話「電腦教室不准玩遊戲，測試你們自己寫的程式除外」，寫出來的東西，當下只完成到一半，放學後才繼續寫得比較完整的。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,83,62)">
      <github-button url="https://github.com/FlySkyPie/vb-simple-bullet-hell" />
    </g>
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";
import GithubButton from "../GithubButton.vue";

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
    "github-button": GithubButton,
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/simple-bullet-hell.png",
  }),
};
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 6px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  fill: #000000;
  fill-opacity: 1;
  stroke: none;
  stroke-width: 0.181456;
  dominant-baseline: middle;
  text-anchor: middle;
}

.embeded-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 1.5rem;
}
</style>
