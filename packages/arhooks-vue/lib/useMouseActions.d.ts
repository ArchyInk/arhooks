import { Ref } from "vue";
import type { ElementTarget } from "./shared";
export declare type UseMouseActionsOptions = {
    onEnter?: () => void;
    onLeave?: () => void;
    onDown?: (e: Event) => void;
    onUp?: (e: Event) => void;
    onMove?: (e: Event) => void;
    onClick?: (e: Event) => void;
};
export declare const useMouseActions: (target: ElementTarget | Ref<ElementTarget | undefined>, options?: UseMouseActionsOptions | undefined) => void;
