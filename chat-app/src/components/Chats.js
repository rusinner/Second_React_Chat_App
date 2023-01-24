import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/", { replace: true });
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">TotalChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={process.env.REACT_APP_USERNAME}
        userSecret={process.env.REACT_APP_USER_SECRET}
      />
    </div>
  );
};

export default Chats;
