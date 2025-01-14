import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileDetail from "./pages/ProfileDetail";
import ProfileEdit from "./pages/ProfileEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileDetail />} />
        <Route path="/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
