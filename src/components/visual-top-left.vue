<template>
    <dv-decoration-4 class="line" :color="['blue']" style="width:5px;height:425px;left: 0;position: absolute;" />
    <dv-decoration-4 class="line" :color="['blue']" style="width:5px;height:425px;right: 0;position: absolute;" />
    <dv-border-box-7 class="top-left-up">
        <p class="contrast">电车油车销量对比
            <a @click.prevent="ChangeData" href="#" name="oil" :style="{ color: linkColor('oil') }">油车</a>/
            <a @click.prevent="ChangeData" href="#" name="ele" :style="{ color: linkColor('ele') }">电车</a>
        </p>
        <dv-scroll-board :config="config" style="width:95%;height:170px" />
    </dv-border-box-7>
    <dv-border-box-7 class="top-left-down">
        <WordCloud v-if="wordlist.length" :words="wordlist" />
    </dv-border-box-7>
</template>

<script setup>
import WordCloud from './visual-top/word-cloude.vue'
import { ref, onMounted, inject } from 'vue'
const axios = inject('axios')

const config = ref({
    header: ['车名', '销量/台', '能源'],
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ],
    index: true,
    indexHeader: '销售排名',
    columnWidth: [100],
    align: ['center'],
    headerHeight: 18,
    headerBGC: '#787878',
    oddRowBGC: '#b4b4b4',
    evenRowBGC: '#3c3c3c',
},)

const oil_data = ref([])
const ele_data = ref([])
const wordlist = ref([])
const engy = ref('oil')

const linkColor = (type) => (engy.value === type ? '#0e94ea' : '#fff')
const buildConfig = (rows) => ({
    header: ['车名', '销量/台', '能源'],
    data: rows,
    index: true,
    indexHeader: '销售排名',
    columnWidth: [100],
    align: ['center'],
    headerHeight: 18,
    headerBGC: '#787878',
    oddRowBGC: '#b4b4b4',
    evenRowBGC: '#3c3c3c'
})

function ChangeData(e) {
    engy.value = e.target.name
    config.value = buildConfig(
        engy.value === 'oil' ? oil_data.value : ele_data.value
    )
}

onMounted(async () => {
    const res = await axios.get('/left')
    oil_data.value = res.data.oil_data || []
    ele_data.value = res.data.ele_data || []
    wordlist.value = res.data.wordcloud_data || []
    // 默认显示油车
    config.value = buildConfig(oil_data.value)
})

</script>

<style scoped>
.top-left-up {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;
    opacity: 0.7;
    padding-left: 2%;

}

.top-left-down {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
}

.contrast {
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
}

.contrast a {
    color: #fff;
    text-decoration: underline;
    margin: 0 10px;
}
</style>