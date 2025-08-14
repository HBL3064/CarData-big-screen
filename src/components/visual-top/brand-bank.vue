<template>
    <p class="brand-bank-title">汽车销量前100排行榜</p>
    <dv-scroll-ranking-board :config="config" style="width:100%;height:200px" />
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
const axios = inject('axios')
const data = defineProps(['data']);
const config = ref({
    data: [
        { name: '周口', value: 55 },
        { name: '南阳', value: 120 },
        { name: '西峡', value: 78 },
        { name: '驻马店', value: 66 },
        { name: '新乡', value: 80 },
        { name: '信阳', value: 45 },
        { name: '漯河', value: 29 }
    ]
});
onMounted(async () => {
    const res = await axios.get('/center/scrolldata');
    config.value.data = res.data;
    config.value = {
        data: res.data.scrolldata,
    };
});
</script>

<style scoped>
.brand-bank-title {
    font-size: 20px;
    color: #fff;
    height: 18px;
    margin: 10px;
}
</style>