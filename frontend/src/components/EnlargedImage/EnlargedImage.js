import React, { useContext } from "react";
import "./EnlargedImage.css";
import { ImageManipulationContext } from "../../containers/MediaItems/MediaItems";
const EnlargedImage = props => {
  const { enlarge, ...rest } = useContext(ImageManipulationContext);

  return (
    <svg
      className="EnlargedImage"
      width="17px"
      height="17px"
      viewBox="0 0 215.35 215.35"
      onClick={() => enlarge(props.path)}
    >
      <g>
        <path
          d="M7.5,65.088c4.143,0,7.5-3.358,7.5-7.5V25.61l48.305,48.295c1.465,1.464,3.384,2.196,5.303,2.196
		c1.92,0,3.84-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606L25.604,15.002h31.985c4.142,0,7.5-3.358,7.5-7.5
		c0-4.142-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.358-7.5,7.5v50.087C0,61.73,3.357,65.088,7.5,65.088z"
        />
        <path
          d="M207.85,150.262c-4.143,0-7.5,3.358-7.5,7.5v31.979l-49.792-49.792c-2.93-2.929-7.678-2.929-10.607,0
		c-2.929,2.929-2.929,7.678,0,10.606l49.791,49.791h-31.977c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h50.086
		c4.143,0,7.5-3.358,7.5-7.5v-50.084C215.35,153.62,211.992,150.262,207.85,150.262z"
        />
        <path
          d="M64.792,139.949L15.005,189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v50.086c0,4.142,3.357,7.5,7.5,7.5
		h50.084c4.142,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H25.611l49.788-49.793c2.929-2.929,2.929-7.678-0.001-10.607
		C72.471,137.02,67.722,137.02,64.792,139.949z"
        />
        <path
          d="M207.85,0.002h-50.086c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.979l-48.298,48.301
		c-2.929,2.929-2.929,7.678,0.001,10.607c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.733,5.304-2.197l48.298-48.301v31.98
		c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V7.502C215.35,3.359,211.992,0.002,207.85,0.002z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default EnlargedImage;
