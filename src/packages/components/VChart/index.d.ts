import { IBarChartSpec } from '@visactor/vchart'
import { ICartesianAxisCommonSpec } from '@visactor/vchart/esm/component/axis'


export enum ChatCategoryEnum {
  BAR = 'Bars',
}

export enum ChatCategoryEnumName {
  BAR = '柱状图',
}

export interface IBarOption extends Omit<IBarChartSpec, 'axes'> {
  category: ChatCategoryEnum.BAR
  type: 'bar'
  xAxis?: {
    name: string
  } & ICartesianAxisCommonSpec
  yAxis?: {
    name: string
  } & ICartesianAxisCommonSpec
}

// todo
// export type IOption = IBarOption | ILineOption ....
export type IOption = IBarOption 
