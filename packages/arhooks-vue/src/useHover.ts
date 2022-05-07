/*
 * @author: Archy
 * @Date: 2022-05-06 10:34:27
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-06 11:06:01
 * @FilePath: \vue3-preview\src\hooks\useHover.ts
 * @description: 
 */
import { Ref } from "vue";
import type { ElementTarget } from "./shared"
import { useBoolean } from "./useBoolean";
import { useEventListener } from "./useEventListener";

export type UseHoverOptions = {
  onEnter?: () => void;
  onLeave?: () => void;
}

export const useHover = (target: ElementTarget|Ref<ElementTarget|undefined>, options?: UseHoverOptions) => {
  const { onEnter, onLeave } = options || {}

  const [state, { setTrue, setFalse }] = useBoolean(false)

  useEventListener('mouseenter', () => {
    onEnter?.()
    setTrue()
  }, { target })

  useEventListener('mouseleave', () => {
    onLeave?.()
    setFalse()
  }, { target })

  return state
}