/**
 * @description hoverbar 配置
 * @author wangfupeng
 */

const COMMON_HOVERBAR_KEYS = {
  // key 即 element type
  link: {
    menuKeys: ['editLink', 'unLink', 'viewLink'],
  },
  image: {
    menuKeys: [
      'imageWidth30',
      'imageWidth50',
      'imageWidth100',
      'editImage',
      'viewImageLink',
      'deleteImage',
    ],
  },
  video: {
    menuKeys: ['deleteVideo'],
  },
  pre: {
    menuKeys: ['codeBlock', 'codeSelectLang'],
  },
  table: {
    menuKeys: [
      'tableHeader',
      'tableFullWidth',
      'insertTableRow',
      'deleteTableRow',
      'insertTableCol',
      'deleteTableCol',
      'deleteTable',
    ],
  },
  divider: {
    menuKeys: ['deleteDivider'],
  },
}

export function genDefaultHoverbarKeys() {
  return {
    ...COMMON_HOVERBAR_KEYS,

    // 也可以自定义 match 来匹配元素，此时 key 就随意了
    text: {
      menuKeys: [
        'headerSelect',
        'insertLink',
        'bulletedList',
        '|',
        'bold',
        'through',
        'color',
        'bgColor',
        'clearStyle',
      ],
    },
    // other hover bar ...
  }
}

export function genSimpleHoverbarKeys() {
  return COMMON_HOVERBAR_KEYS
}
