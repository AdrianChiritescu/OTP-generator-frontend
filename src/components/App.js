import "./App.css";
import { OtpProvider } from "../context/OtpContext";
import Header from "./Header";
import OtpForm from "./OtpForm";
import OtpResult from "./OtpResult";

function App() {
  return (
    <OtpProvider>
      <Header />
      <OtpForm />
      <OtpResult />
    </OtpProvider>
  );
}

export default App;
