import { useBoolean } from "./useBoolean";
import { useEventListener } from "./useEventListener";
export const useHover = (target, options) => {
    const { onEnter, onLeave } = options || {};
    const [state, { setTrue, setFalse }] = useBoolean(false);
    useEventListener('mouseenter', () => {
        onEnter?.();
        setTrue();
    }, { target });
    useEventListener('mouseleave', () => {
        onLeave?.();
        setFalse();
    }, { target });
    return state;
};
