import { create } from 'zustand'

type Store = {
  leftAsideShow: true | false
  leftAsideShowToggle: () => void
  leftAsideShowHide: () => void
  leftAsideShowShow: () => void
}

export const useStore = create<Store>()((set) => ({
  leftAsideShow: true,
  leftAsideShowToggle: () => set((state) => ({ leftAsideShow: !state.leftAsideShow })),
  leftAsideShowHide: () => set((state) => ({ leftAsideShow: false })),
  leftAsideShowShow: () => set((state) => ({ leftAsideShow: true }))
}))
