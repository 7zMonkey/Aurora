import { create } from 'zustand'
import { Icon } from '@icon-park/react/es/all'
import { MenuFold, MenuUnfold } from '@icon-park/react'

export type Store = {
  rightAsideShow: true | false
  rightAsideShowTitle: string
  rightAsideShowIcon: Icon
  rightAsideShowToggle: () => void
  rightAsideShowHide: () => void
  rightAsideShowShow: () => void
}

export const useRightAsideShowStore = create<Store>()((set) => ({
  rightAsideShow: true,
  rightAsideShowIcon: MenuFold,
  rightAsideShowTitle: '收起',
  rightAsideShowToggle: () =>
    set((state) => ({
      rightAsideShow: !state.rightAsideShow,
      rightAsideShowTitle: state.rightAsideShow ? '展开' : '收起',
      rightAsideShowIcon: state.rightAsideShow ? MenuFold : MenuUnfold
    })),
  rightAsideShowHide: () =>
    set(() => ({
      rightAsideShow: false,
      rightAsideShowTitle: '展开',
      rightAsideShowIcon: MenuFold
    })),
  rightAsideShowShow: () =>
    set(() => ({
      rightAsideShow: true,
      rightAsideShowTitle: '收起',
      rightAsideShowIcon: MenuUnfold
    }))
}))
