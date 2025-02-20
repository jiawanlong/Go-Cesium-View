<template>
  <!-- todo 补充常用配置项 -->
  <!-- <div v-if="style"> -->
  <!-- <setting-item-box v-if="style" name=""> -->
  <setting-item name="颜色">
    <n-color-picker v-model:value="style.fill" size="small" />
  </setting-item>
  <setting-item name="大小">
    <n-input-number v-model:value="style.fontSize" :min="1" size="small" />
  </setting-item>
  <setting-item name="字体">
    <n-select v-model:value="style.fontFamily" :options="fontStyleConfig.fontFamily" size="small" />
  </setting-item>
  <setting-item name="字重">
    <n-select v-model:value="style.fontSize" :options="fontStyleConfig.fontWeight" size="small" />
  </setting-item>
  <!-- </setting-item-box> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { fontStyleConfig } from '@/packages/chartConfiguration/vcharts/index'
import { FontType } from '@/settings/vchartThemes/index'
import { SettingItem } from '@/components/Pages/ChartItemSetting'

defineProps({
  style: {
    type: Object as PropType<FontType>,
    required: true
  }
})
</script>
