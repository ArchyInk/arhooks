# arhooks-vue/useBoolean

布尔类型数据管理

# 使用方式

```javascript
import {useBoolean} from 'arhooks-vue'

const [bool, {toggle, set, setTrue, setFalse}] = useBoolean(false)
```

# 类型

```javascript
export declare const useBoolean: (initial: Boolean) => [Ref<Boolean>, setBooleanActions];
export declare type setBooleanActions = {
    toggle: () => void; 
    set: (value: Boolean) => void; 
    setTrue: () => void;
    setFalse: () => void;
};
```

