import React from "react";
import { MutatingDots } from "react-loader-spinner";

function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
