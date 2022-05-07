/*
 * @author: Archy
 * @Date: 2022-05-05 10:43:37
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-06 10:01:31
 * @FilePath: \vue3-preview\src\hooks\useState.ts
 * @description: 管理state的hooks，用法和react的setState类似，
 */
import { ref } from 'vue';
export const useState = (initial) => {
    const state = ref(initial);
    const setStateAction = (next) => {
        const draft = typeof next === 'function' ? next(state.value) : next;
        state.value = draft;
    };
    return [state, setStateAction];
};
