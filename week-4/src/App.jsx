import Page from "./Assignment-3";
import APIresult from "./Assignment-4";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/remote-assignments/week-4/" element={<Page />} />
        <Route path="/remote-assignments/week-4/assignment-4" element={<APIresult />} />
      </Routes>
    </>
  );
}

export default App;
