<template>
  <div class="go-text-box">
    <div class="content" ref="cesiumContainer">
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs, shallowReactive, watch,ref ,reactive,onMounted} from 'vue'
import { CreateComponentType } from '@/packages/index.d'
import { useChartDataFetch } from '@/hooks'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'
import { option as configOption } from './config'

const cesiumContainer = ref(null);

const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType & typeof option>,
    required: true
  }
})
let viewer;

let option = reactive({
  isLogo: configOption.isLogo,
  istTimeline: configOption.istTimeline,
  isAnimation: configOption.isAnimation,
  isFullScreen: configOption.isFullScreen,
  isSearch: configOption.isSearch,
  isHome: configOption.isHome,
})


watch(
  () => props.chartConfig.option,
  (newData: any) => {
    option = newData;
    initSetting();
  },
  {
    immediate: true,
    deep: true
  }
)

onMounted(() => {
  initMap();
});

const initMap = ()=>{
  Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZjQ5ZGUzNC1jNWYwLTQ1ZTMtYmNjYS05YTY4ZTVmN2I2MDkiLCJpZCI6MTE3MTM4LCJpYXQiOjE2NzY0NDUyODB9.ZaNSBIfc1sGLhQd_xqhiSsc0yr8oS0wt1hAo9gbke6M";
  viewer = new Cesium.Viewer(cesiumContainer.value, {});
  initSetting();
}

function initSetting(){
  updateMapLogo()
  updateMapistTimeline()
  updateMapisAnimation()
  updateMapisFullScreen()
  updateMapisSearch()
  updateMapisHome()
}

// 是否显示LOGO
function updateMapLogo(){
  if(!viewer) return;
  if(option.isLogo == 1){
    viewer.cesiumWidget.creditContainer.style.display = "block";
  }else{
    viewer.cesiumWidget.creditContainer.style.display = "none";
  }
}

// 是否显示时间轴
function updateMapistTimeline(){
  if(!viewer) return;
  if(option.istTimeline == 1){
    viewer.timeline.container.style.display = 'inline-block';
  }else{
    viewer.timeline.container.style.display = 'none';
  }
}

// 是否显示左下角仪表 
function updateMapisAnimation(){
  if(!viewer) return;
  if(option.isAnimation == 1){
    viewer.animation.container.style.display = 'inline-block';
  }else{
    viewer.animation.container.style.display = 'none';
  }
}

// 是否显示全屏按钮
function updateMapisFullScreen(){
  if(!viewer) return;
  if(option.isFullScreen == 1){
    viewer.fullscreenButton.container.style.display = 'block';
  }else{
    viewer.fullscreenButton.container.style.display = 'none';
  }
}

// 是否显示搜索框
function updateMapisSearch(){
  if(!viewer) return;
  if(option.isSearch == 1){
    viewer.geocoder.container.style.display = 'inline-block';
  }else{
    viewer.geocoder.container.style.display = 'none';
  }
}

// 是否显示Home
function updateMapisHome(){
  if(!viewer) return;
  if(option.isHome == 1){
    viewer.homeButton.container.children[1].style.display = 'inline-block';
  }else{
    viewer.homeButton.container.children[1].style.display = 'none';
  }
}


</script>

<style lang="scss" scoped>
@include go('text-box') {
  display: flex;
  align-items: center;
  overflow: hidden;

  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
