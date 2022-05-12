# arhooks-vue/useEventListener

使用addEventListener的钩子函数

# 使用方式

```javascript
import {useEventListener} from 'arhooks-vue'

const div = useCreateElement('div')
const removeHandle = useEventListener('click',()=>{
  console.log('clicked')
},target:div)

removeHandle()
```

# 类型

```javascript
export declare type UseEventListenerOptions = {
    target?: ElementTarget | Ref<ElementTarget | undefined>;
} & AddEventListenerOptions;
export declare const useEventListener: (event: string, listener: EventListenerOrEventListenerObject, options?: UseEventListenerOptions) => () => void;
```

