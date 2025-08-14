<template>
    <div class="row">
        <dv-border-box-10 class="top-center-box car-sum">
            <h3 class="top-center-title">车辆总数据</h3>
            <span>{{total}}</span>
        </dv-border-box-10>
        <dv-border-box-10 class="top-center-box car-maxsale">
            <h3 class="top-center-title">销量最高汽车</h3>
            <span>{{ maxsale }}</span>
        </dv-border-box-10>
        <dv-border-box-10 class="top-center-box car-mostsale">
            <h3 class="top-center-title">车辆最高销售量</h3>
            <span>{{mostsale}}辆</span>
        </dv-border-box-10>
    </div>
    <div class="row">
        <dv-border-box-10 class="top-center-box car-maxmodel">
            <h3 class="top-center-title">销量最高车型</h3>
            <span>{{maxmodel}}</span>
        </dv-border-box-10>
        <dv-border-box-10 class="top-center-box car-mostbrand">
            <h3 class="top-center-title">销量最高品牌</h3>
            <span>{{ mostbrand }}</span>
        </dv-border-box-10>
        <dv-border-box-10 class="top-center-box car-avgprice">
            <h3 class="top-center-title">车辆平均价格</h3>
            <span>{{avgprice}}万</span>
        </dv-border-box-10>
    </div>
    <div class="top-center-bottom">
        <dv-border-box-7 class="brand-bank">
            <BrandBank />
        </dv-border-box-7>
        <dv-border-box-7 class="car-ratio">
            <CarRatio />
        </dv-border-box-7>
    </div>
</template>

<script setup>
import BrandBank from './visual-top/brand-bank.vue';
import CarRatio from './visual-top/car-ratio.vue';

import{ref, onMounted,inject} from 'vue';
const axios = inject('axios')

let total = ref(500);
let maxsale = ref('宝马')
let mostsale = ref('100000');
let maxmodel = ref('SUV');
let mostbrand = ref('大众');
let avgprice = ref('20.20万');

onMounted(async () => { 
    const res = await axios.get('/center');
    total.value = res.data.car_total;
    maxsale.value = res.data.max_sale_name;
    mostsale.value = res.data.car_most_sale;
    maxmodel.value = res.data.MaxModel;
    mostbrand.value = res.data.MostBrand;
    avgprice.value = res.data.AvgPrice;
});

</script>

<style scoped>
.row {
    position: relative;
    display: flex;
    width: 760px;
    height: 85px;
    overflow: hidden;
    margin-bottom: 5px;
}

.top-center-box {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    height: 100%;
    margin-right: 5px;
    background-repeat: no-repeat;
}

.top-center-title {
    text-align: center;
    line-height: 100%;
    color: #0e94ea;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
}

.top-center-box span {
    position: absolute;
    left: 40%;
    color: #fff;
    font-size: 18px;
}

.top-center-bottom {
    position: absolute;
    display: flex;
    width: 760px;
    height: 240px;
    margin-top: 5px;
}

.brand-bank {
    flex: 6;
    height: 100%;
    background-repeat: no-repeat;
    margin-right: 10px;
}

.car-ratio {
    flex: 4;
    height: 100%;
    background-repeat: no-repeat;
}
</style>
