<template>
  <div class="mine-info">
    <div class="cover">
      <img src="../../../assets/logo.png">
    </div>
    <p>李小宗盛</p>
  </div>
</template>

<script>
export default {
  name: 'MineInfo',
};
</script>

<style lang="scss" scoped>
.mine-info {
  height: 100px;
  text-align: center;
}
.cover {
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
}
</style>