 <template>
  <g :transform="transform">
    <slot />
  </g>
</template>

<script>
export default {
  data: () => ({
    scale: 1,
    cx: 0,
    cy: 0,
    angle: 0,
  }),
  props: {
    viewWidth: {
      type: Number,
      default: 1024,
    },
    viewHeight: {
      type: Number,
      default: 768,
    },
  },
  computed: {
    transform: function () {
      const scale = this.scale;
      const translateX = this.viewWidth / scale / 2 - this.cx;
      const translateY = this.viewHeight / scale / 2 - this.cy;

      return (
        `scale(${scale})` +
        `translate(${translateX},${translateY})` +
        `rotate(-${this.angle},${this.cx},${this.cy})`
      );
    },
  },
  methods: {
    scroll: function (event) {
      if(event.target.className==="embeded-root"){
        return;
      }
      this.scale = event.deltaY > 0 ? this.scale / 1.1 : this.scale * 1.1;
    },
  },
};
</script>

<style scoped>
</style>
