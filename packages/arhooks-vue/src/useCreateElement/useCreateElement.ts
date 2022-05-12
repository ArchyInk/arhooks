/*
 * @author: Archy
 * @Date: 2022-05-05 11:10:17
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-07 15:40:41
 * @FilePath: \arhooks\packages\arhooks-vue\src\useCreateElement\useCreateElement.ts
 * @description: 创建Element的钩子函数
 */

/**
 * @description: 创建Element的钩子函数
 * @param {keyof HTMLElementTagNameMap} tagName 指定要创建元素类型的字符串,创建元素时的 nodeName 使用 tagName 的值为初始化，该方法不允许使用限定名称(如:"html:a")
 * @param {Partial<HTMLElementTagNameMap[typeof tagName]>} props 属性对象
 * @param {HTMLElement | string} parent
 * @param {ElementCreationOptions} options 一个可选的参数 ElementCreationOptions 是包含一个属性名为 is 的对象，该对象的值是用 customElements.define() 方法定义过的一个自定义元素的标签名。
 * @return {HTMLElement}
 */

export const useCreateElement = <K extends keyof HTMLElementTagNameMap>
  (tagName: K,
    props?: Partial<HTMLElementTagNameMap[typeof tagName]>,
    parent?: HTMLElement | string,
    options?: ElementCreationOptions): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tagName, options)
  if (props) {
    const propsKeys = props && Object.keys(props) as (keyof HTMLElementTagNameMap[typeof tagName])[]
    for (let prop of propsKeys) {
      element[prop] = props[prop] as HTMLElementTagNameMap[K][keyof HTMLElementTagNameMap[K]]
    }
  }

  if (parent instanceof HTMLElement) {
    parent.appendChild(element)
  } else if (typeof parent === 'string') {
    const p = document.getElementById(parent)
    p && p.appendChild(element)
  }

  return element
}