import React from "react";
import ChatBot from "./ChatBot"; // ChatBot.tsx를 import
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <ChatBot /> {/* ChatBot 컴포넌트 렌더링 */}
    </div>
  );
};

export default App;
