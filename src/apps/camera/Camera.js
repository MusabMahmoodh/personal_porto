import React, { Fragment, useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import Measure from "react-measure";
import { FaRegCircle } from "react-icons/fa";

// import { setCameraCapture, selectCameraCapture } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";

import "./Camera.css";
import useWindowSize from "../../hooks/useWindowSize";
import useCamera from "../../hooks/useCamera";

import useCardRatio from "../../hooks/useCardRatio";
import useOffsets from "../../hooks/useOffSets";
const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};
const CameraApp = ({ onCapture, onClear }) => {
  //   const dispatch = useDispatch();
  let history = useHistory();
  const size = useWindowSize();

  const videoRef = useRef();
  const canvasRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useCamera(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <div className="webCam">
      {/* <Camera
        isFullscreen={true}
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      /> */}
      <Measure bounds onResize={handleResize}>
        {({ measureRef }) => (
          <>
            <div
              ref={measureRef}
              maxHeight={videoRef.current && videoRef.current.videoHeight}
              maxWidth={videoRef.current && videoRef.current.videoWidth}
              style={{
                height: `${container.height}px`,
              }}>
              <video
                ref={videoRef}
                hidden={!isVideoPlaying}
                onCanPlay={handleCanPlay}
                autoPlay
                playsInline
                muted
                style={{
                  top: `-${offsets.y}px`,
                  left: `-${offsets.x}px`,
                }}
              />

              <div hidden={!isVideoPlaying} />

              <canvas
                ref={canvasRef}
                width={container.width}
                height={container.height}
              />

              <div
                flash={isFlashing}
                onAnimationEnd={() => setIsFlashing(false)}
              />
            </div>

            {isVideoPlaying && (
              <button onClick={isCanvasEmpty ? handleCapture : handleClear}>
                {isCanvasEmpty ? "Take a picture" : "Take another picture"}
              </button>
            )}
          </>
        )}
      </Measure>
      {/* <FaRegCircle fontSize="large" onClick={capture} className="webCam__btn" /> */}

      {/* <img src={dispatch(selectCameraCapture())} /> */}
    </div>
  );
};

export default CameraApp;
