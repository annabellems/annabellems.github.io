// import React, { useState, useEffect } from "react";
// import "./App.css";
// import {ProgressBar} from "./containers/ProgressBar";

// const testData =[{bgcolor:'red',completed:60},{bgcolor:'green',completed:30}];

// function App() {
//   const [completed, setCompleted] = useState(0);

//   useEffect(() => {
//     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
//   }, []);

  
//   return (
//     <div className="App">
//       {testData.map((item,idx)=>(
//       <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import {ProgressBar} from "./containers/ProgressBar";

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
}

export default App;