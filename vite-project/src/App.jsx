import "./App.css"
import React, { useState} from "react";
import Context from "./Components/Context";
import Content from "./Components/Content";

function App(){
  return (
    <>
    <Context>
      <Content />
    </Context>
    </>
  )
}

export default App;