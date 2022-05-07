/*
 * @author: Archy
 * @Date: 2022-05-05 16:27:41
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-06 13:30:46
 * @FilePath: \vue3-preview\src\hooks\useEventListener.ts
 * @description: 
 */
import { onActivated, onMounted, unref, onBeforeUnmount, onDeactivated, watch, isRef } from "vue"
import type { Ref } from 'vue'

import type { ElementTarget } from './shared'

export type UseEventListenerOptions = {
  target?: ElementTarget | Ref<ElementTarget | undefined>
} & AddEventListenerOptions

export const useEventListener = (event: string, listener: EventListenerOrEventListenerObject, options: UseEventListenerOptions = { target: window }) => {
  const { target, ...opts } = options

  let remove = () => { }
  //if element mounted
  const add = () => {
    const element = unref(target)
    if (element) {
      element.addEventListener(event, listener, opts)
      remove = () => element.removeEventListener(event, listener, opts)
    }
  }

  //else wait for element mount
  (isRef(target) && !unref(target)) &&
    watch(target, (_el) => {
      const el = unref(_el)
      if (!el) return
      el.addEventListener(event, listener, opts)
      remove = () => el.removeEventListener(event, listener, opts)
    })


  onMounted(add)
  onActivated(add)
  onBeforeUnmount(remove)
  onDeactivated(remove)

  return remove
}