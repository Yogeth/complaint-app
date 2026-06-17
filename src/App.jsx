import { useState } from "react";
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import ViewPage from "./pages/ViewPage";
import "./styles/global.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div style={{
      fontFamily:"Inter,sans-serif"
    }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "register" ? <RegisterPage /> : <ViewPage />}
    </div>
  );
}
