 <template>
  <bubble :x="x" :y="y">
    <text class="title" xml:space="preserve" x="50" y="32"
      >ShiangBaDo Online (Website)</text
    >
    <image :href="imageUrl" x="6.8450508" y="40" width="40" height="26.2" />
    <g transform="translate(45,40) scale(0.09)">
      <foreignObject width="540" height="350">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <h3>以下為當時寫下的專案動機：</h3>
          <p>
            是一款名為俠盜獵車手的遊戲啟發了我的靈感，俠盜獵車手的遊戲類型是一款第三人稱視角的角色扮演遊戲，當中也加入了不多也不少的射擊元素，這時我開始思考，為什麼沒有
            MMORPG+FPS 的遊戲呢?
          </p>
          <p>
            於是我開始著手設計香巴朵之後，利用不少時間在網際網路上查詢資料，雖然有不少遊戲號稱是
            MMORPG+FPS ，但是沒有一個有我所追求的那種感覺。
          </p>
          <p>
            就在我興奮之際，這時我發現了生存 online
            ，這給了我一個打擊－我不是第一個想到的人，也讓我深深佩服先民的智慧，我為了更了解這款遊戲，又不斷針對生存
            online
            查詢資料，此時我發現，它的代理商已經倒閉了，不僅沒有官方網站，更沒有豐富的資料，查詢它所留下來的任何資料，都是一件艱辛的事，於是我改變查詢方式－我直接找人問，經過多次的訪問之後，我發現生存
            online 跟我的概念很相似，也發現有不少人想要重溫生存 online
            的舊夢，這件事情給了我一劑強心針，我心想：「真有這麼多人喜愛那種模式，我便不能辜負他們！」
          </p>
          <p>
            之後我便以俠盜獵車手為靈感，以 CS1.6 為模型，以生存 online
            為前車之鑑，以魔獸世界為目標，努力的進行遊戲設計。
          </p>
        </div>
      </foreignObject>
    </g>
  </bubble>
</template>

<script>
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
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/ShiangBaDo Online_Website.png",
  }),
};
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 6px;
  line-height: 1.25;
  font-family: sans-serif;
  letter-spacing: 0px;
  word-spacing: 0px;
  dominant-baseline: middle;
  text-anchor: middle;
}

.embeded-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  font-size: 1.5rem;
}
.embeded-root h3 {
  margin-top: 0px;
}
</style>
