import React from "react";
import Dashboard from "views/pages/Dashboard/Dashboard";

const style = {
  bg: "h-screen w-screen p-4 bg-gradient-to-r from-[#171717] to-[#3d3d3d]",
};

function App() {
  return (
    <div className={style.bg}>
      <Dashboard />
    </div>
  );
}

export default App;
