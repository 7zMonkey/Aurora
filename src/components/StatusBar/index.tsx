import { useLeftAsideShowStore } from '../../store/leftAsideShow/index'
import { useRightAsideShowStore } from '../../store/rightAsideShow/index'
import { StatusBarItem, useStatusBarStore } from '../../store/statusBar/index'

const { leftAsideShowTitle, leftAsideShowIcon, leftAsideShowToggle } = useLeftAsideShowStore((state) => state)
const { rightAsideShowTitle, rightAsideShowIcon, rightAsideShowToggle } = useRightAsideShowStore((state) => state)
const { StatusBar, addStatusBar } = useStatusBarStore((state: any) => state)
const leftAsideStatusBar: StatusBarItem = {
  id: 'leftAsideStatusBar',
  name: 'leftAsideStatusBar',
  icon: leftAsideShowIcon,
  position: 'left',
  title: leftAsideShowTitle,
  click: leftAsideShowToggle,
  priority: 10
}

const rightAsideStatusBar: StatusBarItem = {
  id: 'rightAsideStatusBar',
  name: 'rightAsideStatusBar',
  icon: rightAsideShowIcon,
  position: 'right',
  title: rightAsideShowTitle,
  click: rightAsideShowToggle,
  priority: 10
}
addStatusBar(leftAsideStatusBar, rightAsideStatusBar)

export default function () {
  return (
    <footer className="status-bar">
      <ul className="left-part part"></ul>
      <ul className="right-part part"></ul>
    </footer>
  )
}
