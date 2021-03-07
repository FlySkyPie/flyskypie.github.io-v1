 <template>
  <g :style="transformScale" class="camera">
    <g :style="transformTranslate" class="camera">
      <slot />
    </g>
  </g>
</template>

<script>
import Viewpoints from "./Camera/Viewpoints";
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
    transformTranslate: function () {
      const currentViewpoint = Viewpoints.find(
        (item) => item.id === this.$route.name
      );
      if (currentViewpoint) {
        const scale = currentViewpoint.scale * this.scale;
        const translateX = this.viewWidth / scale / 2 - currentViewpoint.x;
        const translateY = this.viewHeight / scale / 2 - currentViewpoint.y;
        const transform = `translate(${translateX}px,${translateY}px)`;
        return `transform:${transform};`;
      } /**/
      const scale = this.scale;
      const translateX = this.viewWidth / scale / 2 - this.cx;
      const translateY = this.viewHeight / scale / 2 - this.cy;
      const transform = `translate(${translateX}px,${translateY}px)`;
      return `transform:${transform};`;
    },
    transformScale: function () {
      const currentViewpoint = Viewpoints.find(
        (item) => item.id === this.$route.name
      );

      if (currentViewpoint) {
        const scale = currentViewpoint.scale * this.scale;
        const transform = `scale(${scale})`;
        this.lastScale = transform;
        return `transform:${transform};`;
      } /**/
      return `transform:${this.lastScale};`;
    },
  },
  methods: {
    scroll: function (event) {
      if (
        event.target.className === "embeded-root" ||
        event.target.closest(".embeded-root")
      ) {
        return;
      }

      this.scale = event.deltaY > 0 ? this.scale / 1.1 : this.scale * 1.1;
    },
  },
};
</script>

<style scoped>
.camera {
  transition: transform 300ms; /**/
}
</style>
