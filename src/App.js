import "./App.css";
import Movies from "./component/list"
import { Route, Routes } from 'react-router-dom'

import DesCard from "./Description/DesCard";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path=":id" element={<DesCard />} />
    </Routes>
  );
}

export default App;