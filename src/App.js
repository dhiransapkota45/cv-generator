import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import { useEffect } from "react";
import { fetchalluser } from "./api/services/AllUser";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchalluser());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userid" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
