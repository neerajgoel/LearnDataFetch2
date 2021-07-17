import React from "react";
import { Img, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components"
import { axisColor, black, gold, gray, white } from "../colors";
import "./style.css"
import { Audio } from 'remotion';
import audio_logo from './../../../audio/5 Ambient Glitch Logo.wav'

const BackgroundContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color:  rgb(32, 35, 48);
`;

function getOffset(frame: number, index: number, maxOffset: number) {
    let op;
    let minFrame = index * 5;
    if (frame < minFrame) {
        return maxOffset + "px";
    }
    let maxFrame = minFrame + 30;
    return interpolate(frame, [minFrame, maxFrame], [maxOffset, 0], { extrapolateRight: 'clamp' }) + "px";
}

function getFill(frame: number) {
    if (frame < 70) {
        return "none";
    }
    let tr = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: 'clamp' }) + "px";
    let trf = parseFloat(tr);
    let val = "rgba(255, 255, 255, " + trf.toFixed(1) + ")";
    return val;
}

function getOpacity(frame: number) {
    if (frame < 90) {
        return 1;
    }
    if( frame > 90 ){
        return interpolate(frame, [90, 100], [1, 0], { extrapolateRight: 'clamp' }) ;
    }
    if (frame > 100) {
        return 0;
    }
}

export function EnvisionLogo2() {

    const frame = useCurrentFrame();

    return (
        <BackgroundContainer>
            {/* <Audio
                src={audio_logo}
                volume={0.4} /> */}
            <svg id="logo_3" width="630" height="114" viewBox="0 0 630 114" fill={getFill(frame)} opacity={getOpacity(frame)} xmlns="http://www.w3.org/2000/svg">

                {/* E */}
                <path
                    d="M18.192 17.288V50.84H54.768V61.64H18.192V96.2H59.088V107H5.08801V6.488H59.088V17.288H18.192Z"
                    stroke="white"
                    strokeWidth="5"
                    strokeDasharray="463.9679870605469px"
                    strokeDashoffset={getOffset(frame, 0, 463.9679870605469)} />

                {/* N */}
                <path d="M157.828 107H144.724L92.0201 27.08V107H78.9161V6.488H92.0201L144.724 86.264V6.488H157.828V107Z" stroke="white"
                    strokeWidth="5"
                    strokeDasharray="604.48291015625px"
                    strokeDashoffset={getOffset(frame, 1, 604.48291015625)} />

                {/* V */}
                <path d="M263.11 6.632L225.238 107H210.118L172.246 6.632H186.214L217.75 93.176L249.286 6.632H263.11Z" stroke="white"
                    strokeWidth="5"
                    strokeDasharray="441.684326171875px"
                    strokeDashoffset={getOffset(frame, 2, 441.684326171875)} />

                {/* I */}
                <path d="M290.583 6.632V107H277.479V6.632H290.583Z" stroke="white" strokeWidth="5"
                    strokeDasharray="226.94400024414062px"
                    strokeDashoffset={getOffset(frame, 3, 226.94400024414062)} />

                {/* S */}
                <path
                    d="M344.74 108.008C338.116 108.008 332.164 106.856 326.884 104.552C321.7 102.152 317.62 98.888 314.644 94.76C311.668 90.536 310.132 85.688 310.036 80.216H324.004C324.484 84.92 326.404 88.904 329.764 92.168C333.22 95.336 338.212 96.92 344.74 96.92C350.98 96.92 355.876 95.384 359.428 92.312C363.076 89.144 364.9 85.112 364.9 80.216C364.9 76.376 363.844 73.256 361.732 70.856C359.62 68.456 356.98 66.632 353.812 65.384C350.644 64.136 346.372 62.792 340.996 61.352C334.372 59.624 329.044 57.896 325.012 56.168C321.076 54.44 317.668 51.752 314.788 48.104C312.004 44.36 310.612 39.368 310.612 33.128C310.612 27.656 312.004 22.808 314.788 18.584C317.572 14.36 321.46 11.096 326.452 8.792C331.54 6.488 337.348 5.336 343.876 5.336C353.284 5.336 360.964 7.688 366.916 12.392C372.964 17.096 376.372 23.336 377.14 31.112H362.74C362.26 27.272 360.244 23.912 356.692 21.032C353.14 18.056 348.436 16.568 342.58 16.568C337.108 16.568 332.644 18.008 329.188 20.888C325.732 23.672 324.004 27.608 324.004 32.696C324.004 36.344 325.012 39.32 327.028 41.624C329.14 43.928 331.684 45.704 334.66 46.952C337.732 48.104 342.004 49.448 347.476 50.984C354.1 52.808 359.428 54.632 363.46 56.456C367.492 58.184 370.948 60.92 373.828 64.664C376.708 68.312 378.148 73.304 378.148 79.64C378.148 84.536 376.852 89.144 374.26 93.464C371.668 97.784 367.828 101.288 362.74 103.976C357.652 106.664 351.652 108.008 344.74 108.008Z"
                    stroke="white" strokeWidth="5"
                    strokeDasharray="493.9134521484375px"
                    strokeDashoffset={getOffset(frame, 4, 493.9134521484375)} />

                {/* I */}
                <path d="M410.536 6.632V107H397.432V6.632H410.536Z" stroke="white" strokeWidth="5"
                    strokeDasharray="226.94400024414062px"
                    strokeDashoffset={getOffset(frame, 5, 226.94400024414062)} />

                {/* O */}
                <path
                    d="M478.373 108.008C469.061 108.008 460.565 105.848 452.885 101.528C445.205 97.112 439.109 91.016 434.597 83.24C430.181 75.368 427.973 66.536 427.973 56.744C427.973 46.952 430.181 38.168 434.597 30.392C439.109 22.52 445.205 16.424 452.885 12.104C460.565 7.688 469.061 5.48 478.373 5.48C487.781 5.48 496.325 7.688 504.005 12.104C511.685 16.424 517.733 22.472 522.149 30.248C526.565 38.024 528.773 46.856 528.773 56.744C528.773 66.632 526.565 75.464 522.149 83.24C517.733 91.016 511.685 97.112 504.005 101.528C496.325 105.848 487.781 108.008 478.373 108.008ZM478.373 96.632C485.381 96.632 491.669 95 497.237 91.736C502.901 88.472 507.317 83.816 510.485 77.768C513.749 71.72 515.381 64.712 515.381 56.744C515.381 48.68 513.749 41.672 510.485 35.72C507.317 29.672 502.949 25.016 497.381 21.752C491.813 18.488 485.477 16.856 478.373 16.856C471.269 16.856 464.933 18.488 459.365 21.752C453.797 25.016 449.381 29.672 446.117 35.72C442.949 41.672 441.365 48.68 441.365 56.744C441.365 64.712 442.949 71.72 446.117 77.768C449.381 83.816 453.797 88.472 459.365 91.736C465.029 95 471.365 96.632 478.373 96.632Z"
                    stroke="white" strokeWidth="5"
                    strokeDasharray="565.951416015625px"
                    strokeDashoffset={getOffset(frame, 6, 565.951416015625)} />

                {/* N */}
                <path d="M624.984 107H611.88L559.176 27.08V107H546.072V6.488H559.176L611.88 86.264V6.488H624.984V107Z" stroke="white"
                    strokeWidth="5"
                    strokeDasharray="604.4829711914062px"
                    strokeDashoffset={getOffset(frame, 7, 604.4829711914062)} />
            </svg>
        </BackgroundContainer>
    )
}