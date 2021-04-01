import React from "react";

const validationComponent = (props) => {
  let lenn = "Text too short";

  if (props.leng >= 5) lenn = "Text long enough";

  return (
    <div>
      <p>{lenn}</p>
    </div>
  );
};

export default validationComponent;
