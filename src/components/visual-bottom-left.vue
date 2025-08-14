<template>
    <dv-border-box-1 class="car-top10">
        <h3 class="car-top10-title">汽车排行榜</h3>
        <ul class="car-top10-list-title">
            <li class="car-ranking">销售排名</li>
            <li class="car-img">图片</li>
            <li class="car-info">汽车信息</li>
            <li class="car-price">销售价格</li>
            <li class="car-sale">销量</li>
            <li class="car-update">上市时间</li>
        </ul>
        <div class="car-top10-contain">
            <ul class="car-top10-list" v-for="item in carTop10" :key="item.id">
                <li class="car-ranking">{{ item.rank }}</li>
                <li class="car-img"><img :src="item.img_url" alt="car image"></li>
                <li class="car-info">{{ item.info.name }}<br>{{ item.info.brand_name }}/{{ item.info.level }}</br></li>
                <li class="car-price">{{ item.price }}</li>
                <li class="car-sale">{{ item.sale }}辆</li>
                <li class="car-update">{{ item.market_time }}</li>
            </ul>
        </div>
    </dv-border-box-1>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
const axios = inject('axios');

const carTop10 = ref([]);

onMounted(async () => {
    const res = await axios.get('/bottom/left')
    carTop10.value = res.data.data
});
</script>

<style scoped>
.car-top10 {
    width: 100%;
    height: 95%;
    display: flex;
    position: absolute;
    bottom: 2%;
}

.car-top10-title {
    margin: 0;
    width: 100%;
    height: 20px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
}

.car-top10-list-title {
    width: 100%;
    height: 18px;
    display: flex block;
    list-style: none;
    margin: 10px 0;
}

.car-top10-contain {
    width: 98%;
    height: 320px;
    display: flex;
    flex-direction: column;
    /* 纵向排列 */
    gap: 10px;
    overflow-y: auto;
    /* 垂直滚动 */
}

.car-top10-contain::-webkit-scrollbar {
    display: none;
}

.car-ranking,
.car-info,
.car-price,
.car-sale,
.car-update {
    width: 140px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    opacity: 0.8;
}

.car-img {
    width: 180px;
    text-align: center;
    line-height: 18px;
    color: #fff;
}

.car-top10-list {
    position: relative;
    height: 80px;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.2);
    gap: 10px;
}

.car-img img {
    width: 180px;
    height: 100px;
}
</style>