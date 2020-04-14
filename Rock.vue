<template v-if="onOff">
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
      <div>{{result}}</div>
      <div>현재 {{score}}점</div>
    </div>
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px"
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1
};

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

let interval = null;

export default {
  data() {
    return {
      imageCode: rspCoords["바위"],
      result: "",
      score: 0,
      onOff: true
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCode} 0`
      };
    }
  },
  methods: {
    onClickButton(c) {
      console.log(c);
      clearInterval(interval);
      const myScore = scores[c];
      const cpuScore = scores[computerChoice(this.imageCode)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
    }
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    interval = setInterval(() => {
      if (this.imageCode === rspCoords.바위) {
        this.imageCode = rspCoords.가위;
      } else if (this.imageCode === rspCoords.가위) {
        this.imageCode = rspCoords.보;
      } else {
        this.imageCode = rspCoords.바위;
      }
    }, 200);
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    clearInterval();
  },
  destroyed() {
    console.log("detroyed");
  }
};
</script>
<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style> 