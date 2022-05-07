import type { Ref } from 'vue';
export declare type SetStateAction<T> = T | ((prevState: T) => T);
export declare const useState: <T>(initial?: T | undefined) => [Ref<T>, (next: SetStateAction<T>) => void];
