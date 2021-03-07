 <template>
  <bubble :x="x" :y="y" id="simple-forum">
    <text class="title" xml:space="preserve" x="50" y="32">Simple Forum</text>
    <image :href="imageUrl" x="5" y="37" width="40" height="30" />
    <g transform="translate(47,37) scale(0.09)">
      <foreignObject width="500" height="350">
        <div xmlns="http://www.w3.org/1999/xhtml" class="embeded-root">
          <p>
            大學時期為了某種目的而產生的專案，一開始使用 PunBB
            架了論壇，然後嵌了一些程式碼讓其上線運作。後來在 2018
            年的清明連假開始學習 Laravel ，花了半個月的時間把試作品做出來。
          </p>

          <br /><br /><br /><br /><br /><br /><br />
          <p>
            注意：為了避免我透漏不該透漏的訊息，以下內容以進行異世界化處理，如有失真純屬正常現象。
          </p>
          <p>
            埃稜帝國有很多培育帝國人才的學院，其中一個學院叫做埃稜魔法工程學院，顧名思義為了培養魔法工程的人才。
            某天順應帝國外的風潮，埃稜的第16代國王發布了一道命令：「讀魔法工學的人很多，可是培育出來的魔法技士卻很少，我們帝國需要一個能夠讓學院學生能夠實際施展和練習魔法工學的地方，規劃完善的學院，朕將給予該學院一筆資金成立這樣的地方。」
            命令一出，撼動了埃稜帝國各個學院，當然也包含了埃稜魔法工程學院，校長召集了各處室的主管，一同來討論如何規劃。
          </p>
          <p>
            魔法混合工學研究室，是一個讓各種不同魔法屬性的學生能夠一同學習魔法工學的地方，魔法混合工學研究室的管理員說「也許我們可以聯合民間的魔法工房，來加強我們學院和民間的連結」他接著說「不過老實說我也不知道要怎麼聯合。」，
            這時魔法演算中心的主管說：「也許可以透過魔法雲連結那些魔法工房」，就這樣，「魔法雲」的概念就被寫入要上交給國王的文件裡了。最後國王通過了這個規劃，並給予埃稜魔法工程學院一筆資金去讓他們完成他們所規劃的事項。<br />
          </p>
          <p>
            暑假的時候，某個魔法工程學院的學生，在魔法混合工學研究室閒晃，偶然撞見了在一旁開會的研究是管理員，原來是關於為魔法雲準備的魔法演算裝置建構的會議，學生在旁一聽，覺得這個魔法雲架構有問題，
            就隨手一寫覺得架構應該如何會比較好，並把紙條遞給了管理員。那只是粗略一框的框架，說是草稿也不為過。這架構也得到一些研究室成員的肯定，管理員也覺得這個架構可行，而於是希望學生可以在深入規劃，
            然後學生就花了不少時間在閱讀和魔法雲有關的資料；思考要如何規劃，並和其他研究室成員一個一個談了，確定執行上不會有人有太大的反對。並且在深入了解魔法雲的過程中，才從管理員口中得知，
            魔法雲只是一個概念、一個標題，沒有人知道魔法雲要怎麼做，連魔法演算中心的主任也只是隨口一提，後來這個學生才知道魔法雲的主要架構到部份細節都出自於自己之手......而學生在魔法雲上的奮鬥，還沒有結束......<br />
          </p>
          --Be Continued--
        </div>
      </foreignObject>
    </g>
    <g transform="matrix(0.610794,0,0,0.610794,80,62)">
      <github-button url="https://github.com/FlySkyPie/simple-forum" />
    </g>
  </bubble>
</template>

<script>
import Bubble from "../Bubble.vue";
import GithubButton from "../../components/GithubButton.vue";

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
    bubble: Bubble,
  },
  data: () => ({
    imageUrl: "./image/craftbill-forum.png",
  }),
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
  font-size: 6px;
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

.embeded-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  font-size: 1.5rem;
}
</style>
