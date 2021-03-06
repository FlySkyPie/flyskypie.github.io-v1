 <template>
  <bubble :x="x" :y="y">
    <text class="title" xml:space="preserve" x="50" y="32"
      >Simple Typing Game</text
    >
    <image :href="imageUrl" x="6.8450508" y="40" width="40" height="26.2" />
    <g transform="translate(48,40) scale(0.09)">
      <foreignObject width="550" height="350">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <p style="margin-top: 0px">
            高職時萍水相逢的指導老師（？）出了題目：
          </p>
          「你就寫個可以練習中文輸入法的程式吧！」
          <p>
            於是這玩意兒就出現了，雖然我相信這東西應該跟他出題的意圖長得不太一樣。界面比例跟連擊的設計是參考周遭同學玩很兇的神◯之塔。
          </p>
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,83,62)">
      <github-button url="https://github.com/FlySkyPie/vb-simple-typing-game" />
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
    imageUrl: "./image/simple-type-game.png",
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
