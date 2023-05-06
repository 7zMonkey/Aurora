import { create } from 'zustand'
import { IconType } from '@icon-park/react/es/all'

type StatusBar = {
  id: String
  name: String
  icon: IconType
  position: 'right' | 'left'
  title: String
  click: () => void | undefined
  priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}
type Store = {
  statusBar: Array<StatusBar>
  addStatusBar: (...content: Array<StatusBar>) => void
  removeStatusBar: (id: String) => void
}

export const useStore = create<Store>()((set) => ({
  statusBar: [],
  addStatusBar: (...content: Array<StatusBar>) => set((state) => ({ statusBar: state.statusBar.concat(content) })),
  removeStatusBar: (id: String) => set((state) => ({ statusBar: state.statusBar.filter((e) => e.id !== id) }))
}))
