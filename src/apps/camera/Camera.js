import React, { Fragment, useEffect, useState } from "react";

import CameraApp from "./cameraApp/CameraApp";

export default function Camera() {
  const [cardImage, setCardImage] = useState();
  useEffect(() => {
    console.log(cardImage);
  }, [cardImage]);

  return (
    <Fragment>
      {/* {isCameraOpen && ( */}
      <CameraApp
        onCapture={(data) => setCardImage(data)}
        onClear={() => setCardImage(undefined)}
        cardImage={cardImage}
      />
      {/* )} */}
    </Fragment>
  );
}
