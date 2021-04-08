import React from "react";

const withClass = (WrappedComponent, className) => {
  return (peops) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
