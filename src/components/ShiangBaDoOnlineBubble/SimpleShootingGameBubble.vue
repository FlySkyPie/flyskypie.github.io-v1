 <template>
  <bubble :x="x" :y="y" id="simple-shooting-game">
    <text class="title" x="50" y="32">Simple Shooting Game</text>
    <image :href="imageUrl" x="5" y="40" width="50" height="30" />

    <g transform="translate(52,49) scale(0.09)">
      <foreignObject width="450" height="100">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          該項目最早的 prototype，主要實做 GUI 跟 2D 物理運算。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,80,60)">
      <github-button
        url="https://github.com/FlySkyPie/vb-simple-shooting-game"
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
    imageUrl: "./image/Simple-Shooting-game.png",
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
