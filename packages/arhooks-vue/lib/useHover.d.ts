import { Ref } from "vue";
import type { ElementTarget } from "./shared";
export declare type UseHoverOptions = {
    onEnter?: () => void;
    onLeave?: () => void;
};
export declare const useHover: (target: ElementTarget | Ref<ElementTarget | undefined>, options?: UseHoverOptions | undefined) => Ref<Boolean>;
