import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum,ChatCategoryEnumName } from '../../index.d'

export const ExcavateConfig: ConfigType = {
  key: 'Excavate',
  chartKey: 'VExcavate',
  conKey: 'VCExcavate',
  title: '地形开挖',
  category: ChatCategoryEnum.Analysis, 
  categoryName: ChatCategoryEnumName.Analysis,
  package: PackagesCategoryEnum.CesiumMap,
  chartFrame: ChartFrameEnum.COMMON,
  image: 'Excavate.jpg'
}
