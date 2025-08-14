<template>
  <div class="word-cloud-wrapper">
    <dv-decoration-3 style="width:100%;height:30px;opacity: 0.5;" />
    <p class="word-cloud-title">汽车品牌词云图</p>
    <div ref="wordCloudRef" class="word-cloud"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts/core'
import 'echarts-wordcloud'

// 词云数据
const wordlist = ref([
    { name: 'Vue3', value: 10000 },
    { name: 'React', value: 8000 },
    { name: 'TypeScript', value: 7000 },
    { name: 'ECharts', value: 6500 },
    { name: 'Vite', value: 6000 },
    { name: 'Webpack', value: 5500 },
    { name: 'TailwindCSS', value: 5000 },
    { name: 'Node.js', value: 4500 },
    { name: 'JavaScript', value: 4000 },
    { name: 'CSS3', value: 3500 },
    { name: 'HTML5', value: 3000 }
])
const props = defineProps(['words'])

const renderCloud = (list) => {
    chart = echarts.init(wordCloudRef.value)
    chart.setOption({
        series: [
            {
                data: list,
                type: 'wordCloud',
                shape: 'circle',
                left: 'center',
                top: 'center',
                width: '90%',
                height: '60%',
                sizeRange: [15, 30],
                rotationRange: [-30, 30],
                rotationStep: 15,
                gridSize: 8,
                drawOutOfBound: false,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: () =>
                        `rgb(${[
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',')})`
                },
                emphasis: {
                    focus: 'self',
                    textStyle: {
                        textShadowBlur: 10,
                        textShadowColor: '#333'
                    }
                },
                
            }
        ]
    })
}


/* 2. 获取 DOM 并初始化 */
const wordCloudRef = ref(null)
let chart = null

onMounted(() => {
    
    renderCloud(props.words || wordlist.value)
    /* 自适应容器大小 */
    window.addEventListener('resize', () => chart.resize())
})


</script>

<style scoped>
.word-cloud-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.word-cloud-title {
    width: 100%;
    position: absolute;
    top: 0px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin: 0;
}

.word-cloud {
    width: 100%;
    height: 200px;
}
</style>