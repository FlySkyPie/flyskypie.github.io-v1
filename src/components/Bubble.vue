 <template>
  <g :transform="position">
    <g :transform="`translate(-${radius},-${radius})`" class="root">
      <router-link :to="id" v-if="!isRoute">
        <circle
          class="backgound"
          :style="bubleStyle"
          :cx="`${radius}`"
          :cy="`${radius}`"
          :r="`${radius - 1}`"
        />
      </router-link>
      <circle
        v-if="isRoute"
        class="backgound"
        :style="bubleStyle"
        :cx="`${radius}`"
        :cy="`${radius}`"
        :r="`${radius - 1}`"
      />
      <slot />
    </g>
  </g>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    x: {
      type: String,
      default: "0",
    },
    y: {
      type: String,
      default: "0",
    },
    size: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    position: function () {
      return `translate(${this.x},${this.y})`;
    },
    isRoute: function () {
      return this.$route.path == `/${this.id}`;
    },
    radius: function () {
      return 50 * this.size;
    },
    bubleStyle: function () {
      return `stroke-width:${0.191031 * this.size};`;
    },
  },
};
</script>

<style scoped>
.root >>> a {
  outline: none;
}

.backgound {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.191031;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}
</style>
