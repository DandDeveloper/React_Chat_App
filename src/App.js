import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import Modal from "./components/LoginForm";

const projectID = "7167e96f-a9c9-467c-97ac-258295f14c41";

const App = () => {
  if (!localStorage.getItem("username")) return <Modal />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
