import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './App.css'
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)

  return (
    <div className="app">
      <CSSTransition nodeRef={nodeRef} timeout={200} className="aside-transition">
        <aside className="aside left"></aside>
      </CSSTransition>
      <main className="main-container">
        <article className="editor-container"></article>
        <footer className="footer"></footer>
      </main>
      <CSSTransition nodeRef={nodeRef} timeout={200} className="aside-transition">
        <aside className="aside right components"></aside>
      </CSSTransition>
    </div>
  )
}

export default App
