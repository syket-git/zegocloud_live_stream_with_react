import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Room from "./screens/Room";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  );
}
