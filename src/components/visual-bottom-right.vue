<template>
    <dv-border-box-13 class="car-sale-bar">
        <p class="car-sale-bar-title">汽车销量柱状统计图</p>
        <div ref="Bar" class="car-sale-bar-box"></div>
    </dv-border-box-13>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, inject } from 'vue'
const axios = inject('axios')

const Bar = ref(null)
let xlabel = ref([
    'Model Y',
    '海鸥',
    '朗逸',
    '轩逸',
    '秦 PLUS DM-i',
    'AION Y',
    '思域',
    '速腾',
    '元 PLUS',
    '宋 PLUS DM-i',
    'AION S',
    '长安 CS75 PLUS',
    '海豚',
    '锋兰达'
])
let yldata = ref([
    60000, 50000, 40000, 38000, 36000, 34000, 32000, 30000, 28000, 26000,
    24000, 22000, 20000, 18000
])

let yrdata = ref([30, 7.4, 12, 11, 14, 12, 15, 14, 13, 16, 14, 12, 11, 17])

const Gradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: 'rgba(255,255,255,0.2)' },   // 顶部纯白
    { offset: 1, color: 'rgba(200,225,268,0.9)' }    // 底部透明
])
const option = ref({
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
    },
    legend: {
        data: ['销量', '价格'],
        textStyle: {
            color: '#fff'   // 所有文字统一为白色
        }
    },
    xAxis: {
        type: 'category',
        data: xlabel,
        axisLabel: {
            interval: 0,
            // inside:true,
            rotate: 30,
            color: 'rgba(220, 140, 50,1)',
        },
        axisTick: { show: false },

    },
    yAxis: [
        {
            type: 'value',
            name: '销量（辆）',
            min: 0,
            max: 50000,
            interval: 10000,
            splitLine: { show: false },
            axisLine: { show: true },
            axisTick: { show: true },
        },
        {
            type: 'value',
            name: '价格（万元）',
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: '{value} 万'
            },
            splitLine: { show: false },
            axisTick: { show: true },
            axisLine: { show: true },
        }
    ],
    series: [
        {
            name: '销量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                color: Gradient
            },
            data: yldata
        },
        {
            name: '价格',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                color: Gradient
            },
            data: yrdata
        }
    ]
});

onMounted(async () => {
    const res = await axios.get('/bottom/right')

    xlabel.value
        = res.data.data.map((item) => {
            return item.name
        })
    yldata.value = res.data.data.map((item) => {
        return item.sale
    })
    yrdata.value = res.data.data.map((item) => {
        return item.price
    })
    let myChart = echarts.init(Bar.value)
    myChart.setOption(option.value)
})

</script>

<style scoped>
.car-sale-bar {
    width: 100%;
    height: 95%;
    display: flex;
    position: absolute;
    bottom: 2%;
}

.car-sale-bar-title {
    margin: 15px 0;
    width: 100%;
    height: 20px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
}

.car-sale-bar-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    width: 96%;
    height: 340px;
}
</style>