/**
 * @description video menu test
 * @author luochao
 */

import createEditor from '../../../../tests/utils/create-editor'
import DeleteVideoMenu from '../../../../packages/video-module/src/module/menu/DeleteVideoMenu'
import * as core from '@wangeditor/core'
import * as slate from 'slate'

function setEditorSelection(
  editor: core.IDomEditor,
  selection: slate.Selection = {
    anchor: { path: [0, 0], offset: 0 },
    focus: { path: [0, 0], offset: 0 },
  }
) {
  editor.selection = selection
}

describe('videoModule module', () => {
  describe('module DeleteVideoMenu', () => {
    const deleteVideoMenu = new DeleteVideoMenu()
    const editor = createEditor()

    test('DeleteVideoMenu invoke getValue function should be empty string', () => {
      expect(deleteVideoMenu.getValue(editor)).toBe('')
    })

    test('DeleteVideoMenu invoke isActive function should be false', () => {
      expect(deleteVideoMenu.isActive(editor)).toBe(false)
    })

    test('DeleteVideoMenu invoke isDisabled function if editor selected video element should be false', () => {
      jest
        .spyOn(core.DomEditor, 'getSelectedNodeByType')
        .mockReturnValue({ type: 'video', children: [{ text: '' }] } as any)

      setEditorSelection(editor)

      expect(deleteVideoMenu.isDisabled(editor)).toBe(false)
    })

    test('DeleteVideoMenu invoke isDisabled function if editor do not selected video element should be true', () => {
      jest.spyOn(core.DomEditor, 'getSelectedNodeByType').mockReturnValue(null)

      setEditorSelection(editor)

      expect(deleteVideoMenu.isDisabled(editor)).toBe(true)
    })

    test('DeleteVideoMenu invoke exec function if video menu is disabled should return directly', () => {
      jest.spyOn(core.DomEditor, 'getSelectedNodeByType').mockReturnValue(null)
      const fn = jest.spyOn(slate.Transforms, 'removeNodes')

      setEditorSelection(editor)

      deleteVideoMenu.exec(editor, '')

      expect(fn).not.toBeCalled()
    })

    test('DeleteVideoMenu invoke exec function if video menu is disabled should execute transform removeNodes', () => {
      jest
        .spyOn(core.DomEditor, 'getSelectedNodeByType')
        .mockReturnValue({ type: 'video', children: [{ text: '' }] } as any)

      const fn = jest.spyOn(slate.Transforms, 'removeNodes')

      setEditorSelection(editor)

      deleteVideoMenu.exec(editor, '')

      expect(fn).toBeCalled()
    })
  })
})
