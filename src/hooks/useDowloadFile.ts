import { useEffect, useState } from "react"
import axios from "axios"

export const useDownloadFile = (url: string) => {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const config: any = {
    url,
    method: "GET",
    responseType: "blob"
  }

  useEffect(() => {

    (async () => {

      try {
        const { data } = await axios.request(config)
        const url: any = URL.createObjectURL(new Blob([data]))
        setDownloadUrl(url)
      } catch (e) {
        console.log(e)
      }

    })();
  }, [])
  
  return downloadUrl
}

