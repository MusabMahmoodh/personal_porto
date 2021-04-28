import React, { Fragment, useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import Measure from "react-measure";

import { MdCamera, MdAutorenew } from "react-icons/md";

// import { setCameraCapture, selectCameraCapture } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";

import "./CameraApp.css";

import useCamera from "../../../hooks/useCamera";

import useCardRatio from "../../../hooks/useCardRatio";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};
const CameraApp = ({ onCapture, onClear, cardImage }) => {
  //   const dispatch = useDispatch();
  let history = useHistory();
  const webcamRef = React.useRef(null);

  const canvasRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });

  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useCamera(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  }
  const handleCapture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
    setIsFlashing(true);

    setTimeout(() => setIsFlashing(false), 751);
    // dispatch(setCameraCapture(imageSrc));
    // history.push("./preview");
  }, [webcamRef]);

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
      <Measure bounds onResize={handleResize}>
        {({ measureRef }) => (
          <>
            <div ref={measureRef} className="webCam__container">
              <div className="webCam__container__video">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    facingMode: "user",
                  }}
                />
              </div>

              <div className="webCam__container__video__overlay" />

              <div
                className={isFlashing ? "webCam__container__video__flash" : ""}
              />
            </div>
            <div className="webCam__options">
              <img src={cardImage && cardImage} alt="" />
              <MdCamera
                fontSize="large"
                onClick={isCanvasEmpty ? handleCapture : handleClear}
                className="webCam__btn"
              />
              <MdAutorenew className="webCam__env" />
            </div>
          </>
        )}
      </Measure>
    </div>
  );
};

export default CameraApp;
