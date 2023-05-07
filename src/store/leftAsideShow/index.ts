import { create } from 'zustand'
import { Icon } from '@icon-park/react/es/all'
import { MenuFold, MenuUnfold } from '@icon-park/react'

export type Store = {
  leftAsideShow: true | false
  leftAsideShowTitle: string
  leftAsideShowIcon: Icon
  leftAsideShowToggle: () => void
  leftAsideShowHide: () => void
  leftAsideShowShow: () => void
}

export const useLeftAsideShowStore = create<Store>()((set) => ({
  leftAsideShow: true,
  leftAsideShowIcon: MenuUnfold,
  leftAsideShowTitle: '收起',
  leftAsideShowToggle: () =>
    set((state) => ({
      leftAsideShow: !state.leftAsideShow,
      leftAsideShowTitle: state.leftAsideShow ? '展开' : '收起',
      leftAsideShowIcon: state.leftAsideShow ? MenuFold : MenuUnfold
    })),
  leftAsideShowHide: () =>
    set((state) => ({
      leftAsideShow: false,
      leftAsideShowTitle: '展开',
      leftAsideShowIcon: MenuFold
    })),
  leftAsideShowShow: () =>
    set((state) => ({
      leftAsideShow: true,
      leftAsideShowTitle: '收起',
      leftAsideShowIcon: MenuUnfold
    }))
}))
