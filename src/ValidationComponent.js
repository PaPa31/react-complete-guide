import React from "react";

const validationComponent = (props) => {
  let lenn = "Text to short";

  if (props.leng >= 5) lenn = "Text long enough";

  return <p>{lenn}</p>;
};

export default validationComponent;
