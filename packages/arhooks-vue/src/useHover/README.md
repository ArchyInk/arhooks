# arhooks-vue/useHover

鼠标进入和移出事件的钩子函数

# 使用方式

```javascript
import {useHover} from 'arhooks-vue'

const div = useCreateElement('div',{ width:'100px', height:'100px' })
const hoverState = useHover(div,{
  onEnter:()=>{ console.log('enter') },
  onLeave:()=>{ console.log('leave') }
})
```

# 类型

```javascript
export declare type UseHoverOptions = {
    onEnter?: () => void;
    onLeave?: () => void;
};
export declare const useHover: (target: ElementTarget | Ref<ElementTarget | undefined>, options?: UseHoverOptions | undefined) => Ref<Boolean>;

```

