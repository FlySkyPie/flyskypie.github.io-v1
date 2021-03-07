 <template>
  <g :style="transformTranslate" :class="transitionClass">
    <g :style="transformScale" :class="transitionClass">
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
    isScroll: false,
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
        const translateX =
          (this.viewWidth / scale / 2 - currentViewpoint.x) * scale;
        const translateY =
          (this.viewHeight / scale / 2 - currentViewpoint.y) * scale;
        const transform = `translate(${translateX}px,${translateY}px)`;
        this.lastTranslate = transform;
        return `transform:${transform};`;
      } /**/
      return `transform:${this.lastTranslate};`;
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
    transitionClass: function () {
      if (this.isScroll) {
        return "base";
      }
      return "camera base";
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
      this.isScroll = true;
      this.scale = event.deltaY > 0 ? this.scale / 1.1 : this.scale * 1.1;
    },
  },
  watch: {
    $route(to, from) {
      this.scale = 1;
    },
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.isScroll && !this.preoff) {
        this.preoff = true;
        setTimeout(() => {
          this.preoff = false;
          this.isScroll = false;
        }, 100);
        //this.isScroll = false;
      }
      // Code that will run only after the
      // entire view has been re-rendered
    });
  },
};
</script>

<style scoped>
.base {
  will-change: auto;
}

.camera {
  transition: transform 500ms; /**/
}
</style>
