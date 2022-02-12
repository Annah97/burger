import { useState } from "react";

export default function Delete(props) {
  const [showResult, setShowResult] = useState(true);

  const removeSlice = () => {
    setShowResult(false);
  };

  return (
    <>{showResult ? <div onClick={removeSlice}>{props.slice}</div> : null}</>
  );
}
