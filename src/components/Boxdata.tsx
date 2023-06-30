import React from 'react'
import { fnDownloadFile } from '../functions/fnDowloadFile'

export const Boxdata = ({data}:any) => {
  const actualUrl = window.location.href;
  const urlPdf: any = `${actualUrl}file.pdf`
  console.log(data)

  return (
    <>
      <div className='my-10'>
        <div className='flex flex-col max-sm:flex-row'>
          <div className="flex gap-4 my-4 font-medium headrow w-full max-sm:flex-col">
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
              NÚMERO DE DOCUMENTO
            </div>
          </div>

          <div className="flex gap-4 font-medium my-4 bodyrow w-full max-sm:flex-col">
            <div className="flex-1 px-4 py-1">
            26422131
            </div>
            <div className="flex-1 px-4 py-1">
              LAMINADOS S.A.C.
            </div>
            <div className="flex-1 px-4 py-1">
              R.U.C.
            </div>
            <div className="flex-1 px-4 py-1">
              20101228992
            </div>
          </div>
        </div>


      </div>

      {/* <div className="flex mt-5">
        <div className="flex-1">
          <button className="btn rounded py-1 px-5" onClick={() => fnDownloadFile(urlPdf)}>GENERAR</button>
        </div>
      </div> */}
    </>
  )
}
