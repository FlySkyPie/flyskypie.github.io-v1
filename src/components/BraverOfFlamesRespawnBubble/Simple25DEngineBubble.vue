 <template>
  <bubble :x="x" :y="y">
    <text class="title" x="50" y="20">2.5D Engine</text>
    <image :href="imageUrl1" x="15" y="22" width="40" height="38" />
    <image :href="imageUrl2" x="15" y="52" width="40" height="38" />
    <g transform="translate(57,34) scale(0.09)">
      <foreignObject width="430" height="330">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <p>
            某天，我打開我的遊戲素材圖庫資料夾，
            看著一個行走圖，然後一個念頭閃過：
          </p>
          <p>「反正我現在被選上選手，乾脆寫個遊戲當練習?」</p>

          <p>
            於是乎我就完成了<a href="http://youtu.be/X90eakPbqq0">這個</a>，
            接著我就欲罷不能，幾天後又完成了<a
              href="http://youtu.be/WJROoPW4fKA"
              >這個</a
            >，
            接著為了方便維護，然後開始朝遊戲引擎這個方向開始弄，不久後又弄出了<a
              href="http://youtu.be/ubKGjBv7BZE"
              >這個</a
            >。
          </p>
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,82,65)">
      <github-button url="https://github.com/FlySkyPie/vb-simple-2.5d-rpg" />
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
    imageUrl1: "./image/25d_engine.png",
    imageUrl2: "./image/map-editor.png",
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
  text-anchor: middle;
}

.embeded-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.25;
  font-family: sans-serif;
  white-space: normal;
}
</style>
