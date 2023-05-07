import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useLeftAsideShowStore } from './store/leftAsideShow'
import { useRightAsideShowStore } from './store/rightAsideShow'

import StatusBar from './components/StatusBar'
import './assets/css/transition/aside.css'
import './App.css'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const nodeRef = useRef(null)
  const leftAsideShow = useLeftAsideShowStore((state) => state.leftAsideShow)
  const rightAsideShow = useRightAsideShowStore((state) => state.rightAsideShow)

  return (
    <div className="app">
      <CSSTransition
        unmountOnExit
        in={leftAsideShow}
        nodeRef={nodeRef}
        timeout={200}
        className="aside-transition aside left"
      >
        <aside></aside>
      </CSSTransition>
      <main className="main-container">
        <article className="editor-container"></article>
        <StatusBar />
      </main>
      <CSSTransition
        unmountOnExit
        in={rightAsideShow}
        nodeRef={nodeRef}
        timeout={200}
        className="aside-transition aside right components"
      >
        <aside></aside>
      </CSSTransition>
    </div>
  )
}

export default App
