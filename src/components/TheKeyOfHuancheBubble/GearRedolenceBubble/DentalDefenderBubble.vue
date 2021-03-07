 <template>
  <bubble :x="x" :y="y" id="dental-defender">
    <text class="title" x="50" y="32"
      >Dental Defender: Saga of the Candy Horde</text
    >
    <text class="title" x="50" y="37">(Refactoring)</text>
    <image :href="imageUrl" x="8" y="40" width="40" height="30" />

    <g transform="translate(51,45) scale(0.09)">
      <foreignObject width="450" height="150">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          2020 年 7
          月，服完兵役之後，剛好接觸到這個專案的原始碼，就決定重構它作為腦袋復健。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,80,57)">
      <github-button url="https://github.com/FlySkyPie/dental-defender" />
    </g>
  </bubble>
</template>

<script>
import Bubble from "../../Bubble.vue";
import GithubButton from "../../../components/GithubButton.vue";

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
    imageUrl: "./image/dental-defender.png",
  }),
};
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 4px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  text-anchor: middle;
}

.sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 6px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
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
