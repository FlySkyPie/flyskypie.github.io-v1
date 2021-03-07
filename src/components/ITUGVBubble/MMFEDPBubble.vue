 <template>
  <bubble :x="x" :y="y" id="MMFEDP">
    <text class="title" x="50" y="35">MMFEDP</text>
    <text class="sub-title" x="50" y="38"
      >Modular Multi-Faceted Electrical Develop Platform</text
    >
    <image :href="imageUrl" x="15" y="40" width="30" height="30" />

    <g transform="translate(51,40) scale(0.09)">
      <foreignObject width="450" height="260">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          專案大約於 2013-01-25 開始進行，並作為主要專案一直到 2013 年 2
          月份左右。原始理念是不使用昂貴的丹麥原產塑膠積木，去完成一個有邏輯算數單元並且結構能夠模組化的系統。但是隨著專案的進行，發覺到使用積木所受到的限制以及其缺乏對未來的擴充性，後來逐漸淡出。
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,80,63)">
      <!--<hackmd-button url="#" />-->
    </g>
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";
import HackmdButton from "../HackmdButton.vue";

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
    "hackmd-button": HackmdButton,
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/MMFEDP-first.jpg",
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
