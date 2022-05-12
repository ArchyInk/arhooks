/*
 * @author: Archy
 * @Date: 2022-05-05 13:49:36
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-12 14:51:06
 * @FilePath: \arhooks\packages\arhooks-vue\src\useBoolean\useBoolean.ts
 * @description: 对boolean类型的state
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
export const useBoolean = (initial?: Boolean): [Ref<Boolean>, setBooleanActions] => {
  const state = ref<Boolean>(initial || false)

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

  return [state, { toggle, set, setTrue, setFalse }]
}