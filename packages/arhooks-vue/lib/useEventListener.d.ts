import type { Ref } from 'vue';
import type { ElementTarget } from './shared';
export declare type UseEventListenerOptions = {
    target?: ElementTarget | Ref<ElementTarget | undefined>;
} & AddEventListenerOptions;
export declare const useEventListener: (event: string, listener: EventListenerOrEventListenerObject, options?: UseEventListenerOptions) => () => void;
