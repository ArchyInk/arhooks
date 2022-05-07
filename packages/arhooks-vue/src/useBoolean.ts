/*
 * @author: Archy
 * @Date: 2022-05-05 13:49:36
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-05 16:05:38
 * @FilePath: \vue3-preview\src\hooks\useBoolean.ts
 * @description: 
 */
import { ref, readonly } from 'vue'
import type { Ref } from 'vue'

export type setBooleanActions = {
  toggle: () => void
  set: (value: Boolean) => void
  setTrue: () => void
  setFalse: () => void
}

/**
 * @description: 
 * @param {Boolean} initial 初始化
 * @return {[Ref<Boolean>, setBooleanActions]}
 */
export const useBoolean = (initial: Boolean): [Ref<Boolean>, setBooleanActions] => {
  const state = ref<Boolean>(initial)

  const set = (value: Boolean) => {
    state.value = value
  }
  const toggle = () => {
    set(!state.value)
  }
  const setTrue = () => {
    set(true)
  }
  const setFalse = () => {
    set(false)
  }
  return [readonly(state), { toggle, set, setTrue, setFalse }]
}