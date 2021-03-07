 <template>
  <bubble :x="x" :y="y" id="profile">
    <text class="name" xml:space="preserve" x="41.499592" y="38.501255"
      >FlySkyPie (Wei Ji)</text
    >
    <image
      :href="profileImage"
      width="35"
      height="35"
      x="-17.5"
      y="-17.5"
      style="clip-path: circle(50%)"
      transform="matrix(1.0,0,0,1.0,19,50)"
    />
    <epitaph />
    <g transform="matrix(0.610794,0,0,0.610794,62,57)">
      <github-button url="https://github.com/FlySkyPie" />
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,73,57)">
      <hackmd-button url="https://hackmd.io/@FlySkyPie" />
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,84,57)">
      <fackbook-button url="https://www.facebook.com/wei.ji.355/" />
    </g>
  </bubble>
</template>

<script>
import GithubButton from "../../components/GithubButton.vue";
import HackmdButton from "../../components/HackmdButton.vue";
import FacebookButton from "../../components/FacebookButton.vue";
import Epitaph from "./Epitaph.vue";
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
    "github-button": GithubButton,
    "hackmd-button": HackmdButton,
    "fackbook-button": FacebookButton,
    epitaph: Epitaph,
    bubble: Bubble,
  },
  data: () => ({
    profileImage: "./image/avatar.png",
  }),
  computed: {},
};
</script>

<style scoped>
.name {
  font-style: normal;
  font-weight: normal;
  font-size: 5.55755px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
}
</style>
