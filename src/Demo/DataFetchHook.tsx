import { useEffect, useState } from "react";
import { continueRender } from "remotion";
import { apiURL_Metadata, getURL_FIData, url_version } from "../DataFetch/config";

export function getMaxFrameSize(d: any) {
  try{
      let myJSON = JSON.parse(d);
      let size = myJSON.metaData.frames;
      return size;
  }
  catch(err){
      console.error("MetaDataUtils", "getMaxFrameSize", "Error : ",
      err.message);
      return -1;
  }
}

export function getIndexedArray(size: number) {
  var x = [];
  for (let i = 0; i < size; i++) {
      x.push(i);
  }
  return x;
}


export const useDataFetchHook = 
    (handle: any): [null | string[], null | string, any, boolean] => {
    const [data, setData] = useState<null | string[]>(null);
    const [metadata, setMetaData] = useState<null | string>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // 2nd param - empty array so that it renders only once
    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            try {
                const response = await fetch(apiURL_Metadata);
                const d = await response.json();
                setMetaData(JSON.stringify(d));
                // console.log("useDataFetchHook", "From Metadata", JSON.stringify(d));

                let framesSize = getMaxFrameSize(JSON.stringify(d));
                console.log("useDataFetchHook", "framesSize : ", framesSize);
                let idsArr = getIndexedArray(framesSize);
                console.log("useDataFetchHook", idsArr, "ids Array");

                const messages = await Promise.all(
                    idsArr.map(async (m) => {
                        const response = await fetch(getURL_FIData(url_version, m));
                        const json = await response.json();
                        return JSON.stringify(json);
                    })
                );
                setData(messages);
            }
            catch (error) {
                console.error("Error from fetch: ", error);
                setError(error.message);
            }
            setIsLoading(false);
            // continueRender(handle);
        }
        getData();
    }, []);

    return [
        data,
        metadata,
        error,
        isLoading
    ]
}