import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum,ChatCategoryEnumName } from '../../index.d'

export const baseMapConfig: ConfigType = {
  key: 'baseMap',
  chartKey: 'VbaseMap',
  conKey: 'VcbaseMap',
  title: '基础底图',
  category: ChatCategoryEnum.Maps,
  categoryName: ChatCategoryEnumName.Maps,
  package: PackagesCategoryEnum.CesiumMap,
  chartFrame: ChartFrameEnum.COMMON,
  image: 'baseMap.jpg'
}
