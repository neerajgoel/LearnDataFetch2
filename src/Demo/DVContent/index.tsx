import { useEffect, useState } from "react";
import { continueRender, delayRender, useCurrentFrame } from "remotion";
import styled from "styled-components";
import { apiURL_Metadata, getURL_FIData, url_version } from "../../DataFetch/config";
import { getIndexedArray, getMaxFrameSize, useDataFetchHook } from "../DataFetchHook";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  // background-color: #fff;
  background-color: #ffffff;
  // border: 30px solid red;
  opacity: 1;
  padding: 20px;
`;

const FrameCounterContainer = styled.h1`
  position: absolute;
  height: 40px;
  text-color: #000;
  font-size: 35px;
  // border: 3px solid red;
  top: 0;
  right: 0;
  margin-right: 5px;
  margin-top: 5px;
`;

export function DVContent() {

  //const [data, metadata, error, isLoading] = useDataFetchHook(handle);

  const [data, setData] = useState<null | string[]>(null);
  const [metadata, setMetaData] = useState<null | string>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const [handle] = useState(() => delayRender());

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:8080/common?ver=long&dt=metadata')
    const json = await response.json()
    setData(json)

    setIsLoading(false);
    continueRender(handle)
  }

  useEffect(() => {
    fetchData();
  }, []);



  const frame = useCurrentFrame();

  if( isLoading ){
    return (
      <BackgroundContainer>
        <FrameCounterContainer 
          style={{ 
            display: 'inline' 
          }}>
            {frame},{Math.floor(frame/30)}
        </FrameCounterContainer>
        <h1>Loading.........</h1>
    </BackgroundContainer>
    )
  }

  return (
    <BackgroundContainer>

        <FrameCounterContainer 
          style={{ 
            display: 'inline' 
          }}>
            {frame},{Math.floor(frame/30)}
        </FrameCounterContainer>

      <h1>Hello world</h1>
    </BackgroundContainer>
  )

}