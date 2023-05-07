import { create } from 'zustand'
import { Icon } from '@icon-park/react/es/all'

export type StatusBarItem = {
  id: string
  name: string
  icon: Icon | undefined
  position: 'right' | 'left'
  title: string
  click: () => void | undefined
  priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export type Store = {
  statusBar: Array<StatusBarItem>
  leftStatusBar: Array<StatusBarItem>
  rightStatusBar: Array<StatusBarItem>
  addStatusBar: (...content: Array<StatusBarItem>) => void
  removeStatusBar: (id: String) => void
}

export const useStatusBarStore = create<Store>()((set) => ({
  statusBar: [],
  leftStatusBar: [],
  rightStatusBar: [],
  addStatusBar: (...content: Array<StatusBarItem>) => {
    const leftStatusBarContent: Array<StatusBarItem> = content.filter((e) => e.position !== 'left')
    const rightStatusBarContent: Array<StatusBarItem> = content.filter((e) => e.position !== 'right')
    return set((state) => ({
      statusBar: state.statusBar.concat(content).filter((e, i, a) => a.findIndex((b) => b.id === e.id) === i),
      leftStatusBar: state.leftStatusBar
        .concat(leftStatusBarContent)
        .filter((e, i, a) => a.findIndex((b) => b.id === e.id) === i),
      rightStatusBar: state.rightStatusBar
        .concat(rightStatusBarContent)
        .filter((e, i, a) => a.findIndex((b) => b.id === e.id) === i)
    }))
  },
  removeStatusBar: (id: String) => {
    return set((state) => ({
      statusBar: state.statusBar.filter((e) => e.id !== id),
      leftStatusBar: state.leftStatusBar.filter((e) => e.id !== id),
      rightStatusBar: state.rightStatusBar.filter((e) => e.id !== id)
    }))
  }
}))
