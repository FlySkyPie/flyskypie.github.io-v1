 <template>
  <g :transform="position">
    <g transform="translate(-400,-400)">
      <circle class="backgound" cx="400" cy="400" r="398" />
      <gear-redolence x="479" y="208" />
      <text class="title" x="50" y="420">The Key Of Huanche</text>
      <text class="sub-title" x="590" y="520"
        >這個專案有點難解釋，一言難盡。點這個了解更多→</text
      >
      <g transform="matrix(8.2,0,0,8.2,600,450)">
        <hackmd-button url="https://hackmd.io/@FlySkyPie/SkOSms__X" />
      </g>
    </g>
  </g>
</template>

<script>
import GearRedolenceBubble from "./GearRedolenceBubble/GearRedolenceBubble.vue";
import HackmdButton from "../../components/HackmdButton.vue";

export default {
  components: {
    "gear-redolence": GearRedolenceBubble,
    "hackmd-button": HackmdButton,
  },
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
  opacity: 0.997;
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 1.52755;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 0.999689;
}

.title {
  font-style: normal;
  font-weight: normal;
  font-size: 66.0495px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  opacity: 1;
}

.sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 21.2375px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  opacity: 1;
  text-anchor: end;
}
</style>
