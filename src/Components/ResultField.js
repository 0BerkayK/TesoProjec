import React from "react";
import Views1 from "./Views1";
import Views2 from "./Views2";
import Views3 from "./Views3";
import ShowMoreButton from "./ShowMoreButton";

export default function ResultField() {
  return (
    <div className="rectangle4">
      <Views1></Views1>
      <Views2></Views2>
      <Views3></Views3>
      <ShowMoreButton></ShowMoreButton>
    </div>
  );
}
