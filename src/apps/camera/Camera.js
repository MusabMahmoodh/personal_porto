import React, { Fragment, useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";

import { FaRegCircle } from "react-icons/fa";
// import Camera from "react-html5-camera-photo";
import { Camera } from "react-cam";
// import { setCameraCapture, selectCameraCapture } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";

import "./Camera.css";
import useWindowSize from "../../hooks/useWindowSize";

const CameraApp = () => {
  //   const dispatch = useDispatch();
  let history = useHistory();
  const size = useWindowSize();
  const cam = useRef(null);
  function capture(imgSrc) {
    console.log(imgSrc);
  }

  const [options, setOptions] = useState({
    width: "100%",
    height: "100%",
    facingMode: "user",
  });
  useEffect(() => {
    setOptions({ ...options, width: size.width, height: size.height });
  }, [size]);
  //   const capture = React.useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     // dispatch(setCameraCapture(imageSrc));
  //     history.push("./preview");
  //   }, [webcamRef]);

  return (
    <div className="webCam">
      {/* <Camera
        isFullscreen={true}
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      /> */}
      <Fragment>
        <Camera
          showFocus={true}
          front={false}
          capture={capture}
          ref={cam}
          width={options.width}
          height={options.height}
          focusWidth={options.width}
          focusHeight={options.height}
          btnColor="white"
        />
        <FaRegCircle
          className="webCam__btn"
          onClick={(img) => cam.current.capture(img)}
        />
      </Fragment>

      {/* <FaRegCircle fontSize="large" onClick={capture} className="webCam__btn" /> */}

      {/* <img src={dispatch(selectCameraCapture())} /> */}
    </div>
  );
};

export default CameraApp;
