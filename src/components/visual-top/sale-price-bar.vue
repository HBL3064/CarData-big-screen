<template>
    <dv-border-box-7 class="price-bar-container">
        <div class="price-bar">
            <p class="price-bar-title">车辆销售价格占比</p>
            <dv-capsule-chart :config="config" style="width:100%;height:200px" />
        </div>
        <div class="price-pie">
            <dv-active-ring-chart :config="options" style="width:200px;height:200px" />
        </div>
    </dv-border-box-7>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = ref({
    data: [
        {
            name: '南阳',
            value: 167
        },
        {
            name: '周口',
            value: 67
        },
        {
            name: '漯河',
            value: 123
        },
        {
            name: '郑州',
            value: 55
        },
        {
            name: '西峡',
            value: 98
        }
    ]
})
const options = ref({
    data: [
        {
            name: '周口',
            value: 55
        },
        {
            name: '南阳',
            value: 120
        },
        {
            name: '西峡',
            value: 78
        },
        {
            name: '驻马店',
            value: 66
        },
        {
            name: '新乡',
            value: 80
        }
    ],
    lineWidth: 15,
    radius: 55,
    activeRadius: 60,
});

const props = defineProps(['mydata'])
config.value.data = props.mydata.map(item => ({
    name: item.name,
    value: item.value
}));
options.value.data = props.mydata.map(item => ({
    name: item.name,
    value: item.value
}));

</script>

<style scoped>
.price-bar-container {
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.price-bar-title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #fff;
}

.price-bar {
    width: 100%;
    height: 55%;
}

.price-pie {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>