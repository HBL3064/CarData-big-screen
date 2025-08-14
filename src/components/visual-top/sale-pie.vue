<template>
    <dv-border-box-12 class="pie-container">
        <h3 class="pie-title">汽车品牌销量饼图</h3>
        <div class="pie" ref="pie"></div>
    </dv-border-box-12>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const datas = [
    { value: 40, name: 'rose 1' },
    { value: 38, name: 'rose 2' },
    { value: 32, name: 'rose 3' },
    { value: 30, name: 'rose 4' },
    { value: 28, name: 'rose 5' },
    { value: 26, name: 'rose 6' },
    { value: 22, name: 'rose 7' },
    { value: 18, name: 'rose 8' }
]

const props = defineProps({
    mydata: {
        type: Array,
        default: () => []
    }
})

const pie = ref(null)          // 必须声明
const option = ref({
    legend: {
        top: 'bottom',
        textStyle: {
            color: '#fff'   // 所有文字统一为白色
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%'
    },
    series: [
        {
            name: '汽车品牌销量饼图',
            type: 'pie',
            radius: [20, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: props.mydata,
            label: {
                color: '#fff'
            },
            labelLine: {                // 外侧标签的视觉引导线
                show: true,
                length: 5,
                length2: 10,
            },
        }
    ]
});

let myChart

onMounted(() => {
    myChart = echarts.init(pie.value)
    myChart.setOption(option.value)
})
</script>

<style scoped>
.pie-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.pie-title {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 24px;
}

.pie-container {
    width: 100%;
    height: 100%;
}

.pie {
    position: absolute;
    width: 100%;
    height: 90%;
    margin: 5px;
}
</style>