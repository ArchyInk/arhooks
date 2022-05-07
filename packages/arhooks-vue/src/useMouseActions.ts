/*
 * @author: Archy
 * @Date: 2022-05-06 11:22:50
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-06 11:44:13
 * @FilePath: \vue3-preview\src\hooks\useMouseActions.ts
 * @description: 
 */
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

export type UseMouseActionsOptions = {
  onEnter?: () => void;
  onLeave?: () => void;
  onDown?: (e: Event) => void;
  onUp?: (e: Event) => void;
  onMove?: (e: Event) => void;
  onClick?: (e: Event) => void;
}

export const useMouseActions = (target: ElementTarget | Ref<ElementTarget | undefined>, options?: UseMouseActionsOptions) => {
  const { onEnter, onLeave, onDown, onUp, onMove, onClick } = options || {}

  onEnter && useEventListener('mouseenter', () => {
    onEnter?.()
  }, { target })

  onLeave && useEventListener('mouseleave', () => {
    onLeave?.()
  }, { target })

  onDown && useEventListener('mousedown', (e) => {
    onDown?.(e)
  }, { target })

  onUp && useEventListener('mouseup', (e) => {
    onUp?.(e)
  }, { target })

  onMove && useEventListener('mousemove', (e) => {
    onMove?.(e)
  }, { target })

  onClick && useEventListener('click', (e) => {
    onClick?.(e)
  }, { target })

}