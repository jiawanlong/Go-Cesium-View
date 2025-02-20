import { PublicConfigClass } from '@/packages/public'
import { VChartBarCommonConfig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import { vChartOptionPrefixHandle } from '@/packages/public/vChart'
import data from './data.json'
import cloneDeep from 'lodash/cloneDeep'
import axisThemeJson from '@/settings/vchartThemes/axis.theme.json'
import { IBarOption } from '../../index.d'

export const includes = ['legends', 'tooltip']
export const option: IBarOption & { dataset?: any } = {
  // 图表配置
  type: 'bar',
  dataset: data,
  stack: true,
  xField: ['year', 'type'],
  yField: ['value'],
  seriesField: 'type',
  // 业务配置（后续会被转换为图表spec)
  category: VChartBarCommonConfig.category,
  xAxis: {
    name: 'x轴',
    ...axisThemeJson,
    grid: {
      ...axisThemeJson.grid,
      visible: false
    }
  },
  yAxis: {
    name: 'y轴',
    ...axisThemeJson,
    grid: {
      ...axisThemeJson.grid,
      style: {
        ...axisThemeJson.grid.style,
        lineDash: [3, 3]
      }
    }
  }
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = VChartBarCommonConfig.key
  public chartConfig = cloneDeep(VChartBarCommonConfig)
  // 图表配置项
  public option = vChartOptionPrefixHandle(option, includes)
}
