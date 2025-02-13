/**
 * @description formats entry
 * @author wangfupeng
 */

import { Text as SlateText, Element as SlateElement } from 'slate'
import { VNode } from 'snabbdom'
import { IDomEditor } from '../editor/interface'

// ------------------------------------ 处理 text 样式 ------------------------------------

export type RenderTextStyleFnType = (node: SlateText | SlateElement, vnode: VNode) => VNode

// 存储：处理文本样式的函数，如 b u color 等
export const TEXT_STYLE_HANDLER_LIST: RenderTextStyleFnType[] = []

/**
 * 注册处理文本样式的函数
 * @param fn 处理文本样式的函数
 */
export function registerTextStyleHandler(fn: RenderTextStyleFnType) {
  TEXT_STYLE_HANDLER_LIST.push(fn)
}

// ------------------------------------ render elem ------------------------------------

export type RenderElemFnType = (
  elemNode: SlateElement,
  children: VNode[] | null,
  editor: IDomEditor
) => VNode

// 注册 render element 配置
export const RENDER_ELEM_CONF: {
  [key: string]: RenderElemFnType // key 要和 node.type 对应 ！！！
} = {}

export interface IRenderElemConf {
  type: string
  renderElem: RenderElemFnType
}

/**
 * 注册 render elem 函数
 * @param conf { type, renderElem } ，type 即 node.type
 */
export function registerRenderElemConf(conf: IRenderElemConf) {
  const { type, renderElem } = conf
  const key = type || ''

  // 如果 key 重复了，就后者覆盖前者
  RENDER_ELEM_CONF[key] = renderElem
}
