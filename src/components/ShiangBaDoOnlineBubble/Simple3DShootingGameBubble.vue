 <template>
  <bubble :x="x" :y="y">
    <text class="title" x="50" y="32">Simple 3D Shooting Game</text>
    <image :href="imageUrl" x="9" y="36" width="50" height="38" />
    <g transform="translate(60,50) scale(0.09)">
      <foreignObject width="400" height="200">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          基於 VB.NET 手刻的 3D 向量繪圖的
          FPS。不過對個人經驗成長貢獻最多的是手刻視窗控件，對我日後學習視窗化函式庫有多的幫助。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,82,65)">
      <github-button
        url="https://github.com/FlySkyPie/vb-simple-3d-shooting-game"
      />
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
    imageUrl: "./image/Simple-3D-Shooting-Game.png",
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
  overflow-y: scroll;
  font-size: 1.5rem;
}
</style>
