# arhooks-vue/useMouseActions

管理鼠标事件的钩子函数

# 使用方式

```javascript
import {useMouseActions} from 'arhooks-vue'

const div = useCreateElement('div',{ width:'100px', height:'100px' })
useMouseActions(div,{
  onEnter:()=>{ console.log('enter') },
  onLeave:()=>{ console.log('leave') },
  onDown:()=>{ console.log('down') },
  onUp:()=>{ console.log('up') },
  onMove:()=>{ console.log('move') },
  onClick:()=>{ console.log('click') },
})
```

# 类型

```javascript
export declare type UseMouseActionsOptions = {
    onEnter?: () => void;
    onLeave?: () => void;
    onDown?: (e: Event) => void;
    onUp?: (e: Event) => void;
    onMove?: (e: Event) => void;
    onClick?: (e: Event) => void;
};
export declare const useMouseActions: (target: ElementTarget | Ref<ElementTarget | undefined>, options?: UseMouseActionsOptions | undefined) => void;

```

