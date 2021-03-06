 <template>
  <bubble :x="x" :y="y">
    <text class="title" xml:space="preserve" x="50" y="32"
      >程式蠱 (Empire)</text
    >
    <image
      :href="imageUrl"
      x="6.8450508"
      y="40"
      width="40"
      height="26.2"
    />

    <g transform="translate(51,40) scale(0.09)">
      <foreignObject width="450" height="350">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          高三的時候學校有上C語言的課（用來寫單晶片），不過同學普遍興趣缺缺，都利用電腦課打game，高三快畢業的時候，突發奇想，想讓寫C這件事變得更有趣味性，或許可以勾起同學們興趣。最後當然是失敗了。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,80,60)">
      <github-button
        url="https://github.com/FlySkyPie/ascii-empire"
      />
    </g>
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";
import GithubButton from "../../components/GithubButton.vue";

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
    imageUrl: "./image/ascii-empire.png",
  }),
};
</script>

<style scoped>
.backgound {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.191031;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}

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
