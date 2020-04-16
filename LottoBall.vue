<template>
  <div class="ball" :style="{background}">{{number}}</div>
</template>

<script>
export default {
  name: "LottoBall",
  props: {
    number: { type: Number }
  },
  data() {
    let background;
    return {
      background
    };
  },
  methods: {
    changeNumber() {
      this.number = 5;
    }
  }
};
</script>

<style>
.ball {
  display: inline-block;
  bottom: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>