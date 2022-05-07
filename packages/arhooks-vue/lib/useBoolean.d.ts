import type { Ref } from 'vue';
export declare type setBooleanActions = {
    toggle: () => void;
    set: (value: Boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
};
/**
 * @description:
 * @param {Boolean} initial 初始化
 * @return {[Ref<Boolean>, setBooleanActions]}
 */
export declare const useBoolean: (initial: Boolean) => [Ref<Boolean>, setBooleanActions];
