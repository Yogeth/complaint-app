import { useState } from "react";
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import ViewPage from "./pages/ViewPage";
import "./styles/global.css";
import { isConnected } from "./services/complaintService";
import BackendRequired from "./components/BackendRequired";

export default function App() {
  const [activeTab, setActiveTab] = useState("register");
  const [connect,setConnect] =useState(false)
  isConnected().then(connect=>setConnect(connect));

  return (
    <div style={{
      fontFamily:"Inter,sans-serif"
    }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "register" ? <RegisterPage /> : <ViewPage />}
     {!connect&& <BackendRequired/>}
    </div>
  );
}
