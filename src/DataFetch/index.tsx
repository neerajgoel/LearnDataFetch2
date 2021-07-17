import { useCallback, useEffect, useState } from "react";
import { continueRender, delayRender } from "remotion";
import { useDataFetchHook } from "./DataFetchHook";
import { BackgroundContainer } from "./DataFetchStyle";

export const DataFetch = () => {

  
  // const [data, metadata, error, isLoading] = useDataFetchHook(handle);
  const [data, setData] = useState<null | string[]>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [metadata, setMetaData] = useState<null | string>(null);
  const [handle] = useState(() => delayRender());

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:8080/common?ver=long&dt=metadata')
    const json = await response.json()
    setMetaData(JSON.stringify(json))

    setIsLoading(false);
    continueRender(handle);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData, handle]);

  return (
    <BackgroundContainer>
      <h1>Hello world</h1>
      <h1>{metadata}</h1>
    </BackgroundContainer>
  )

}