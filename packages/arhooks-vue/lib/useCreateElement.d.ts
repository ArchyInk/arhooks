/**
 * @description: 创建Element的钩子函数
 * @param {keyof HTMLElementTagNameMap} tagName 指定要创建元素类型的字符串,创建元素时的 nodeName 使用 tagName 的值为初始化，该方法不允许使用限定名称(如:"html:a")
 * @param {Partial<HTMLElementTagNameMap[typeof tagName]>} props 属性对象
 * @param {HTMLElement | string} parent
 * @param {ElementCreationOptions} options 一个可选的参数 ElementCreationOptions 是包含一个属性名为 is 的对象，该对象的值是用 customElements.define() 方法定义过的一个自定义元素的标签名。
 * @return {HTMLElement}
 */
export declare const useCreateElement: <K extends keyof HTMLElementTagNameMap>(tagName: K, props?: Partial<HTMLElementTagNameMap[K]> | undefined, parent?: string | HTMLElement | undefined, options?: ElementCreationOptions | undefined) => HTMLElementTagNameMap[K];
