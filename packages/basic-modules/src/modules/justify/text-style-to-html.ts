/**
 * @description textStyle to html
 * @author wangfupeng
 */

import { Element, Text } from 'slate'
import $ from '../../utils/dom'
import { JustifyElement } from './custom-types'

export function textStyleToHtml(node: Text | Element, elemHtml: string): string {
  if (!Element.isElement(node)) return elemHtml

  const { textAlign } = node as JustifyElement // 如 'left'/'right'/'center' 等
  if (!textAlign) return elemHtml

  // 设置样式
  const $elem = $(elemHtml)
  $elem.css('text-align', textAlign)

  // 输出 html
  const $div = $('<div></div>')
  $div.append($elem)
  return $div.html()
}
