
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
      <div className="container mx-auto max-sm:px-4 max-lg:px-5 xl:px-10">
        <Boxdata />

        {/* <PdfWeb /> */}

        <PDFDownloadLink className='btn rounded py-1 px-5' document={<PdfDoc />} fileName="document_basa.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'GENERANDO...' : 'GENERAR'
          }
        </PDFDownloadLink>

        <PDFViewer style={{width:"100%", height:"70vh"}}>
          <PdfDoc />
        </PDFViewer>

        

        <div className='mb-10'></div>

      </div>
    </div>

  )
}

export default App
