import { useEventListener } from "./useEventListener";
export const useMouseActions = (target, options) => {
    const { onEnter, onLeave, onDown, onUp, onMove, onClick } = options || {};
    onEnter && useEventListener('mouseenter', () => {
        onEnter?.();
    }, { target });
    onLeave && useEventListener('mouseleave', () => {
        onLeave?.();
    }, { target });
    onDown && useEventListener('mousedown', (e) => {
        onDown?.(e);
    }, { target });
    onUp && useEventListener('mouseup', (e) => {
        onUp?.(e);
    }, { target });
    onMove && useEventListener('mousemove', (e) => {
        onMove?.(e);
    }, { target });
    onClick && useEventListener('click', (e) => {
        onClick?.(e);
    }, { target });
};
