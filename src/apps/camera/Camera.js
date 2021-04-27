import React from "react";
// import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { FaRegCircle } from "react-icons/fa";

// import { setCameraCapture, selectCameraCapture } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";

import "./Camera.css";

const options = {
  width: "100%",
  height: " 100%",
  facingMode: "user",
};
const Camera = () => {
  const webcamRef = React.useRef(null);
  //   const dispatch = useDispatch();
  let history = useHistory();
  //   const capture = React.useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     // dispatch(setCameraCapture(imageSrc));
  //     history.push("./preview");
  //   }, [webcamRef]);

  return (
    <div className="webCam">
      <Webcam
        audio={false}
        height={options.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={options.width}
        videoConstraints={options}
      />

      {/* <FaRegCircle fontSize="large" onClick={capture} className="webCam__btn" /> */}
      <FaRegCircle className="webCam__btn" />

      {/* <img src={dispatch(selectCameraCapture())} /> */}
    </div>
  );
};

export default Camera;
