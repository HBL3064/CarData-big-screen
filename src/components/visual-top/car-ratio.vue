<template>
    <div class="car-ratio-top">
        <div class="car-oil">
            <p class="car-oil-title">油车销售占比</p>
            <dv-decoration-9 style="width:90px;height:90px;color: #fff;">{{ oil_ratio }}%</dv-decoration-9>
        </div>
        <div class="car-ele">
            <p class="car-ele-title">电车销售占比</p>
            <dv-decoration-9 :color="['yellow']"
                style="width:90px;height:90px;color: #fff;">{{ ele_ratio }}%</dv-decoration-9>
        </div>
    </div>
    <div class="car-ratio-bottom">
        <p class="car-ratio-bottom-title">油电混合比率</p>
        <dv-water-level-pond :config="config" style="width:180px;height:90px" />
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
const axios = inject('axios')

const oil_ratio = ref(66);
const ele_ratio = ref(66);
const config = ref({
    data: [34.1],
    shape: 'round'
});
onMounted(async () => {
    const res = await axios.get('/center/ratio');
    oil_ratio.value = res.data.ratio.oil_ratio;
    ele_ratio.value = res.data.ratio.ele_ratio;
    config.value = {
        data: [Number(res.data.ratio.mixed_ratio)],
        shape: 'round',
    };
});
</script>

<style scoped>
.car-ratio-top {
    display: flex;
    height: 50%;
}

.car-oil {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
}

.car-ele {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
}

.car-oil-title,
.car-ele-title {
    font-size: 20px;
    color: #fff;
    height: 18px;
    margin: 0;
}

.car-ratio-bottom-title {
    font-size: 20px;
    color: #fff;
    height: 18px;
    margin-top: 0;
}

.car-ratio-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    background: url('/image/bg_img04.png') no-repeat center;
    background-size: cover;
}
</style>