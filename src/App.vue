<template>
  <div class="header">
    <Header />
  </div>
  <div class="main">
    <div class="visual-top">
      <div class="visual-top-left">
        <VisualTopLeft />
      </div>
      <div class="visual-top-center">
        <VisualTopCenter />
      </div>
      <div class="visual-top-right">
        <VisualTopRight />
      </div>
    </div>
    <div class="visual-bottom">
      <div class="visual-bottom-left">
        <VisualBottomLeft />
      </div>
      <div class="visual-bottom-right">
        <VisualBottomRight />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from './components/header.vue';
import VisualTopLeft from './components/visual-top-left.vue';
import VisualTopCenter from './components/visual-top-center.vue';
import VisualTopRight from './components/visual-top-right.vue';
import VisualBottomLeft from './components/visual-bottom-left.vue';
import VisualBottomRight from './components/visual-bottom-right.vue';

</script>

<style scoped>
.header {
  height: 10%;
}

.main {
  height: 90%;
  margin: 0 5px;
}
.visual-top {
  height: 50%;
  display: flex;
}
.visual-bottom {
  height: 50%;
  display: flex;
}
.visual-top-left {
  margin-top: 10px;
  position: relative;
  flex: 3;
  height: 100%;
}
.visual-top-center {
  flex: 4;
  height: 100%;
  margin: 5px;
  padding: 5px;
}
.visual-top-right {
  flex: 3;
  height: 100%;
  margin-top: 10px;
}
.visual-bottom-left {
  position: relative;
  flex: 5;
  height: 100%;
}
.visual-bottom-right {
  position: relative;
  flex: 5;
  height: 100%;
}
</style>
