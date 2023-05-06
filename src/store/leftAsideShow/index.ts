import { create } from 'zustand'

type Store = {
  rightAsideShow: true | false
  rightAsideShowToggle: () => void
  rightAsideShowHide: () => void
  rightAsideShowShow: () => void
}

export const useStore = create<Store>()((set) => ({
  rightAsideShow: true,
  rightAsideShowToggle: () => set((state) => ({ rightAsideShow: !state.rightAsideShow })),
  rightAsideShowHide: () => set(() => ({ rightAsideShow: false })),
  rightAsideShowShow: () => set(() => ({ rightAsideShow: true }))
}))
