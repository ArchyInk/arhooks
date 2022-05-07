/*
 * @author: Archy
 * @Date: 2022-05-05 13:49:36
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-05 16:05:38
 * @FilePath: \vue3-preview\src\hooks\useBoolean.ts
 * @description:
 */
import { ref, readonly } from 'vue';
/**
 * @description:
 * @param {Boolean} initial 初始化
 * @return {[Ref<Boolean>, setBooleanActions]}
 */
export const useBoolean = (initial) => {
    const state = ref(initial);
    const set = (value) => {
        state.value = value;
    };
    const toggle = () => {
        set(!state.value);
    };
    const setTrue = () => {
        set(true);
    };
    const setFalse = () => {
        set(false);
    };
    return [readonly(state), { toggle, set, setTrue, setFalse }];
};
