<template>
    <div class="title">
        <h1 class="title-text">汽车数据可视化平台</h1>
        <img class="title-img" src="/image/first_title.png" alt="图片加载失败">
        <span class="line"></span>
        <div class="data-source">数据来源于：懂车帝</div>
        <div class="title-time">{{year}}-{{month}}-{{ day }} 周{{ week }} {{ hour }}:{{ minute }}:{{ second }}</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const date = ref(new Date());
const year =ref(0);
const month =ref(0);
const day =ref(0);
const week =ref(0);
const hour =ref(0);
const minute =ref(0);
const second =ref(0);

const getWeek = (day) => {
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return weekDays[day];
};

onMounted(() => {
    setInterval(() => {
        date.value = new Date();
        year.value = date.value.getFullYear();
        month.value = date.value.getMonth() + 1;
        day.value = date.value.getDate();
        week.value = getWeek(date.value.getDay());
        hour.value = date.value.getHours();
        minute.value = date.value.getMinutes();
        second.value = date.value.getSeconds();
    }, 1000);
});
</script>

<style scoped>
.title {
    display: flex;
    width: 100%;
    position: relative;
    height: 100%;
    background: url('/image/title.png') no-repeat center;
    top: 0;
}

.title-text {
    z-index: 10;
    width: 100%;
    height: 90px;
    transform: translateY(-10px);
    position: absolute;
    text-align: center;
    color: #ffffff;
}

.title-img{
    width: 40%;
    height: 80px;
    position: absolute;
    left: 30%;
    opacity: 0.5;
}
.data-source{
    position: absolute;
    left: 20px;
    bottom: 1px;
    color: #fff;
    z-index: 10;
    opacity: 0.8;
}
.title-time {
    position: absolute;
    right: 20px;
    bottom: 1px;
    color: #fff;
    z-index: 10;
    opacity: 0.8;
}

.line {
    position: absolute;
    width: 100%;
    height: 1px;
    border-bottom: solid 1px #8899c9;
    bottom: 0;
    opacity: 0.3;
}
</style>