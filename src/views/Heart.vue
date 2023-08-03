<script setup>
// import "@/assets/CSS/heart.scss"
import { isHeartMove, clickHandle } from "@/utils/heart.js";
</script>

<template>
  <div class="container">
    <div class="text">
      <p>2023|信息党建</p>
      <p>欢迎你！</p>
    </div>
    <div class="container2">
      <div
        class="heart"
        :class="{ heartMove: isHeartMove }"
        @click="clickHandle()"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
