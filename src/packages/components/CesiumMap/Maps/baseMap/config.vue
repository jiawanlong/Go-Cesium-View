<template>
  <collapse-item name="基础设置" :expanded="true">
    <!-- <setting-item-box name="文字" :alone="true">
      <setting-item>
        <n-input v-model:value="optionData.dataset" size="small"></n-input>
      </setting-item>
    </setting-item-box> -->
    <setting-item-box name="是否显示LOGO" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.isLogo" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="是否显示时间轴" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.istTimeline" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="是否显示左下角仪表" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.isAnimation" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="是否显示全屏" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.isFullScreen" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="是否显示搜索框" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.isSearch" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="是否显示Home" :alone="true">
      <setting-item>
        <n-select v-model:value="optionData.isHome" size="small" :options="logoOptions" />
      </setting-item>
    </setting-item-box>
  </collapse-item>


</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { option } from './config'
import { CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'

const logoOptions = [
  {
    label: '展示',
    value: 1
  },
  {
    label: '不展示',
    value: 0
  }
]

const props = defineProps({
  optionData: {
    type: Object as PropType<typeof option>,
    required: true
  }
})
</script>
