import { BallTriangle, Circles, Rings } from "react-loader-spinner";

export default function Spinner() {
    const style = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",  
    };
    return (
    <div
      style={style}
      data-tip="Ball Triangle"
      data-for="happyFace"
      key="Ball Triangle"
      className="loaderBox"
    >
      <BallTriangle color="rgb(31 41 55)" height="150" width="150"/>
    </div>
  );
}
