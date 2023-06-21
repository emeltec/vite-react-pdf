import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Boxdata } from './components/Boxdata'
import { PDFViewer } from '@react-pdf/renderer'
import { PdfDoc } from './components/PdfDoc'
import { PdfWeb } from './components/PdfWeb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Header />
      <div className="container mx-auto">
        <Boxdata />

        <PdfWeb />

        {/* <PDFViewer style={{width:"100%", height:"70vh"}}>
          <PdfDoc />
        </PDFViewer> */}
      </div>
    </div>

  )
}

export default App
