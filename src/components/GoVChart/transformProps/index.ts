import { ChatCategoryEnum, IOption } from "@/packages/components/VChart/index.d";
import bars from './bars'
export const transformHandler: {
  [key: string]: (args: IOption) => any
} = {
  [ChatCategoryEnum.BAR]: bars,
  // todo: more charts handler
}