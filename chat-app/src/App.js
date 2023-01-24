import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Chats from "./components/Chats";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
