/*
 * @author: Archy
 * @Date: 2022-05-05 10:43:37
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-07 15:42:35
 * @FilePath: \arhooks\packages\arhooks-vue\src\useState\useState.ts
 * @description: 管理state的hooks，用法和react的setState类似，
 */
import { ref } from 'vue'
import type { UnwrapRef, Ref } from 'vue'

export type SetStateAction<T> = T | ((prevState: T) => T)

export const useState = <T>(initial?: T): [Ref<T>, (next: SetStateAction<T>) => void] => {
  const state = ref<T | undefined>(initial)

  const setStateAction = (next: SetStateAction<T>) => {
    const draft = typeof next === 'function' ? (next as (prevState: T) => T)(state.value as T) : next
    state.value = draft as UnwrapRef<T>
  }

  return [state as Ref<T>, setStateAction]
}

