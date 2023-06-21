import { useEffect, useState } from "react"
import axios from "axios"

export const fnDownloadFile = async (url: string) => {
  const config: any = {
    url,
    method: "GET",
    responseType: "blob",
    onDownloadProgress: (progressEvent: any) => {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(percentCompleted)
    }
  }

  try {
    const { data } = await axios.request(config)
    const url = URL.createObjectURL(new Blob([data]))
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
  } catch (e) {
    console.log(e)
  }
}

/*
export const useDownloadFile2 = async(url: string) => {
  let urlData:any ;
  const config: any = {
    url,
    method: "GET",
    responseType: "blob",
    onDownloadProgress: (progressEvent: any) => {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(percentCompleted)
    }
  }

  try {
    const { data } = await axios.request(config)
    urlData = URL.createObjectURL(new Blob([data]))
  } catch (e) {
    console.log(e)
  }

  return urlData
}
*/

/*
export const useDownloadFile2 = async(url: string) => {
const url2 = `https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4`;
    axios({
        url: url2,
        method: "GET",
        responseType: "blob",
        onDownloadProgress: (progressEvent:any) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted)
        },
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "pixabay.mp4");
        document.body.appendChild(link);
        link.click();
    });
  }
*/