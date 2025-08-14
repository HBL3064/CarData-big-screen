<template>
    <div class="visual-top-right-container">
        <div class="sale-pie">
            <SalePie v-if="data.length" :mydata="data"/>
        </div>
        <div class="sale-price-bar">
            <SalePriceBar v-if="config_data.length" :mydata="config_data"/>
        </div>
    </div>
</template>

<script setup>
import SalePie from './visual-top/sale-pie.vue';
import SalePriceBar from './visual-top/sale-price-bar.vue';

import { ref, inject,onMounted} from 'vue';
const axios = inject('axios')

const data = ref([])
const config_data = ref([])

onMounted(async()=>{
    const res = await axios.get('/right');
    data.value = res.data.pie_data || []
    config_data.value = res.data.price_data || []
})

</script>

<style scoped>
.visual-top-right-container{
    display: flex;
    width: 100%;
    height: 100%;
}
.sale-pie {
    flex: 1;
    height: 100%;
    margin-right: 5px;
}
.sale-price-bar {
    flex: 1;
    height: 100%;
}
</style>