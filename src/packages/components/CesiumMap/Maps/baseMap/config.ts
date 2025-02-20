import { PublicConfigClass } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { baseMapConfig } from './index'
import cloneDeep from 'lodash/cloneDeep'

export const option = {
  isLogo: 0 ,
  istTimeline:0,
  isAnimation:0,
  isFullScreen:0,
  isSearch:0,
  isHome:0,
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = baseMapConfig.key
  public chartConfig = cloneDeep(baseMapConfig)
  public option = cloneDeep(option)
}
