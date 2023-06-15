import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";

const Shimmer = () => {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <ShimmerSimpleGallery card imageHeight={250} imageWidth={100} />
      <ShimmerSimpleGallery card imageHeight={250} imageWidth={100} caption />
    </div>
  );
};

export default Shimmer;
