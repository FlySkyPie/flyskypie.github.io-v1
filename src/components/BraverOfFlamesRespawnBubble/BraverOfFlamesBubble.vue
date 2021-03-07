 <template>
  <bubble :x="x" :y="y" id="braver-of-flames">
    <text class="title" x="50" y="30">烈焰勇者</text>
    <image :href="imageUrl" x="13" y="35" width="40" height="22.8" />
    <g transform="translate(57,35) scale(0.09)">
      <foreignObject width="400" height="300">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <p style="margin-top: 0px">
            國中時期經營過一段時間的「網路工作室伴家家酒」，而這便是當時的「產品」之一，雖然最後無疾而終，但是對於我的軟體工程自學之路有著深遠的影響。
          </p>
          <p>
            日後直接引發了 Brave of Flames-Respawn 項目以及間接引發了 2.5D
            Engine 項目的成立。
          </p>
        </div>
      </foreignObject>
    </g>
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";

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
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/the-braver-of-flames.png",
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
  text-anchor: middle;
}

.embeded-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  font-size: 1.5rem;
  white-space: normal;
}
</style>
