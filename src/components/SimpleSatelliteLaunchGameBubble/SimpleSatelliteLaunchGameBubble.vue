 <template>
  <bubble :x="x" :y="y">
    <text class="title" xml:space="preserve" x="50" y="32"
      >Simple Satellite Launch Game</text
    >
    <image
      :href="imageUrl"
      x="6.8450508"
      y="43.39257"
      width="40.367977"
      height="24.222452"
    />

    <g transform="translate(51,40) scale(0.09)">
      <foreignObject width="450" height="350">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          我高三（高職）的時候在電腦課上無聊寫了一個在二維空間中使粒子亂飛的程式，然後我想，何不試著讓這些粒子像月球繞著地球一樣運動？接著使用三角函數寫出單純的圓周運動（數位類比鐘的基本寫法），到後來試著加入萬有引力常數和質量，把八大行星都丟入這個二維模型內，最後用質點系統和指標
          (pointer)
          模擬火箭和衛星的發射（指標使我可以取得多級火箭的總質量，並使多級火箭分離成為可能），那個時候我僅依靠牛頓三大定律的公式，讓一個小小的二維太陽系在我的電腦內運作，還試著用我設計得非常爛
          GUI 把衛星送入軌道。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,75,72)">
      <github-button url="https://github.com/FlySkyPie/vb-simple-satellite-launch-game" />
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
    imageUrl: "./image/Simple-Satellite-Launch-Game.png",
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
