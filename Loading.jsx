import { useState, CSSProperties, useContext } from "react";
import productContext from "../Context/appContext";
import { ThreeDots} from "react-loader-spinner";

function Loading() {
  const { showLoader } = useContext(productContext);
  let [loading, setLoading] = useState(showLoader);
  let [color, setColor] = useState("#A12623");

  return (
    <div className="sweet-loading dotted  m-auto">
      <ThreeDots
        height="80"
        width="60"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loading;
