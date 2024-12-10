import EmbedDashboard from "./components/EmbedDashboard";
import { EmbedSDKInit } from "./components/EmbedInit";

function App() {
  EmbedSDKInit();
  return (
    <EmbedDashboard title="Test Dashboard"/>
  )
}

export default App
