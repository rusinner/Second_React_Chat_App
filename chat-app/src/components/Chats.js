import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import {
  ChatEngineWrapper,
  Socket,
  ChatList,
  ChatFeed,
  ChatSettings,
} from "react-chat-engine";
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
      <ChatEngineWrapper height="calc(100vh - 66px)">
        <Socket
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName={process.env.REACT_APP_USERNAME}
          userSecret={process.env.REACT_APP_USER_SECRET}
        />
        <Row>
          <Col xs={0} sm={3}>
            <ChatList />
          </Col>

          <Col xs={12} sm={6}>
            <ChatFeed />
          </Col>

          <Col xs={0} sm={3}>
            <ChatSettings />
          </Col>
        </Row>
      </ChatEngineWrapper>
    </div>
  );
};

export default Chats;
