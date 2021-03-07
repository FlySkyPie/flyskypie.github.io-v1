 <template>
   <bubble :x="x" :y="y" id="gear-redolence" :size="3">
      <text class="title" x="150" y="95">底火的芬芳</text>
      <text class="sub-title" x="150" y="110">(Gear Redolence)</text>
      <image
        :href="imageUrl"
        x="25.442772"
        y="115.97019"
        width="79.52594"
        height="79.52594"
      />
      <g transform="translate(120,120) scale(0.3)">
        <foreignObject width="500" height="200">
          <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
            <p style="margin-top:0px">
              當時在 Github 上閒逛，發現了
              <a
                href="https://github.com/victorqribeiro/aimAndShoot"
                target="_blank"
              >
                victorqribeiro/aimAndShoot
              </a>
              這個專案，內容大概是這樣的：你會跟一堆 BOT 一起被放到
              <code>Diep.io</code>
              風格的競技場上，當所有 BOT 都死亡關卡就會刷新，並且加入新的
              BOT，直到你死亡遊戲才會結束。而且這些 BOT
              被寫入簡單的類神經網路，理論上會越來越聰明。
            </p>
            <p>
              當下覺得有趣，就改寫了一個 Zero-player 的
              <a href="https://youtu.be/li8QD1xyldo" target="_blank"> 版本 </a>
              ，並且順著原本的設計打算加入新的 Sprite ，又寫了個概念性的
              <a href="https://youtu.be/P_3_XaCzm5I" target="_blank">
                prototype
              </a>
              。接下就遇到幾個技術性的問題：
            </p>
            <ol>
              <li>
                原專案是用 Canvas 手刻的，不論是物理碰撞還是 asset
                管理都非常不友善。
              </li>
              <li>
                原專案的機器學習十分土砲，我掛到 100 代 Agent
                的表現仍沒有顯著的改善。
              </li>
            </ol>
            <p>
              關於第二點有可能是我加入的隊伍 feature
              意外的破壞機器學習的演算法，但是無論如何，原始專案的基礎都不利於加入新功能或維護。於是我想起一年前曾經接觸過得
              Phaser 引擎，當時以無法解決 tile 縫隙的問題跟不了解引擎 cyclelife
              的情況棄坑了，打算把引擎摸熟之後再回到項目本身，於是後來有了
              Dental Defender: Saga of the Candy Horde 重構的專案。
            </p>
          </div>
        </foreignObject>
      </g>
      <dental-defender x="172" y="236" />
   </bubble>
</template>

<script>
import DentalDefenderBubble from "./DentalDefenderBubble.vue";
import Bubble from "../../Bubble.vue";

export default {
  components: {
    "dental-defender": DentalDefenderBubble,
    bubble: Bubble,
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
  },
  data: () => ({
    imageUrl: "./image/Gear-Redolence.png",
  }),
};
</script>

<style scoped>
.backgound {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.573092;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 1;
}

.title {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  fill: #000000;
  fill-opacity: 1;
  stroke: none;
  stroke-width: 0.181456;
  text-anchor: middle;
}

.sub-title {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  opacity: 1;
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
