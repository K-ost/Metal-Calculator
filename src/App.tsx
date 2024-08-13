import { Route, Routes } from "react-router-dom"
import { useAppStore } from "./store/appStore"
import MetalCalc from "./pages/MetalCalc"
import PaintCalc from "./pages/PaintCalc"
import Sidebar from "./components/sidebar/Sidebar"
import InfoPage from "./pages/InfoPage"
import { useEffect } from "react"

function App() {
  const { aside, theme } = useAppStore()

  if (theme) {
    document.body.setAttribute('data-theme', 'light')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }

  useEffect(() => {
    aside ? document.body.classList.add('modalOpened') : document.body.classList.remove('modalOpened')
  }, [aside])
  

  return (
    <>
      <Sidebar />
      <div className="app">
        <Routes>
          <Route index path="/" element={<MetalCalc />} />
          <Route path="/paint" element={<PaintCalc />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
