<template>
  <div>
    <div>당첨숫자</div>
    <div id="result">
      <lotto-ball v-for="ball in winBalls" :key="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball></lotto-ball>

    <button v-if="redo">한번더</button>
  </div>
</template>

<script>
import LottoBal from "./LottoBall";
function getWinNumber() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length))
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

export default {
  components: {
    LottoBal
  },
  data() {
    return {
      winNumbers: getWinNumber(),
      winBalls: [],
      bonus: null,
      redo: false
    };
  },
  computed: {},
  methods: {},
  created() {
    console.log("created");
  },

  mounted() {
    console.log("mounted");
  },

  updated() {
    console.log("updated");
  },

  destroyed() {
    console.log("detroyed");
  }
};
</script>
<style scoped>
</style> 