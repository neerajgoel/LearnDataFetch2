import { useState } from "react";
import { delayRender, Sequence } from "remotion";
import styled from "styled-components";
import { DVContent } from "./DVContent";
import { EnvisionLogo2 } from "./EnvisionLogo2";


export const BackgroundContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
// background-color: #fff;
background-color: #ffffff;
// border: 30px solid red;
opacity: 1;
padding: 20px;
`;

export function Demo() {

  return (
    <BackgroundContainer>
      <EnvisionLogo2/>

      <Sequence
          from={120}
          durationInFrames={1080 - 1} >
          <DVContent/>
      </Sequence>
    </BackgroundContainer>
  )

}