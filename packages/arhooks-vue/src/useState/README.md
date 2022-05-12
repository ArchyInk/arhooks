# arhooks-vue/useState

数据管理，跟react的useState类似

# 使用方式

```javascript
import {useState} from 'arhooks-vue'

const [num, setNum] = useState<number>(0)

setNum(1) //setNum((prev)=>prev++)

```

# 类型

```javascript
export declare type SetStateAction<T> = T | ((prevState: T) => T);
export declare const useState: <T>(initial?: T | undefined) => [Ref<T>, (next: SetStateAction<T>) => void];

```

