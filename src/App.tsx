
import './App.css'
import { Header } from './components/Header'
import { Boxdata } from './components/Boxdata'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { PdfDoc } from './components/PdfDoc'
import { PdfWeb } from './components/PdfWeb'

function App() {


  return (
    <div className="main">
      <Header />
      <div className="container mx-auto">
        <Boxdata />

        {/* <PdfWeb /> */}

        <PDFViewer style={{width:"100%", height:"70vh"}}>
          <PdfDoc />
        </PDFViewer>

        <PDFDownloadLink document={<PdfDoc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>

        <br />
        <br />
      </div>
    </div>

  )
}

export default App
