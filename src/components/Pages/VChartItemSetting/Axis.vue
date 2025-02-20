<template>
  <collapse-item v-model:name="axis.name">
    <template #header>
      <n-switch v-model:value="axis.visible" size="small"></n-switch>
    </template>
    <setting-item-box name="轴标签">
      <setting-item name="可见性">
        <n-space>
          <n-switch v-model:value="axis.label.visible" size="small"></n-switch>
        </n-space>
      </setting-item>
      <setting-item name="角度">
        <n-input-number v-model:value="axis.label.style.angle" :min="0" :max="360" size="small" />
      </setting-item>
      <FontStyle :style="axis.label.style"></FontStyle>
    </setting-item-box>
    <setting-item-box name="轴标题">
      <setting-item name="可见性">
        <n-space>
          <n-switch v-model:value="axis.title.visible" size="small"></n-switch>
        </n-space>
      </setting-item>
      <setting-item name="标题内容">
        <n-input v-model:value="axis.title.style.text" size="small"></n-input>
      </setting-item>
      <FontStyle :style="axis.title.style"></FontStyle>
    </setting-item-box>
    <setting-item-box name="轴线">
      <setting-item name="可见性">
        <n-space>
          <n-switch v-model:value="axis.domainLine.visible" size="small"></n-switch>
        </n-space>
      </setting-item>
      <setting-item name=""> </setting-item>
      <setting-item name="粗细">
        <n-input-number v-model:value="axis.domainLine.style.lineWidth" :min="0" size="small" />
      </setting-item>
      <setting-item name="颜色">
        <n-color-picker v-model:value="axis.domainLine.style.stroke" size="small" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="网格线">
      <setting-item name="可见性">
        <n-space>
          <n-switch v-model:value="axis.grid.visible" size="small"></n-switch>
        </n-space>
      </setting-item>
      <setting-item name=""> </setting-item>
      <setting-item name="粗细">
        <n-input-number v-model:value="axis.grid.style.lineWidth" :min="0" size="small" />
      </setting-item>
      <setting-item name="颜色">
        <n-color-picker v-model:value="axis.grid.style.stroke" size="small" />
      </setting-item>
    </setting-item-box>
  </collapse-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import FontStyle from './common/FontStyle.vue'
import { vChartGlobalThemeJsonType } from '@/settings/vchartThemes/index'
import { CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'

defineProps({
  axis: {
    type: Object as PropType<vChartGlobalThemeJsonType>,
    required: true
  }
})
</script>
