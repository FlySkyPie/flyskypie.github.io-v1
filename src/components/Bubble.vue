 <template>
  <g :transform="position">
    <g transform="translate(-50,-50)">
      <circle class="backgound" cx="50" cy="50" r="49" />
      <text class="title" xml:space="preserve" x="50" y="50">{{ title }}</text>
    </g>
  </g>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled",
    },
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
  stroke-width: 0.191031;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}

.title {
  font-style: normal;
  font-weight: normal;
  font-size: 7.25827px;
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
</style>
