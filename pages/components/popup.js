import React from "react";

const Popup = (props) => {
  return (
    <div className="fixed top-[30%] right-[30%] bg-white  w-1/2">
      {props.children}
    </div>
  );
};

export default Popup;
