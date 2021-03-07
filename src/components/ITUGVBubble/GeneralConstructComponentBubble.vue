 <template>
  <bubble :x="x" :y="y" id="general-construct-component">
    <text class="title" x="50" y="35">General Construct Component</text>
    <image :href="imageUrl" x="10" y="40" width="45" height="27" />
    <g transform="translate(58,40) scale(0.09)">
      <foreignObject width="400" height="300">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <p>
            此人腦袋一閃；一個坑就產生了，並且在 8 個小時內此坑已崩裂的巨大無比。
          </p>
          <p style="text-align: right">– 紀錄於 2020-11-13</p>
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
    imageUrl: "./image/General_Construct_Component.png",
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

.sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 3.5px;
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
