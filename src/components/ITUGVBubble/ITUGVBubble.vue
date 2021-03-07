 <template>
  <g :transform="position">
    <g transform="translate(-370,-370)">
      <circle class="backgound" cx="370" cy="370" r="368" />
      <text class="title" x="370" y="360">ITUGV</text>
      <text class="sub-title" x="370" y="400"
        >Independent Task Unmanned Ground Vehicle</text
      >
      <simple-bubble title="Obj.Suspension.part.MKII" x="269" y="119" />
      <simple-bubble title="Obj.FSP.Track.Mk IV" x="474" y="117" />
      <simple-bubble title="Obj.Suspension.part.MKIII" x="161" y="242" />
      <simple-bubble title="Obj.Suspension.part.Mk I" x="373" y="242" />
      <simple-bubble title="Obj.FSP.Track.Mk III" x="584" y="242" />
      <simple-bubble title="XVT1401(F)" x="500" y="483" />
      <simple-bubble title="XVT1301(F)" x="620" y="482" />
      <simple-bubble title="XVT1501(F)" x="433" y="591" />
      <simple-bubble title="XVT1302(F)" x="554" y="591" />
    <ouroboros-program x="170" y="536"/>
      <general-construct-component x="227" y="462" />
      <final-project x="297" y="626" />
      <mmfedp-bubble x="357" y="460" />
    </g>
  </g>
</template>

<script>
import SimpleBubble from "../SimpleBubble.vue";
import MMFEDPBubble from "./MMFEDPBubble.vue";
import FinalProjectBubble from "./FinalProjectBubble.vue";
import GeneralConstructComponentBubble from "./GeneralConstructComponentBubble.vue";
import OuroborosProgramBubble from './OuroborosProgramBubble.vue';

export default {
  components: {
    "simple-bubble": SimpleBubble,
    "mmfedp-bubble": MMFEDPBubble,
    "final-project": FinalProjectBubble,
    "general-construct-component": GeneralConstructComponentBubble,
    "ouroboros-program":OuroborosProgramBubble,
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
  stroke-width: 1.42278;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}

.title {
  font-style: normal;
  font-weight: normal;
  font-size: 66.0495px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  text-anchor: middle;
}

.sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 29.6072px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  text-anchor: middle;
}
</style>
