import React from 'react'
import { fnDownloadFile } from '../functions/fnDowloadFile'

export const Boxdata = () => {
  const url: any = 'http://localhost:5173/file.pdf'

  return (
    <>
      <div className='my-10'>
        <div className="flex gap-4 my-4 font-medium headrow">
          <div className="flex-1 px-4 py-1">
            CUENTA BT
          </div>
          <div className="flex-1 px-4 py-1">
            RAZÓN SOCIAL
          </div>
          <div className="flex-1 px-4 py-1">
            TIPO DE DOCUMENTO
          </div>
          <div className="flex-1 px-4 py-1">
            26422131
          </div>
        </div>

        <div className="flex gap-4 font-medium my-4 bodyrow">
          <div className="flex-1 px-4 py-1">
            CUENTA BT
          </div>
          <div className="flex-1 px-4 py-1">
            RAZÓN SOCIAL
          </div>
          <div className="flex-1 px-4 py-1">
            TIPO DE DOCUMENTO
          </div>
          <div className="flex-1 px-4 py-1">
            26422131
          </div>
        </div>

        <div className="flex mt-5">
          <div className="flex-1">
            {/* <button className="btn rounded py-1 px-5" onClick={download}>GENERAR</button> */}
            <button className="btn rounded py-1 px-5" onClick={()=>fnDownloadFile(url)}>GENERAR</button>
            {/* <button className="btn rounded py-1 px-5" onClick={download}>GENERAR</button> */}
            {/* <a download={'archivo.pdf'} href={downloadUrl}>{url}</a> */}
          </div>
        </div>
      </div>
    </>
  )
}
