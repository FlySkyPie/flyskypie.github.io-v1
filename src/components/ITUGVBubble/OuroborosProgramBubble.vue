 <template>
  <g :transform="position">
    <g transform="translate(-80,-80)">
      <circle class="backgound" cx="80" cy="80" r="78" />
      <text class="title" x="80" y="80">Ouroboros Program</text>
      <text class="title" x="80" y="95">銜尾蛇計畫</text>
      <g transform="translate(50,34) scale(0.4)">
        <simple-bubble title="Fiber Clay" x="0" y="0" />
      </g>
      <g transform="translate(107,123) scale(0.4)">
        <simple-bubble title="Algae Oil" x="0" y="0" />
      </g>
    </g>
  </g>
</template>

<script>
import SimpleBubble from "../SimpleBubble.vue";
export default {
  components: {
    "simple-bubble": SimpleBubble,
  },
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
  computed: {
    position: function () {
      return `translate(${this.x},${this.y})`;
    },
  },
};
</script>

<style scoped>
.backgound {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.304457;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}

.title {
  font-style: normal;
  font-weight: normal;
  font-size: 14.8063px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  text-anchor: middle;
}
</style>
